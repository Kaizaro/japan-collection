export const renderNumberWithDelimiters = (value: string | number): string => {
    if (typeof value === 'number' || (typeof value === 'string' && !isNaN(parseInt(value)))) {
        let valueForRender: string;
        if (typeof value === 'number') {
            valueForRender = value.toString(10);
        } else {
            valueForRender = value;
        }
        return valueForRender.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
    } else {
        return '0';
    }
};
