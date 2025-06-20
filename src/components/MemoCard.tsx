import { EditorState } from 'lexical';
import { useState } from 'react';

export type MemoCardInfo = {
  cardId: string;
  title: string;
  value: EditorState;
  posX: number;
  posY: number;
  width: number;
  height: number;
};

export default function MemoCard(memoCardInfo: MemoCardInfo): JSX.Element {
  const [cardWidth, setCardWidth] = useState<number>(memoCardInfo.width);
  const [cardHeight, setCardHeight] = useState<number>(memoCardInfo.height);
  const [posX, setPosX] = useState<number>(memoCardInfo.posX);
  const [posY, setPosY] = useState<number>(memoCardInfo.posY);
  return <div style={{ width: cardWidth, height: cardHeight, top: posX, left: posY }}></div>;
}
