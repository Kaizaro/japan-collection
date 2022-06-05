import {ITrack} from '@shared/assets/sound/trackTypes';

import {EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY} from '@src/modules/exhibits/entities/categories/exhibitWeaponsSamuraiBladeSubCategory';
import {IExhibitStatus} from '@src/modules/exhibits/entities/exhibitStatus';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {IExhibitImage} from '@src/modules/exhibits/entities/exhibitImage';
import {ExhibitCategory} from '@src/modules/exhibits/entities/categories/exhibitCategory';

export interface IExhibit {
    id?: string;
    exhibit_number?: number;
    category: ExhibitCategory;
    subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY;
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
