import React, {FC} from 'react';
import {Text, TextStyle} from 'react-native';

interface IDefaultTextProps {
    text?: string;
    textStyle?: TextStyle;
}

interface IProps {
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

export default MainText;
export type {IDefaultTextProps};
