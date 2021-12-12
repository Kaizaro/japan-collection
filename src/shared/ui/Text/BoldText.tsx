import React, {FC} from 'react';

import MainText, {IDefaultTextProps} from './MainText';

import {setComponentTextStyle} from './setTextStyle';

import {textStyles} from './styles';

const BoldText: FC<IDefaultTextProps> = (props) => {
    const {text, children} = props;

    return (
        <MainText textStyle={setComponentTextStyle(textStyles.bold, props)}>
            {text ?? children}
        </MainText>
    );
};

/** @internal */
export default BoldText;
