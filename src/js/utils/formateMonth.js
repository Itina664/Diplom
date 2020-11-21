export function formateMonth(date) {
    const month = new Date(date);
    /*const month = `${xDate.getMonth(date)}`;*/
    
    const arr=[
       'Январь',
       'Февраль',
       'Март',
       'Апрель',
       'Май',
       'Июнь',
       'Июль',
       'Август',
       'Сентябрь',
       'Октябрь',
       'Ноябрь',
       'Декабрь',
    ];
    
    return(`${arr[month.getUTCMonth(date)]}`);
}