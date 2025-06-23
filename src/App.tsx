import './styles/App.css';
import { AppSettingProvider } from './components/AppSetting/SettingProvider';
import { AppStateProvider } from './components/AppState/StateProvider';
import SideMenuSpace from './components/SideMenuSpace';
import { TabContainer, TabItemData } from './components/Tabs';
import SideMenuBar, { SideMenuItem } from './components/SideMenuBar';
import { FaGear } from 'react-icons/fa6';

const demoData: SideMenuItem = {
  label: 'gear',
  icon: <FaGear size={30} />,
  click: () => console.log('gear!!'),
};

const tabData: TabItemData[] = [
  {
    id: 'test-1',
    title: 'test-title1',
    components: {
      type: 'md',
      value: '# テスト1だぜ',
      path: './test.md',
    },
  },
  {
    id: 'test-2',
    title: 'test-title2',
    components: {
      type: 'md',
      value: '# テスト2だぜ',
      path: './test.md',
    },
  },
];

function App() {
  return (
    <AppSettingProvider>
      <AppStateProvider>
        <div className="main-container">
          {/* サイドメニューバー */}
          <div className="side-menu-bar">
            <SideMenuBar sideMenuItems={[demoData]} />
          </div>
          {/* サイドメニューバー関連のUI置くとこ・基本閉じる*/}
          <SideMenuSpace />
          {/* アイテム表示部分 */}
          <div className="main-display-space">
            <TabContainer tabItems={tabData} />
          </div>
        </div>
        <div className="app-status-bar"></div>
      </AppStateProvider>
    </AppSettingProvider>
  );
}

export default App;
