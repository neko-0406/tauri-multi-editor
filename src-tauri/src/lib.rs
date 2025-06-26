mod file_utils;
use file_utils::execute_dir::get_execute_dir;
use file_utils::file_io::read_file_to_string;

use crate::file_utils::file_io::write_string_to_file;
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            get_execute_dir,
            read_file_to_string,
            write_string_to_file
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
