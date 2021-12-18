import React, {FC, useCallback} from 'react';
import {FlatList, Pressable} from 'react-native';

import ExhibitCard from '@src/modules/exhibits/ui/components/exhibit-card/ExhibitCard';
import {ExhibitFilterModal} from '@src/modules/exhibits/ui/components/exhibit-filter/modal';
import {Text} from '@shared/ui';

import {keyExtractor} from '../../../presenter/lib/keyExtractor';
import {useExhibitsList} from '../../../presenter/hooks/useExhibitsList';

const ExhibitsList: FC = () => {
    const {
        exhibitsList,
        selectedCategory,
        setSelectedCategory,
        showFilterModal,
        isFilterModalVisible,
        closeFilterModal,
    } = useExhibitsList();

    const renderItem = useCallback(({item}) => {
        return <ExhibitCard card={item} />;
    }, []);

    const renderEmptyList = useCallback<() => JSX.Element>(() => {
        return <></>;
    }, []);

    return (
        <>
            <Pressable onPress={showFilterModal}>
                <Text.RegularText>{'Выбор категории'}</Text.RegularText>
            </Pressable>
            <FlatList
                keyExtractor={keyExtractor}
                data={exhibitsList}
                renderItem={renderItem}
                ListEmptyComponent={renderEmptyList}
                showsVerticalScrollIndicator={false}
            />
            <ExhibitFilterModal
                isVisible={isFilterModalVisible}
                closeModal={closeFilterModal}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </>
    );
};

/** @internal */
export default ExhibitsList;
