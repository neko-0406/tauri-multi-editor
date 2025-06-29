import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useState } from 'react';

import { EditorState } from 'lexical';
import { useAppState } from '../../AppState/StateProvider';
import { useAppSettings } from '../../AppSetting/SettingProvider';

export default function EditorOnChangePlugin() {
  const { setAppState } = useAppState();
  const { settings } = useAppSettings();
  const [editorState, setEditorState] = useState<EditorState>();

  return <OnChangePlugin onChange={setEditorState} />;
}
