import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import { useAppState } from '../../AppState/StateProvider';
import { FileItemData } from '../../Tabs';
import { $convertFromMarkdownString, TRANSFORMERS } from '@lexical/markdown';

type EditorInitializePluginProps = {
  fileItem: FileItemData
}

export default function EditorInitializePlugin({ fileItem }: EditorInitializePluginProps) {
  const { appState } = useAppState();
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const selefData = appState.openFiles.find(item => item.id === fileItem.id)
    if (selefData) {
      editor.update(() => {
        const markdown = selefData.components.value
        $convertFromMarkdownString(markdown, TRANSFORMERS);
      })
    } else {
      const fileItemData: FileItemData = {
        id: '',
        title: '',
        components: {
          type: 'md',
          path: '',
          value: ''
        }
      }
    }
  }, []);

  return null;
}
