import {ImageSourcePropType} from 'react-native';

import {EXHIBIT_WEAPON_SUBCATEGORY} from '@src/modules/exhibits/entities/exhibitWeaponSubCategory';
import {IExhibitStatus} from '@src/modules/exhibits/entities/exhibitStatus';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {ExhibitCategory} from '@src/modules/exhibits/entities/exhibitCategory';
import {Track} from "react-native-track-player";
import {ITrack} from "@shared/assets/sound/trackTypes";

export interface IExhibit {
    id?: string;
    exhibit_number?: number;
    category: ExhibitCategory;
    subcategory: EXHIBIT_WEAPON_SUBCATEGORY;
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
    images?: ImageSourcePropType[];
    track?: ITrack;
}
