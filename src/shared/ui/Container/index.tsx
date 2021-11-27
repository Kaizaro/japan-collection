import React, {FC, useMemo} from 'react';
import {View, ViewStyle} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './styles';

const Container: FC = ({children}) => {
    const {top} = useSafeAreaInsets();
    const marginTop = useMemo<ViewStyle>(
        () => ({
            marginTop: top,
        }),
        [top],
    );

    return <View style={{...styles.container, ...marginTop}}>{children}</View>;
};

export {Container};
