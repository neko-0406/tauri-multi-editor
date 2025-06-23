import '../styles/SideMenuBar.css';

export type SideMenuItem = {
  label: string;
  icon: JSX.Element;
  click: () => void;
};

type SideMenuBarProps = {
  sideMenuItems: SideMenuItem[]
}

export default function SideMenuBar({ sideMenuItems }: SideMenuBarProps) {
  return (
    <div className="side-menu-bar-container">
      {/* 検索などを入れるところ */}
      <div className="side-menu-top-icon-container"></div>
      {/* 設定などを入れるとこ */}
      <div className="side-menu-bottom-icon-container">
        {sideMenuItems.map((item) => (
          <SideMenuItemIcom label={item.label} icon={item.icon} click={item.click} />
        ))}
      </div>
    </div>
  );
}

export function SideMenuItemIcom({ label, icon, click }: SideMenuItem) {
  return (
    <button className="side-menu-button-icon" type="button" onClick={click}>
      {icon}
    </button>
  );
}
