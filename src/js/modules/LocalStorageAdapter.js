export default class LocalStorageAdapter {
    
    setItemLocalStorage (key, data) {
        localStorage.setItem(key, data); // сохранить пару ключ/значение.
    }
    
    getItemLocalStorage (key) {
        return localStorage.getItem(key) //получить данные по ключу key.
    }
    
}