import {exhibitCategoryId} from '@src/modules/exhibits/data/dictionary/exhibitCategoryId';

export interface IExhibitFilterCategory {
    id: string;
    title: string;
}

export type TExhibitFilterCategoryId =
    | exhibitCategoryId.personality
    | exhibitCategoryId.weapon
    | exhibitCategoryId.building;
