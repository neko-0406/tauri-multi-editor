import { useCallback, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
import '../styles/Tabs.css';
import { useAppState } from './AppState/StateProvider';
import Editor from './lexicalEditor/Editor';

export type FileType = 'md' | 'txt' | 'image' | 'svg';

export type components = {
  type: FileType;
  path: string;
  value: string;
};

export type FileItemData = {
  id: string;
  title: string;
  components: components;
};

// TabItemの引数
type TabItemProps = {
  fileItemData: FileItemData;
  selectedId: string | null;
  updateSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
};

// TabItemTagsの引数
type TabItemTagsProps = {
  selectedId: string | null;
  updateSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
};

type TabItemValueProps = {
  selectedId: string;
};

export function TabItem({ fileItemData, selectedId, updateSelectedId }: TabItemProps) {
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
      style={{ backgroundColor: selectedId === fileItemData.id ? 'white' : '#dcdcdc' }}
      onClick={() => updateSelectedId(fileItemData.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tab-item-tag-title-space">{fileItemData.title}</div>
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

export function TabItemTags({ selectedId, updateSelectedId }: TabItemTagsProps) {
  const { appState } = useAppState();

  return appState.openFiles.map((item) => (
    <TabItem key={item.id} fileItemData={item} selectedId={selectedId} updateSelectedId={updateSelectedId} />
  ));
}

function TabItemValue({ selectedId }: TabItemValueProps) {
  const { appState } = useAppState();
  const fileItemData: FileItemData | undefined = appState.openFiles.find((item) => item.id === selectedId);

  if (fileItemData === undefined) return null;

  const fileType: string = fileItemData.components.type;
  if (fileType === 'md') {
    return <Editor fileItem={fileItemData} />;
  } else if (fileType === 'txt') return null;
  else if (fileType === 'image') return null;
  else if (fileType === 'svg') return null;
}

export function TabContainer() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { appState } = useAppState();

  return (
    <div className="tab-space">
      {/* タブのタグ部分を置くところ */}
      <div className="tab-tag-container">
        <TabItemTags selectedId={selectedId} updateSelectedId={setSelectedId} />
      </div>
      {/* 選択されたタブの内容を表示するところ */}
      <div className="tab-display-space">
        {appState.openFiles.find((item) => item.id === selectedId)?.components.path}
      </div>
    </div>
  );
}
