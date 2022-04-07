import React, {FC, useCallback} from 'react';
import {FlatList, View} from 'react-native';

import {ExhibitCard} from '@src/modules/exhibits/ui/components/exhibit-card';
import {ExhibitFilterModal} from '@src/modules/exhibits/ui/components/exhibit-filter/modal';

import {keyExtractor} from '../../../presenter/lib/keyExtractor';
import {useExhibitsList} from '../../../presenter/hooks/useExhibitsList';
import {RegularText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {exhibitListStyles as styles} from './styles';

const ExhibitsList: FC = () => {
    const {
        exhibitsList,
        selectedCategory,
        setSelectedCategory,
        showFilterModal,
        isFilterModalVisible,
        closeFilterModal,
    } = useExhibitsList();

    const renderItemCard = useCallback((card, index) => {
        return <ExhibitCard key={`${card.title}_${index}`} card={card} />;
    }, []);

    const renderItemRow = useCallback(
        ({item}) => {
            return (
                <View style={styles.flatListItemRow}>
                    {item.map((card, index: number) =>
                        renderItemCard(card, index),
                    )}
                </View>
            );
        },
        [renderItemCard],
    );

    const renderEmptyList = useCallback<() => JSX.Element>(() => {
        return <></>;
    }, []);

    return (
        <>
            <PressableComponent onPress={showFilterModal}>
                <RegularText>{'Выбор категории'}</RegularText>
            </PressableComponent>
            <FlatList
                keyExtractor={keyExtractor}
                data={exhibitsList}
                renderItem={renderItemRow}
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
export {ExhibitsList};
