class NewsApi {
    constructor(userInput, dateString, apiKey, headers) {
      this.userInput = userInput;
      this.dateString = dateString;
      this.apiKey = apiKey;
      this.headers = headers;
    }

    getNewsCards() {
        return fetch(`http://newsapi.org/v2/everything?q=${userInput}&from=${dateString}&apiKey=${apiKey}`, {
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
