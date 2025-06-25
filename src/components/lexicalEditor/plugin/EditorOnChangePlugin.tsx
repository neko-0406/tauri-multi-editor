import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { FileItemData } from '../../Tabs';
import { useCallback, useRef } from 'react';

import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';
import { EditorState } from 'lexical';
import { useAppState } from '../../AppState/StateProvider';
import { useAppSettings } from '../../AppSetting/SettingProvider';

type EditorOnChangePluginProps = {
  fileItem: FileItemData;
};

export default function EditorOnChangePlugin({ fileItem }: EditorOnChangePluginProps) {
  const { setAppState } = useAppState();
  const { settings } = useAppSettings();

  const changeCallback = useCallback((editorState: EditorState) => {
    const markdown = editorState.read(() => {
      return $convertToMarkdownString(TRANSFORMERS)
    })

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
  }, [fileItem.id, setAppState]);

  if (settings.autoSave) { // 自動保存が有効
    
  }
  else { // 自動保存が無効

  }

  return <OnChangePlugin onChange={changeCallback} />;
}
