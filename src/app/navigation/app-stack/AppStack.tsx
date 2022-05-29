import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppSplash} from '@app/splash';
import {AppHeader} from '@app/navigation/header';

import {APP_SCREEN_NAME} from '@shared/constants';
import {APP_COLORS} from '@shared/config/colors';

import {App} from './src/app/core';

import {Exhibits} from '@src/modules/exhibits/ui/screens/exhibits';
import {ExhibitDetails} from '@src/modules/exhibits/ui/screens/exhibit-details';
import {ExhibitArticle} from '@src/modules/exhibits/ui/screens/exhibit-article';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={APP_SCREEN_NAME.Splash}
            screenOptions={{
                contentStyle: {backgroundColor: APP_COLORS.GRAY_MAIN},
            }}>
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
                name={APP_SCREEN_NAME.ExhibitArticle}
                component={ExhibitArticle}
                options={{header: AppHeader}}
            />
        </Stack.Navigator>
    );
};

export {AppStack};
