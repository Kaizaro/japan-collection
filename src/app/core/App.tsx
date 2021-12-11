import React, {FC} from 'react';
import {View} from 'react-native';

import {UIProvider} from '@app/providers';

const App: FC = () => {
    return (
        <UIProvider>
            <View />
        </UIProvider>
    );
};

/** @internal */
export default App;
