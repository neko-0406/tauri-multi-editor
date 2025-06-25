import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useAppSettings } from '../../AppSetting/SettingProvider';
import { FileItemData, components } from '../../Tabs';
import { useCallback, useRef } from 'react';
import { EditorState } from 'lexical';
import { useAppState } from '../../AppState/StateProvider';

import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';

type EditorOnChangePluginProps = {
  fileItem: FileItemData;
};

export default function EditorOnChangePlugin({ fileItem }: EditorOnChangePluginProps) {
  const [editor] = useLexicalComposerContext();
  const { appState, setAppState } = useAppState();
  const autSaveRef = useRef<boolean>(useAppSettings().settings.autoSave);

  const saveEditorChange = useCallback((editorState: EditorState) => {
    const markdown = editor.read(() => {
      return $convertToMarkdownString(TRANSFORMERS);
    });

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

    if (autSaveRef.current) {
      // auto saveが有効な時
    } else {
      // auto saveが無効な時
    }
  }, []);

  return <OnChangePlugin onChange={saveEditorChange} />;
}
