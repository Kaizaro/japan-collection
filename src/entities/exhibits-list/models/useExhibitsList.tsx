import React, {useCallback} from 'react';

import {ExhibitCard} from '@entities/exhibit-card';

import {useGetExhibits} from '@features/getExhibits/models/useGetExhibits';

const useExhibitsList = () => {
    const {models} = useGetExhibits();

    const renderItem = useCallback(({item}) => {
        return <ExhibitCard item={item} />;
    }, []);

    return {
        exhibits: models,
        renderItem,
    };
};

export {useExhibitsList};
