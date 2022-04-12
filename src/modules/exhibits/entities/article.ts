import {ImageSourcePropType} from "react-native";

export interface IArticle {
    image?: ImageSourcePropType;
    title: string;
    description: string;
    linkWords: string[];
}
