import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import editorTheme from './EditorTheme';
import editorNodes from './EditorNode';
import { CharacterLimitPlugin } from '@lexical/react/LexicalCharacterLimitPlugin';
import { ClickableLinkPlugin } from '@lexical/react/LexicalClickableLinkPlugin';
import { HashtagPlugin } from '@lexical/react/LexicalHashtagPlugin';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import EditorOnChangePlugin from './plugin/EditorOnChangePlugin';
import { FileItemData } from '../Tabs';
import { TRANSFORMERS } from '@lexical/markdown';

type EditorProps = {
  fileItem: FileItemData;
};

function onError(error: any) {
  console.log(error);
}

export default function Editor({ fileItem }: EditorProps) {
  const initialConfig = {
    namespace: 'editor',
    nodes: editorNodes,
    editorTheme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable aria-placeholder="ここに入力..." placeholder={<div>ここに入力...</div>} />}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <CharacterLimitPlugin charset={'UTF-8'} maxLength={Number.MAX_SAFE_INTEGER} />
      <ClickableLinkPlugin />
      <HashtagPlugin />
      <HorizontalRulePlugin />
      <ListPlugin />
      <TabIndentationPlugin maxIndent={10} />
      <TablePlugin hasCellMerge={true} hasCellBackgroundColor={true} hasHorizontalScroll={true} />
      <LinkPlugin />
      <CheckListPlugin />
      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      <EditorOnChangePlugin fileItem={fileItem} />
    </LexicalComposer>
  );
}
