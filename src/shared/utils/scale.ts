import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const ratio: number = PixelRatio.getFontScale();
const idealWidth = 375;
const idealHeight = 812;

export const scaleHorizontal = (inWidth = 1): number => {
    const delimiter: number = idealWidth / inWidth;
    return width / delimiter;
};

export const scaleVertical = (inHeight = 1): number => {
    const delimiter: number = idealHeight / inHeight;
    return height / delimiter;
};

export const scaleFontSize = (fontSize = 1): number => {
    const divisionRatio: number = idealWidth / (fontSize / ratio);
    return width / divisionRatio;
};

export const scaleLineHeight = (lineHeight = 1, calculateByWidth: boolean | null | undefined = false): number => {
    const defaultIdealCalculationParam: number = calculateByWidth ? idealWidth : idealHeight;
    const defaultCalculationParam: number = calculateByWidth ? width : height;
    const divisionRatio: number = defaultIdealCalculationParam / (lineHeight / ratio);
    return defaultCalculationParam / divisionRatio;
};
