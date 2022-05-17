import React, {FC} from 'react';

import {
    DefaultTheme,
    NavigationContainer,
    createNavigationContainerRef,
} from '@react-navigation/native';

import {APP_COLORS} from '@shared/config/colors';

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: APP_COLORS.GRAY_MAIN,
    },
};

const navigationRef = createNavigationContainerRef();

const routeNavigate = (name: never, params: never) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
};

const NavigationProvider: FC = ({children}) => (
    <NavigationContainer ref={navigationRef} theme={appTheme}>
        {children}
    </NavigationContainer>
);

export {NavigationProvider, navigationRef, routeNavigate};
