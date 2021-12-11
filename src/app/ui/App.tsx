import React, {FC} from 'react';
import {View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: FC = () => {
    return (
        <SafeAreaProvider>
            <View />
        </SafeAreaProvider>
    );
};

export {App};
