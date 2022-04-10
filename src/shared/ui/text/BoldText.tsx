import React, {FC} from 'react';

import {setComponentTextStyle} from './setTextStyle';
import {IDefaultTextProps, MainText} from './MainText';

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
export {BoldText};
