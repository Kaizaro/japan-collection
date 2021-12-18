import React, {FC} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {NavigationContainer} from '@react-navigation/native';

const UIProvider: FC = ({children}) => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>{children}</NavigationContainer>
        </SafeAreaProvider>
    );
};

/** @internal */
export default UIProvider;
