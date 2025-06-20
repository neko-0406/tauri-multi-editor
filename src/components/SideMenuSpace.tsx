import { useState } from 'react';
import SideMenuSplitter from './SideMenuSplitter';
import { useAppState } from './AppState/StateProvider';

export default function SideMenuSpace() {
  const { appState } = useAppState();
  const [spaceWidth, setSpaceWidth] = useState<number>(appState.sideMenuSpaceWidth);
  return (
    <div className="side-menu-space" style={{ width: `${spaceWidth}px` }}>
      <SideMenuSplitter updateElementWidth={setSpaceWidth} />
    </div>
  );
}
