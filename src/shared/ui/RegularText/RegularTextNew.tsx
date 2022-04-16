import React, {FC, useMemo} from 'react';

import {Text, TextProps, TextStyle} from 'react-native';

import {scaleFontSize, scaleLineHeight} from '@shared/utils/scale';

import styles from './styles';

interface IExtendText {
    style?: TextStyle;
    locale?: string;
    text?: string;
    onPress?: () => void;
}

interface IRegularTextProps extends TextProps {
    fontFamily?: TextStyle['fontFamily'];
    fontSizeScaled?: number;
    color?: TextStyle['color'];
    textAlign?: TextStyle['textAlign'];
    lineHeightScaled?: number;
    fontWeight?: TextStyle['fontWeight'];
    isUnderlined?: boolean;
    locale?: string;
    numberOfLines?: number;
    innerStyle?: TextStyle;
    extendTexts?: IExtendText[];
    key?: string;
    testID?: string;
}

export const RegularTextNew: FC<IRegularTextProps> = (props) => {
    const {
        fontFamily,
        fontSizeScaled,
        color,
        lineHeightScaled,
        textAlign,
        fontWeight,
        isUnderlined = false,
        numberOfLines,
        innerStyle,
        children,
        extendTexts = [],
        key,
        testID,
    } = props;
    const formTextStyle = useMemo(() => {
        let textStyle: TextStyle = {
            ...styles.regularText,
        };

        if (fontFamily) {
            textStyle.fontFamily = fontFamily;
        }
        if (fontSizeScaled) {
            textStyle.fontSize = scaleFontSize(fontSizeScaled);
        }
        if (color) {
            textStyle.color = color;
        }
        if (lineHeightScaled) {
            textStyle.lineHeight = scaleLineHeight(lineHeightScaled);
        }
        if (textAlign) {
            textStyle.textAlign = textAlign;
        }
        if (fontWeight) {
            textStyle.fontWeight = fontWeight;
        }
        if (isUnderlined) {
            textStyle.textDecorationLine = 'underline';
        }
        if (innerStyle) {
            if (Array.isArray(innerStyle)) {
                let newInnerStyle = {};

                innerStyle.forEach((item) => {
                    newInnerStyle = {...newInnerStyle, ...item};
                });

                textStyle = {...textStyle, ...newInnerStyle};
            } else {
                textStyle = {...textStyle, ...innerStyle};
            }
        }

        return textStyle;
    }, [
        color,
        fontFamily,
        fontSizeScaled,
        fontWeight,
        innerStyle,
        isUnderlined,
        lineHeightScaled,
        textAlign,
    ]);

    // render block
    return (
        <Text
            key={key}
            numberOfLines={numberOfLines}
            style={formTextStyle}
            testID={testID}
            {...props}>
            {children}
            {extendTexts.map((text, index) => (
                <Text
                    key={`${index}_${text.locale}_${text.text}`}
                    style={text.style}
                    suppressHighlighting
                    onPress={text.onPress}
                    {...props}>
                    {text.text}
                </Text>
            ))}
        </Text>
    );
};
