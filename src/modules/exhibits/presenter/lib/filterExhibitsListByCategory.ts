import {IExhibit} from '@src/modules/exhibits/entities';
import {TExhibitFilterCategoryId} from '@src/modules/exhibits/entities';

export const filterExhibitsListByCategory = (
    list: IExhibit[],
    selectedCategory: TExhibitFilterCategoryId,
): IExhibit[] => {
    return list.filter((item) => item.mainCategory === selectedCategory);
};
