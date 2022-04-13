import {ImageSourcePropType} from 'react-native';

import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';

export interface IArticle {
    images?: ImageSourcePropType[];
    title: string;
    description: string;
    linkWords?: IExhibitLink[];
}
