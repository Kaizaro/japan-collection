import React, {FC} from 'react';

import {setComponentTextStyle} from './setTextStyle';
import {IDefaultTextProps, MainText} from './MainText';

import {textStyles} from './styles';

const RegularText: FC<IDefaultTextProps> = (props) => {
    const {text, children} = props;

    return (
        <MainText
            textStyle={setComponentTextStyle(textStyles.regular, props)}
            {...props}>
            {text ?? children}
        </MainText>
    );
};

/** @internal */
export {RegularText};
