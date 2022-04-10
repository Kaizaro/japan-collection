import React, {FC} from 'react';

import {UIProvider} from '@app/providers';
import {AppStack} from '@app/navigation/app-stack/AppStack';

const App: FC = () => {
    return (
        <UIProvider>
            <AppStack />
        </UIProvider>
    );
};

/** @internal */
export {App};
