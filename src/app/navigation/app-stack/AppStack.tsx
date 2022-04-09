import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppHeader} from '@app/navigation/header';

import {APP_SCREEN_NAME} from '@shared/constants';

import {Exhibits} from '@src/modules/exhibits/ui/screens/exhibits';
import {ExhibitDetails} from '@src/modules/exhibits/ui/screens/exhibit-details';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={APP_SCREEN_NAME.Exhibits}>
            <Stack.Screen
                name={APP_SCREEN_NAME.Exhibits}
                component={Exhibits}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name={APP_SCREEN_NAME.ExhibitDetails}
                component={ExhibitDetails}
                options={{header: AppHeader}}
            />
            {/*<Stack.Screen*/}
            {/*    name={APP_SCREEN_NAME.ExhibitDetails}*/}
            {/*    component={ExhibitDetails}*/}
            {/*/>*/}
        </Stack.Navigator>
    );
};

/** @internal */
export default AppStack;
