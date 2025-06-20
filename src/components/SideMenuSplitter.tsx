import { useCallback, useRef } from "react";
import "../styles/SideMenuSplitter.css"

type SideMenuSplitterProps = {
  updateElementWidth: React.Dispatch<React.SetStateAction<number>>;
};

export default function SideMenuSplitter({ updateElementWidth }: SideMenuSplitterProps) {
    const isMouseDown = useRef<boolean>(false);

    const splitterMouseMove = useCallback((event: MouseEvent) => {
      event.preventDefault();
      if (isMouseDown.current) {
        updateElementWidth((pre) => pre + event.movementX);
      }
    }, []);

    const splitterMouseUp = useCallback((event: MouseEvent) => {
      event.preventDefault();
      isMouseDown.current = false;
      document.removeEventListener('mousemove', splitterMouseMove);
      document.removeEventListener('mouseup', splitterMouseUp)
    }, []);

    const splitterMouseDown = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      isMouseDown.current = true;
      document.addEventListener('mousemove', splitterMouseMove);
      document.addEventListener('mouseup', splitterMouseUp);
    }, []);

    const splitterDraggable = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
    }, []);

    return <div className="side-menu-splitter" onMouseDown={splitterMouseDown} onDrag={splitterDraggable} />
}