use std::fs;

#[tauri::command]
pub fn read_file_to_string(path: String) -> Option<String> {
    if let Ok(content) = fs::read_to_string(path) {
        Some(content);
    }
    None
}