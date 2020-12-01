export default class NewsApi {
    constructor(options) {
      this.baseUrl = options.baseUrl;
      this.apiKey = options.apiKey;
      this.lastday = options.lastday;
      this.today = options.today;
    }
/*baseUrl, apiKey, lastday, today*/

    getNewsCards(request) {

        return fetch(`${this.baseUrl}` + new URLSearchParams({
            apiKey: this.apiKey, 
            q: request,
            from: this.lastday,
            to: this.today,
            sortBy: 'publishedAt',   
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
