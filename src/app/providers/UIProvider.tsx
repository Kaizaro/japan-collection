import React, {FC} from 'react';

import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {NavigationContainer} from '@react-navigation/native';

import {APP_COLORS} from '@shared/config/colors';

const UIProvider: FC = ({children}) => {
    return (
        <>
            <StatusBar
                animated={true}
                barStyle={'dark-content'}
                backgroundColor={APP_COLORS.GRAY_MAIN}
            />
            <SafeAreaProvider>
                <NavigationContainer>{children}</NavigationContainer>
            </SafeAreaProvider>
        </>
    );
};

/** @internal */
export default UIProvider;
