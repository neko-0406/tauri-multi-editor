import Editor from './lexicalEditor/Editor';

import '../styles/Memo.css';
import { useState } from 'react';

interface MemoProps {}
interface MemoBoardProps {}

type MemoPosition = { x: number; y: number };
type MemoSize = { w: number; h: number };

export function Memo({}: MemoProps) {
  const [memoPosition, setMemopostion] = useState<MemoPosition>({x:50, y:50});
  const [memoSize, setMemoSize] = useState<MemoSize>({w:150, h:110});

  
  return (
    <div
      className="memo"
      style={{
        top: `${memoPosition.x}px`,
        left: `${memoPosition.y}px`,
        width: `${memoSize.w}px`,
        height: `${memoSize.h}px`,
      }}
    >
      <div className="memo-title-space"></div>
      <div className="markdown-space">
        <Editor />
      </div>
      <div className="memo-resize-area" />
    </div>
  );
}

export default function MemoBoard({}: MemoBoardProps) {
  return (
    <div className="memo-board-space">
      <Memo />
    </div>
  );
}
