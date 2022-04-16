import React, {FC} from 'react';

import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {NavigationContainer} from '@react-navigation/native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {APP_COLORS} from '@shared/config/colors';

import {ExhibitModalProvider} from '@src/modules/exhibits/ui/components/exhibit-modal';

const UIProvider: FC = ({children}) => {
    return (
        <>
            <StatusBar
                animated={true}
                barStyle={'dark-content'}
                backgroundColor={APP_COLORS.GRAY_MAIN}
            />
            <BottomSheetModalProvider>
                <ExhibitModalProvider>
                    <SafeAreaProvider>
                        <NavigationContainer>{children}</NavigationContainer>
                    </SafeAreaProvider>
                </ExhibitModalProvider>
            </BottomSheetModalProvider>
        </>
    );
};

/** @internal */
export default UIProvider;
