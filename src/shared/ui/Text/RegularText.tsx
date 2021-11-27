import React, {FC} from 'react';

import MainText, {IDefaultTextProps} from './MainText';

import {styles} from './styles';

const RegularText: FC<IDefaultTextProps> = (props) => {
    const {text, textStyle, children} = props;

    return (
        <MainText textStyle={{...styles.regular, ...textStyle}}>
            {text ?? children}
        </MainText>
    );
};

export {RegularText};
