import {IExhibit} from '@src/modules/exhibits/entities';
import {EXHIBITS} from '@src/modules/exhibits/DAL/exhibits/exhibits';

export const filterExhibitsListByName = (searchText: string): IExhibit[] => {
    console.log('@FILTER', searchText);
    console.log('@FILTER', searchText.length);
    if (searchText.length === 0) {
        return EXHIBITS;
    } else if (searchText.length < 3) {
        const parsedNumber = parseInt(searchText, 10);
        console.log('@FILTER', parsedNumber);
        console.log('@FILTER', 'isNaN', !isNaN(parsedNumber));
        if (!isNaN(parsedNumber)) {
            const filteredExhibits = EXHIBITS.filter((exhibit) =>
                exhibit.exhibit_number?.toString().startsWith(searchText),
            );
            console.log('@FILTER', 'filteredExhibits', filteredExhibits);

            if (filteredExhibits) {
                return filteredExhibits;
            } else {
                return [];
            }
        }
    }
};
