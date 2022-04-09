import {ImageSourcePropType} from 'react-native';

import {IExhibitWeaponSubCategory} from '@src/modules/exhibits/entities/exhibitWeaponSubCategory';
import {IExhibitStatus} from '@src/modules/exhibits/entities/exhibitStatus';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {IExhibitCategory} from '@src/modules/exhibits/entities/exhibitCategory';

export interface IExhibit {
    id: string;
    category: IExhibitCategory;
    subcategory: IExhibitWeaponSubCategory;
    title: string;
    subtitle: string;
    type: string;
    blacksmith_name: string;
    blacksmith_name_japanese: string;
    school: string;
    province: string;
    time: string;
    status: IExhibitStatus[];
    description: string;
    links: IExhibitLink[];
    image?: ImageSourcePropType;
}
