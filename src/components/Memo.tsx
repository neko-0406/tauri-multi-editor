import Editor from './lexicalEditor/Editor';

import '../styles/Memo.css';
import { useCallback, useRef, useState } from 'react';
import { AiOutlineRead } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';

interface MemoProps {}
interface MemoBoardProps {}

type MemoPosition = { x: number; y: number };
type MemoSize = { w: number; h: number };

export function Memo({}: MemoProps) {
  const [memoPosition, setMemoPostion] = useState<MemoPosition>({x:50, y:50});
  const [memoSize, setMemoSize] = useState<MemoSize>({w:150, h:110});
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const isResizing = useRef<boolean>(false);

  const handleIsEditClick = useCallback(() => setIsEdit(pre => !pre), [])

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
      <div className="memo-icon-space">
        <button type='button' className='memo-tool-button' onClick={handleIsEditClick}>{isEdit ? <AiOutlineEdit size={20}/> : <AiOutlineRead size={20}/> }</button>
      </div>
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
