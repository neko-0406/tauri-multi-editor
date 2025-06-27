use std::fs::{self};

#[tauri::command]
pub fn read_file_to_string(path: String) -> Option<String> {
    if let Ok(content) = fs::read_to_string(path) {
        return Some(content);
    }
    return None;
}

#[tauri::command]
pub fn write_string_to_file(path: String, contents: String) -> bool {
    let result = fs::write(path, contents);
    match result {
        Ok(_) => true,
        Err(_) => false
    }
}