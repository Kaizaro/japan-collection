import React, {FC} from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {APP_COLORS} from '@shared/config/colors';

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: APP_COLORS.GRAY_MAIN,
    },
};

const NavigationProvider: FC = ({children}) => (
    <NavigationContainer theme={appTheme}>{children}</NavigationContainer>
);

export {NavigationProvider};
