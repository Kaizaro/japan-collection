import React, {FC} from 'react';

import MainText, {IDefaultTextProps} from './MainText';

import {textStyles} from './styles';

const RegularText: FC<IDefaultTextProps> = (props) => {
    const {text, textStyle, children} = props;

    return (
        <MainText textStyle={{...textStyles.regular, ...textStyle}}>
            {text ?? children}
        </MainText>
    );
};

/** @internal */
export default RegularText;
