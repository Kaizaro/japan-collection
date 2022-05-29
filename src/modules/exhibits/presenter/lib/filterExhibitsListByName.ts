import {IExhibit} from '@src/modules/exhibits/entities';
import {EXHIBITS} from '@src/modules/exhibits/DAL/exhibits/exhibits';

export const filterExhibitsListByName = (searchText: string): IExhibit[] => {
    if (searchText.length === 0) {
        return EXHIBITS;
    } else {
        const parsedNumber = parseInt(searchText, 10);
        if (!isNaN(parsedNumber)) {
            const filteredExhibits = EXHIBITS.filter((exhibit) =>
                exhibit.exhibit_number?.toString().startsWith(searchText),
            );

            if (filteredExhibits) {
                return filteredExhibits;
            } else {
                return [];
            }
        } else {
            const filteredExhibits = EXHIBITS.filter((exhibit) =>
                exhibit.title.startsWith(searchText),
            );

            if (filteredExhibits) {
                return filteredExhibits;
            } else {
                return [];
            }
        }
    }
};
