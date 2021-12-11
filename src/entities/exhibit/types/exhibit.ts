import {ImageSourcePropType} from 'react-native';

export interface IExhibit {
    title: string;
    subtitle: string;
    description: string;
    image?: ImageSourcePropType;
}
