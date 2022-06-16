import React, {FC, useEffect} from 'react';

import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import Orientation, {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {APP_COLORS} from '@shared/config/colors';

import {ExhibitModalProvider} from '@src/modules/exhibits/ui/components/exhibit-modal';

const UIProvider: FC = ({children}) => {
    useEffect(() => {
        Orientation.lockToPortrait();
    });

    return (
        <>
            {/*<OrientationLocker orientation={'PORTRAIT'} />*/}
            <StatusBar
                animated={true}
                barStyle={'dark-content'}
                backgroundColor={APP_COLORS.GRAY_MAIN}
            />
            <SafeAreaProvider>
                <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
            </SafeAreaProvider>
        </>
    );
};

/** @internal */
export default UIProvider;
