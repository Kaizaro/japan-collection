import React, {FC} from 'react';

import MainText, {IDefaultTextProps} from './MainText';

import {textStyles} from './styles';

const BoldText: FC<IDefaultTextProps> = (props) => {
    const {text, textStyle, children} = props;

    return (
        <MainText textStyle={{...textStyles.bold, ...textStyle}}>
            {text ?? children}
        </MainText>
    );
};

/** @internal */
export default BoldText;
