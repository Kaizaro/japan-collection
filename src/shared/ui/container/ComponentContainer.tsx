import React, {FC} from 'react';

import {View} from 'react-native';

import {componentContainerStyles} from './styles';

const ComponentContainer: FC = ({children}) => (
    <View style={componentContainerStyles.container}>{children}</View>
);

/** @internal */
export default ComponentContainer;
