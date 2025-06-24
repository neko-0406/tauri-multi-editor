import { FileItemData } from "../components/Tabs";

export function findTabById(tabs: FileItemData[], id: string | null) {
    if (id === null) return undefined;
    return tabs.find(tab => tab.id === id);
}