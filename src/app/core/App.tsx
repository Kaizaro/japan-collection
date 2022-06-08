import React, {FC, useEffect} from 'react';

import Orientation from 'react-native-orientation-locker';

import {NavigationProvider, UIProvider} from '@app/providers';
import {AppStack} from '@app/navigation/app-stack/AppStack';

import {ExhibitModalProvider} from '@src/modules/exhibits/ui/components/exhibit-modal';

const App: FC = () => {
    useEffect(() => {
        Orientation.lockToPortrait();
    }, []);

    return (
        <UIProvider>
            <NavigationProvider>
                <ExhibitModalProvider>
                    <AppStack />
                </ExhibitModalProvider>
            </NavigationProvider>
        </UIProvider>
    );
};

/** @internal */
export {App};
