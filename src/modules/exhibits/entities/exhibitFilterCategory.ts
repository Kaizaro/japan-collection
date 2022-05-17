import {exhibitCategoryId} from '@src/modules/exhibits/DAL/dictionary/exhibitCategoryId';

export interface IExhibitFilterCategory {
    id: string;
    title: string;
}

export type TExhibitFilterCategoryId =
    | exhibitCategoryId.personality
    | exhibitCategoryId.weapon
    | exhibitCategoryId.building;
