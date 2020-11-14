export default class DataStorage {
    constructor(data) {
        this.data = data;
    }
    
    setData(data) {
        localStorage.setItem('data', JSON.stringify(data)); 
        localStorage.setItem('totalResults', data.totalResults);
        localStorage.setItem('articles', JSON.stringify(data.articles));
    }

    getData() {
        return JSON.parse(localStorage.getItem('data'));
    }

    getTotalResults() {
        return localStorage.getItem('totalResults');
    }

    getArticles() {
        return JSON.parse(localStorage.getItem('articles'));
    }

    setRequest(request) {
        localStorage.setItem('keyword', request.value);
    }

    getRequest() {
        return localStorage.getItem('keyword');       
    }   
}