import {TextStyle} from 'react-native';

import {scaleFontSize} from '@shared/utils/scale';

import {IDefaultTextProps} from './MainText';

/** @internal */
export const setComponentTextStyle = (
    textDefaultStyle: TextStyle,
    textProps: IDefaultTextProps,
): TextStyle => {
    const {textStyle, fontSize, fontWeight, color} = textProps;

    return {
        ...textDefaultStyle,
        fontSize,
        fontWeight,
        color,
        ...textStyle,
    };
};
