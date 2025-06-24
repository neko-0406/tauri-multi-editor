import '../styles/SideMenuBar.css';

export type SideMenuItem = {
  id: string;
  icon: JSX.Element;
  click: () => void;
};

type SideMenuBarProps = {
  sideMenuTopItems?: SideMenuItem[];
  sideMenuBottomItems?: SideMenuItem[];
};

export default function SideMenuBar({ sideMenuTopItems, sideMenuBottomItems }: SideMenuBarProps) {
  return (
    <div className="side-menu-bar-container">
      {/* 検索などを入れるところ */}
      <div className="side-menu-top-icon-container">
      {sideMenuTopItems?.map((item) => (
          <SideMenuItemIcom id={item.id} icon={item.icon} click={item.click} />
        ))}
      </div>
      {/* 設定などを入れるとこ */}
      <div className="side-menu-bottom-icon-container">
        {sideMenuBottomItems?.map((item) => (
          <SideMenuItemIcom id={item.id} icon={item.icon} click={item.click} />
        ))}
      </div>
    </div>
  );
}

export function SideMenuItemIcom({ icon, click }: SideMenuItem) {
  return (
    <button className="side-menu-button-icon" type="button" onClick={click}>
      {icon}
    </button>
  );
}
