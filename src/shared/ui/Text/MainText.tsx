import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';

interface IDefaultTextProps {
    text?: string;
    fontSize?: number;
    textStyle?: TextStyle;
}

interface IProps {
    textStyle?: TextStyle;
}

const MainText: FC<IProps> = (props) => {
    const {textStyle, children} = props;

    return (
        <Text adjustsFontSizeToFit={true} style={textStyle} {...props}>
            {children}
        </Text>
    );
};

/** @internal */
export default MainText;

/** @internal */
export type {IDefaultTextProps};
