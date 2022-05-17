import React, {FC} from 'react';

import {Text, TextProps, TextStyle} from 'react-native';

interface IDefaultTextProps extends TextProps {
    text?: string;
    fontSize?: number;
    fontWeight?: '400' | '700';
    color?: string;
    textStyle?: TextStyle;
}

interface IProps extends TextProps {
    textStyle?: TextStyle;
}

const MainText: FC<IProps> = (props) => {
    const {textStyle, children} = props;

    return (
        <Text style={textStyle} {...props}>
            {children}
        </Text>
    );
};

/** @internal */
export {MainText};

/** @internal */
export type {IDefaultTextProps};
