use std::env;

#[tauri::command]
pub fn get_execute_dir() -> Option<String> {
    if let Ok(exe_path) = env::current_dir() {
        if let Some(parent_path) = exe_path.parent() {
            let str_path = parent_path.to_string_lossy().to_string();
            Some(str_path)
        } else {
            None
        }
    } else {
        None
    }
    
}