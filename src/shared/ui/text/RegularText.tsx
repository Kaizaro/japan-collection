import React, {FC} from 'react';

import {MainText, IDefaultTextProps} from './MainText';

import {setComponentTextStyle} from './setTextStyle';

import {textStyles} from './styles';

const RegularText: FC<IDefaultTextProps> = (props) => {
    const {text, children} = props;

    return (
        <MainText textStyle={setComponentTextStyle(textStyles.regular, props)}>
            {text ?? children}
        </MainText>
    );
};

/** @internal */
export {RegularText};
