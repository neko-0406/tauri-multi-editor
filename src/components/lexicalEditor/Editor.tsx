import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { EditorState } from "lexical";

const theme = {} // 後で別ファイルに分離
function onError(error: any) {
  console.log(error);
} 
export default function Editor(editorState: EditorState) {
  const initialConfig = {
    namespace: 'editor',
    theme,
    onError,
    editorState
  }

  return(
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            aria-placeholder="ここに入力..."
            placeholder={<div>ここに入力...</div>}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  )
}