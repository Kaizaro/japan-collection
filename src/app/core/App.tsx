import React, {FC} from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {UIProvider} from '@app/providers';
import {AppStack} from '@app/navigation/app-stack/AppStack';

const App: FC = () => {
    return (
        // <GestureHandlerRootView>
        <UIProvider>
            <AppStack />
        </UIProvider>
        // </GestureHandlerRootView>
    );
};

/** @internal */
export {App};
