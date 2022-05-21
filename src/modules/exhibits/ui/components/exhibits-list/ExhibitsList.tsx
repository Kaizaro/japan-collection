import React, {FC, useCallback} from 'react';

import {FlatList, View} from 'react-native';

import {scaleVertical} from '@shared/utils/scale';

import {ExhibitFilterModal} from '@src/modules/exhibits/ui/components/exhibit-filter/modal';
import {ExhibitCard} from '@src/modules/exhibits/ui/components/exhibit-card';

import {keyExtractor} from '../../../presenter/lib/keyExtractor';
import {useExhibitsList} from '../../../presenter/hooks/useExhibitsList';

import {exhibitListStyles as styles} from './styles';
import {DEFAULT_SCROLL_VIEW_INSET} from "@shared/constants/styles";

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
            {/*<PressableComponent onPress={showFilterModal}>*/}
            {/*    <RegularTextNew>{'Выбор категории'}</RegularTextNew>*/}
            {/*</PressableComponent>*/}
            <FlatList
                style={styles.flatList}
                contentInset={DEFAULT_SCROLL_VIEW_INSET}
                keyExtractor={keyExtractor}
                data={exhibitsList}
                renderItem={renderItemRow}
                ListEmptyComponent={renderEmptyList}
                showsVerticalScrollIndicator={false}
            />
            {/*<ExhibitFilterModal*/}
            {/*    isVisible={isFilterModalVisible}*/}
            {/*    closeModal={closeFilterModal}*/}
            {/*    selectedCategory={selectedCategory}*/}
            {/*    setSelectedCategory={setSelectedCategory}*/}
            {/*/>*/}
        </>
    );
};

/** @internal */
export {ExhibitsList};
