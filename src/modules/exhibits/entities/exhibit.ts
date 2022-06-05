import {ITrack} from '@shared/assets/sound/trackTypes';

import {IExhibitStatus} from '@src/modules/exhibits/entities/exhibitStatus';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {IExhibitImage} from '@src/modules/exhibits/entities/exhibitImage';
import {
    EXHIBIT_CATEGORY,
    EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY,
    EXHIBIT_WEAPONS_SAMURAI_CATEGORY,
    EXHIBIT_WEAPONS_SUBCATEGORY,
} from '@src/modules/exhibits/entities/categories';

export interface IExhibit {
    id?: string;
    exhibit_number?: number;
    mainCategory: EXHIBIT_CATEGORY;
    weaponSubCategory?: EXHIBIT_WEAPONS_SUBCATEGORY;
    weaponSamuraiTypeSubCategory?: EXHIBIT_WEAPONS_SAMURAI_CATEGORY;
    weaponSamuraiBladeCategory?: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY;
    title: string;
    subtitle?: string;
    type: string;
    blacksmith_name: string;
    blacksmith_name_japanese: string;
    school: string;
    province: string;
    time: string;
    status: IExhibitStatus[];
    description: string;
    buttonLink?: IExhibitLink;
    linkWords?: IExhibitLink[];
    dictionaryLinks?: IExhibitLink[];
    images?: IExhibitImage;
    track?: ITrack;
}
