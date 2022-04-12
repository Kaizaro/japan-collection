import {ImageSourcePropType} from 'react-native';

export interface IArticle {
    image?: ImageSourcePropType;
    title: string;
    description: string;
    linkWords: string[];
}

export interface IArticleLink {
    word: string;
    routeId: string;
}
