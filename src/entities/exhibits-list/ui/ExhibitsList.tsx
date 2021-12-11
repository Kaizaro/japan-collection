import React, {FC, useCallback} from 'react';
import {FlatList, FlatListProps} from 'react-native';

import ExhibitCard from '@entities/exhibit-card/ui/ExhibitCard';

import {keyExtractor} from '../model/keyExtractor';
import {useExhibitsList} from '../model/useExhibitsList';

const ExhibitsList: FC = () => {
    const {exhibitsList} = useExhibitsList();

    const renderItem = useCallback(({item}) => {
        return <ExhibitCard card={item} />;
    }, []);

    const renderEmptyList = useCallback<() => JSX.Element>(() => {
        return <></>;
    }, []);

    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={exhibitsList}
            renderItem={renderItem}
            ListEmptyComponent={renderEmptyList}
        />
    );
};

/** @internal */
export default ExhibitsList;
