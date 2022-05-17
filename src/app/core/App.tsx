import React, {FC} from 'react';

import {NavigationProvider, UIProvider} from '@app/providers';
import {AppStack} from '@app/navigation/app-stack/AppStack';

import {ExhibitModalProvider} from '@src/modules/exhibits/ui/components/exhibit-modal';

const App: FC = () => {
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
