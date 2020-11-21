export function formateDay(date) {
    const xDate = new Date(date);
    
    const arr=[
       'вск',
       'пн',
       'вт',
       'ср',
       'чт',
       'пт',
       'сб',
       
    ];
    
    return(`${xDate.getUTCDate(date)}, ${arr[xDate.getUTCDay(date)]}`);
};