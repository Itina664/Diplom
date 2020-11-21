export function formateDateDigits(date) {
    const xDate = new Date(date);
    
    return(`${xDate.getUTCFullYear(date)}-${xDate.getUTCMonth(date) + 1}-${xDate.getUTCDate(date)}`);
};