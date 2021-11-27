import React, {FC} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ModelList} from '@src/pages';

const App: FC = () => {
    return (
        <SafeAreaProvider>
            <ModelList />
        </SafeAreaProvider>
    );
};

export {App};
