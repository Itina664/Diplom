export default class GithubApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
      }

    getCommits(userName) {
        return fetch(`${this.baseUrl}${userName}`)
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