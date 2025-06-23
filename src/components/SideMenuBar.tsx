import { FaGear } from 'react-icons/fa6';

export default function SideMenuBar() {
  return (
    <div className="side-menu-bar-container">
      {/* 検索などを入れるところ */}
      <div className="side-menu-top-icon-container"></div>
      {/* 設定などを入れるとこ */}
      <div className="side-menu-bottom-icon-container"></div>
    </div>
  );
}

export function SideMenuItemIcom() {
  return (
    <button className="side-menu-button-icon" type="button">
      <FaGear size={30} />
    </button>
  );
}
