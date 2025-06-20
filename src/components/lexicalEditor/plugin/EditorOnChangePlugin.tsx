import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical"
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

type EditorOnChangePluginProps = {
    onEditorStateChange: (editorState: EditorState) => void;
}

export default function EditorOnChangePlugin({ onEditorStateChange }: EditorOnChangePluginProps) {
    const [editor] = useLexicalComposerContext();

    return <OnChangePlugin onChange={onEditorStateChange} />
}