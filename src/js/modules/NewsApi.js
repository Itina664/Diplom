export default class NewsApi {
    constructor(baseUrl, request, lastday, today, apiKey) {
      this.baseUrl = baseUrl;
      this.request = request;
      this.lastday = lastday;
      this.today = today;
      this.apiKey = apiKey;
    }

    getNewsCards(request) {
        return fetch(`${this.baseUrl}q=${request}&from=${this.lastday}&to=${this.today}&apiKey=${this.apiKey}`, {
            method: 'GET',
            })
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

