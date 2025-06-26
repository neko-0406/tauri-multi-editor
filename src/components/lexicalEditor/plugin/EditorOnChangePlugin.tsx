import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { FileItemData } from '../../Tabs';
import { useCallback, useEffect, useState } from 'react';

import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';
import { EditorState } from 'lexical';
import { useAppState } from '../../AppState/StateProvider';
import { useAppSettings } from '../../AppSetting/SettingProvider';
import { invoke } from '@tauri-apps/api/core';

type EditorOnChangePluginProps = {
  fileItem: FileItemData;
};

export default function EditorOnChangePlugin({ fileItem }: EditorOnChangePluginProps) {
  const { setAppState } = useAppState();
  const { settings } = useAppSettings();
  const [editorState, setEditorState] = useState<EditorState>();

  const writeContent = useCallback(
    async (content: string | undefined) => {
      if (!content) return;
      const result: boolean = await invoke<boolean>('write_string_to_file', {
        path: fileItem.components.path,
        contents: content,
      });
      if (!result) {
        console.log('ファイルの書き込みに失敗しました。');
      }
    },
    [fileItem.components.path]
  );

  useEffect(() => {
    if (!editorState) return;

    const markdown = editorState.read(() => {
      return $convertToMarkdownString(TRANSFORMERS);
    });

    if (markdown !== undefined && markdown !== '') {
      setAppState((preState) => ({
        ...preState,
        openFiles: preState.openFiles.map((file) =>
          file.id === fileItem.id
            ? {
                ...file,
                components: {
                  ...file.components,
                  value: markdown,
                },
              }
            : file
        ),
      }));
    }


    if (settings.autoSave) {
      // autsave -> true
      writeContent(markdown);
    }
  }, [editorState, fileItem.id, setAppState, settings.autoSave, writeContent]);

  return <OnChangePlugin onChange={setEditorState} />;
}
