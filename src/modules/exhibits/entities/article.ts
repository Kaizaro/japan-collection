import {ImageSourcePropType} from 'react-native';

import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';

export interface IArticle {
    id: ARTICLE_IDS;
    title: string;
    description: string;
    images?: ImageSourcePropType[];
    linkWords?: IExhibitLink[];
}
