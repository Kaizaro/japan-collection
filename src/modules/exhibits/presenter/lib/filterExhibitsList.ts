import {IExhibit} from '@src/modules/exhibits/entities';
import {TExhibitFilterCategoryId} from '@src/modules/exhibits/entities';

export const filterExhibitsList = (
    list: IExhibit[],
    selectedCategory: TExhibitFilterCategoryId,
): IExhibit[] => {
    return list.filter((item) => item.category === selectedCategory);
};
