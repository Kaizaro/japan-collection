import React, {FC, useCallback} from 'react';
import {FlatList} from 'react-native';

import ExhibitCard from '@src/modules/exhibits/ui/components/exhibit-card/ExhibitCard';

import {keyExtractor} from '../../../presenter/lib/keyExtractor';
import {useExhibitsList} from '../../../presenter/useExhibitsList';

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
            showsVerticalScrollIndicator={false}
        />
    );
};

/** @internal */
export default ExhibitsList;
