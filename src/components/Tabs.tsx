import { useState } from 'react';
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

export function TabItemTags({ tabItems, selectedId, updateSelectedId }: TabItemTagsProps) {
  return tabItems.map((item) => (
    <div
      key={item.id}
      className="tab-item-tag"
      style={{ backgroundColor: selectedId === item.id ? 'white' : '#dcdcdc' }}
      onClick={() => updateSelectedId(item.id)}
    >
      {item.title}
    </div>
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
      <div className="tab-display-space">{tabItems.filter((item) => selectedId === item.id)[0].components.value}</div>
    </div>
  );
}
