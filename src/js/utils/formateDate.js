export function formateDate(date) {
    const xDate = new Date(date);
    const month = `${xDate.getMonth(date)}`;
    
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
    
    return(`${xDate.getDate(date)} ${arr[xDate.getMonth(date)]} ${xDate.getFullYear(date)}`);
};