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

  const writeContent = useCallback(async() => {
    const markdown = editorState?.read(() => {
      return $convertToMarkdownString(TRANSFORMERS);
    });
    const result: boolean = await invoke<boolean>('write_string_to_file', {
      path: fileItem.components.path,
      contents: markdown,
    });
    if (!result) {
      console.log('ファイルの書き込みに失敗しました。');
    }
  }, [editorState])

  useEffect(() => {

  }, [editorState])

  return <OnChangePlugin onChange={setEditorState} />;
}
