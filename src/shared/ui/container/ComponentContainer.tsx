import React, {FC} from 'react';

import {View} from 'react-native';

import {IDefaultFCProps} from '@shared/types';

import {componentContainerStyles} from './styles';

const ComponentContainer: FC<IDefaultFCProps> = ({children, innerStyle}) => (
    <View style={{...componentContainerStyles.container, ...innerStyle}}>
        {children}
    </View>
);

export {ComponentContainer};
