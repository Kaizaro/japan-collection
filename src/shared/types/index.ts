import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export interface IDefaultFCProps {
    testIdPrefix?: string;
    innerStyle?: ViewStyle;
}

export type TNullable<T> = T | null | undefined;

export type TStyles = {
    [key: string]: ViewStyle | TextStyle | ImageStyle;
};
