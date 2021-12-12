import {useCallback} from 'react';

import {useNavigation} from '@react-navigation/core';

import {APP_SCREEN_NAME} from '@shared/constants';

import {IExhibit} from '@entities/exhibit';

const useExhibitCard = (exhibit: IExhibit) => {
    const {navigate} = useNavigation();

    const onCardPress = useCallback(
        () => navigate({name: APP_SCREEN_NAME.ExhibitDetails, params: exhibit}),
        [exhibit, navigate],
    );

    return {
        onCardPress,
    };
};

/** @internal */
export {useExhibitCard};
