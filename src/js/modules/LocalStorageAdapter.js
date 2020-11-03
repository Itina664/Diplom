export default class LocalStorageAdapter {
    storageData = JSON.stringify(data); //превращаем данные в строку
    
    setItem(key, data) // сохранить пару ключ/значение.
    getItem(key) //получить данные по ключу key.

    getFromStorageData = JSON.parse(storageData);
}