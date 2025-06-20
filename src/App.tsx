import './styles/App.css';
import { AppSettingProvider } from './components/AppSetting/SettingProvider';
import { AppStateProvider } from './components/AppState/StateProvider';
import SideMenuSpace from './components/SideMenuSpace';

function App() {
  return (
    <AppSettingProvider>
      <AppStateProvider>
        <div className="main-container">
          {/* サイドメニューバー */}
          <div className="side-menu-bar"></div>
          {/* サイドメニューバー関連のUI置くとこ */}
          <SideMenuSpace />
          {/* アイテム表示部分 */}
          <div className="main-display-space"></div>
        </div>
        <div className="app-status-bar"></div>
      </AppStateProvider>
    </AppSettingProvider>
  );
}

export default App;
