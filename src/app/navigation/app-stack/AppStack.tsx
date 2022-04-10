import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppSplash} from '@app/splash';
import {AppHeader} from '@app/navigation/header';

import {APP_SCREEN_NAME} from '@shared/constants';

import {Exhibits} from '@src/modules/exhibits/ui/screens/exhibits';
import {ExhibitDetails} from '@src/modules/exhibits/ui/screens/exhibit-details';
import {ArticleGoroNudoMasamune} from '@src/modules/exhibits/ui/screens/articles/goro-nudo-masamune';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={APP_SCREEN_NAME.Splash}>
            <Stack.Screen
                name={APP_SCREEN_NAME.Splash}
                component={AppSplash}
                options={{headerShown: false}}
            />
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
            <Stack.Screen
                name={APP_SCREEN_NAME.ArticleGoroNudoMasamune}
                component={ArticleGoroNudoMasamune}
                options={{header: AppHeader}}
            />
        </Stack.Navigator>
    );
};

export {AppStack};
