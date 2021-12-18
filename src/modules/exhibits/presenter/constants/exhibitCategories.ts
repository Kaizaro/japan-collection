import {exhibitCategoryId} from '../../data/dictionary/exhibitCategoryId';
import {IExhibitFilterCategory} from '@src/modules/exhibits/entities';

export const exhibitCategories = [
    {
        id: exhibitCategoryId.personality,
        title: 'Персоналии',
    },
    {
        id: exhibitCategoryId.weapon,
        title: 'Оружие',
    },
    {
        id: exhibitCategoryId.building,
        title: 'Здания',
    },
] as IExhibitFilterCategory[];
