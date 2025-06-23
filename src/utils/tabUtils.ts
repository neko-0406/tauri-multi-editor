import { TabItemData } from "../components/Tabs";

export function findTabById(tabs: TabItemData[], id: string | null) {
    if (id === null) return null;
    return tabs.find(tab => tab.id === id);
}