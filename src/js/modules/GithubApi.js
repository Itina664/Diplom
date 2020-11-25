export default class GithubApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
      }

    getCommits() {
        /*return fetch(`${this.baseUrl}q=${request}&from=${today}&apiKey=${this.apiKey}`)*/
        /*return fetch(https://api.github.com/repos/yandex/localization-context-extension/commits)*/
        return fetch(`${this.baseUrl}`)
        .then(res => {
            return this._getResponseData(res) 
        })
    };

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`); 
        }
        
        return res.json();
        
    }

}