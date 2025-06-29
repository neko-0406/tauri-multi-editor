import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import { useAppState } from '../../AppState/StateProvider';

export default function EditorInitializePlugin() {
  const { appState } = useAppState();
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
  }, []);

  return null;
}
