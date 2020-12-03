export function formateDateWords(date) {
    const xDate = new Date(date);
    /*const month = `${xDate.getMonth(date)}`;*/
    
    const arr=[
       'Января',
       'Февраля',
       'Марта',
       'Апреля',
       'Мая',
       'Июня',
       'Июля',
       'Августа',
       'Сентября',
       'Октября',
       'Ноября',
       'Декабря',
    ];
    
    return(`${xDate.getUTCDate(date)} ${arr[xDate.getUTCMonth(date)]} ${xDate.getUTCFullYear(date)}`);
};