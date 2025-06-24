import { useCallback, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import '../styles/Tabs.css';
import Editor from './lexicalEditor/Editor';
import { findTabById } from '../utils/tabUtils';

export type FileType = 'md' | 'txt' | 'image' | 'svg';

export type components = {
  type: FileType;
  path: string;
};

export type TabItemData = {
  id: string;
  title: string;
  components: components;
};

// TabItemの引数
type TabItemProps = {
  tabItemData: TabItemData;
  selectedId: string | null;
  updateSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
};

// TabItemTagsの引数
type TabItemTagsProps = {
  tabItems: TabItemData[];
  selectedId: string | null;
  updateSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
};

// TabItemValueの引数
type TabItemValueProps = {
  tabItem: TabItemData | undefined;
};

// TabContainerの引数
type TabContainerProps = {
  tabItems: TabItemData[];
};

export function TabItem({ tabItemData, selectedId, updateSelectedId }: TabItemProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <div
      className="tab-item-tag"
      style={{ backgroundColor: selectedId === tabItemData.id ? 'white' : '#dcdcdc' }}
      onClick={() => updateSelectedId(tabItemData.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tab-item-tag-title-space">{tabItemData.title}</div>
      <div className="tab-item-tag-icon-space">
        {isHover ? (
          <button type="button" className="tab-item-tag-remove">
            <FaXmark size={15} />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function TabItemTags({ tabItems, selectedId, updateSelectedId }: TabItemTagsProps) {
  return tabItems.map((item) => (
    <TabItem key={item.id} tabItemData={item} selectedId={selectedId} updateSelectedId={updateSelectedId} />
  ));
}

export function TabItemValue({ tabItem }: TabItemValueProps) {
  if (tabItem === undefined) return null;
  else if (tabItem.components.type === 'md') {
    return <Editor />;
  } else if (tabItem.components.type === 'txt') {
    return null;
  } else if (tabItem.components.type === 'image') {
    return null;
  } else if (tabItem.components.type === 'svg') {
    return null;
  }
}

export function TabContainer({ tabItems }: TabContainerProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="tab-space">
      {/* タブのタグ部分を置くところ */}
      <div className="tab-tag-container">
        <TabItemTags tabItems={tabItems} selectedId={selectedId} updateSelectedId={setSelectedId} />
      </div>
      {/* 選択されたタブの内容を表示するところ */}
      <div className="tab-display-space">
        <TabItemValue tabItem={findTabById(tabItems, selectedId)} />
      </div>
    </div>
  );
}
