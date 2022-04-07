import React, {FC} from 'react';

import {Pressable, PressableProps} from 'react-native';

import {getPressableComponentStyles} from '@shared/ui/buttons/pressable-component/styles';
import {IDefaultFCProps} from '@shared/types';

interface IProps extends IDefaultFCProps, PressableProps {}

const PressableComponent: FC<IProps> = (props) => {
    const {onPress, children, disabled, innerStyle} = props;

    return (
        <Pressable
            onPress={onPress}
            hitSlop={10}
            style={({pressed}) => ({
                ...getPressableComponentStyles(pressed, disabled),
                ...innerStyle,
            })}
            {...props}>
            {children}
        </Pressable>
    );
};

export {PressableComponent};
