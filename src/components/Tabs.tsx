import { useCallback, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import '../styles/Tabs.css';

export type TabItemData = {
  id: string;
  title: string;
  components: {
    type: string;
    value: string;
    path: string;
  };
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
      key={tabItemData.id}
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
    <TabItem tabItemData={item} selectedId={selectedId} updateSelectedId={updateSelectedId} />
  ));
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
      <div className="tab-display-space">{tabItems.find((item) => selectedId === item.id)?.components.value}</div>
    </div>
  );
}
