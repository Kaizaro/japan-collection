import React, {FC} from 'react';

import MainText, {IDefaultTextProps} from './MainText';

import {styles} from './styles';

const BoldText: FC<IDefaultTextProps> = (props) => {
    const {text, textStyle, children} = props;

    return (
        <MainText textStyle={{...styles.bold, ...textStyle}}>
            {text ?? children}
        </MainText>
    );
};

export {BoldText};
