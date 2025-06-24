import './styles/App.css';
import { AppSettingProvider } from './components/AppSetting/SettingProvider';
import { AppStateProvider } from './components/AppState/StateProvider';
import SideMenuSpace from './components/SideMenuSpace';
import { TabContainer } from './components/Tabs';
import SideMenuBar, { SideMenuItem } from './components/SideMenuBar';
import { FaGear } from 'react-icons/fa6';

const demoData: SideMenuItem = {
  id: '',
  icon: <FaGear size={30} />,
  click: () => console.log('gear!!'),
};

function App() {
  return (
    <AppSettingProvider>
      <AppStateProvider>
        <div className="main-container">
          {/* サイドメニューバー */}
          <div className="side-menu-bar">
            <SideMenuBar sideMenuBottomItems={[demoData]} />
          </div>
          {/* サイドメニューバー関連のUI置くとこ・基本閉じる*/}
          <SideMenuSpace />
          {/* アイテム表示部分 */}
          <div className="main-display-space">
            <TabContainer />
          </div>
        </div>
        <div className="app-status-bar"></div>
      </AppStateProvider>
    </AppSettingProvider>
  );
}

export default App;
