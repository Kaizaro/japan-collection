import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Exhibits} from '@pages/exhibits';
import {ExhibitDetails} from '@pages/exhibit-details';

import {APP_SCREEN_NAME} from '@shared/constants';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={APP_SCREEN_NAME.Exhibits}>
            <Stack.Screen
                name={APP_SCREEN_NAME.Exhibits}
                component={Exhibits}
            />
            <Stack.Screen
                name={APP_SCREEN_NAME.ExhibitDetails}
                component={ExhibitDetails}
            />
        </Stack.Navigator>
    );
};

/** @internal */
export default AppStack;
