import React, {FC, useMemo} from 'react';
import {View, ViewStyle} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {componentContainerStyles} from './styles';

const ComponentContainer: FC = ({children}) => {
    const {top} = useSafeAreaInsets();
    const marginTop = useMemo<ViewStyle>(
        () => ({
            marginTop: top,
        }),
        [top],
    );

    return (
        <View style={{...componentContainerStyles.container, ...marginTop}}>
            {children}
        </View>
    );
};

/** @internal */
export default ComponentContainer;
