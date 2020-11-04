export default class NewsApi {
    constructor(baseUrl, request, lastday, today, apiKey, headers) {
      this.baseUrl = baseUrl;
      this.request = request;
      this.lastday = lastday;
      this.today = today;
      this.apiKey = apiKey;
      this.headers = headers;
      
    }

    getNewsCards(request) {
        return fetch(`${this.baseUrl}q=${this.request}&from=${this.lastday}&to=${this.today}&apiKey=${this.apiKey}`, {
            method: 'GET',
            headers: this.headers
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
