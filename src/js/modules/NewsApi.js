export default class NewsApi {
    constructor(baseUrl, apiKey) {
      this.baseUrl = baseUrl;
      this.apiKey = apiKey
    }

    getNewsCards(request, lastday, today) {

        return fetch(`${this.baseUrl}` + new URLSearchParams({
            q: request,
            from: lastday,
            to: today,
            sortBy: 'publishedAt',
            apiKey: this.apiKey 
        }))
        /*return fetch(`${this.baseUrl}q=${request}&from=${today}&apiKey=${this.apiKey}`)*/
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
