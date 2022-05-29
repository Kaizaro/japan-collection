import React, {FC, useCallback, useMemo} from 'react';

import {FlatList, View} from 'react-native';

import {RegularText} from '@shared/ui/text';
import {DEFAULT_SCROLL_VIEW_INSET} from '@shared/constants/styles';
import {APP_TEXT_COLORS} from '@shared/config/colors';

import {ExhibitSearch} from '@src/modules/exhibits/ui/components/exhibit-search';
import {ExhibitCard} from '@src/modules/exhibits/ui/components/exhibit-card';

import {keyExtractor} from '../../../presenter/lib/keyExtractor';
import {useExhibitsList} from '../../../presenter/hooks/useExhibitsList';

import {exhibitListStyles as styles} from './styles';

const ExhibitsList: FC = () => {
    const {exhibitsList, searchText, setSearchText} = useExhibitsList();

    const SearchRow = useMemo(
        () => (
            <ExhibitSearch
                autoFocus={false}
                value={searchText}
                onChangeText={setSearchText}
                placeholder={'Введите название или номер экспоната'}
                placeholderTextColor={APP_TEXT_COLORS.MAIN_OPACITY}
            />
        ),
        [searchText, setSearchText],
    );

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

    const EmptyList = useMemo<JSX.Element>(() => {
        return (
            <View style={styles.emptyContainer}>
                <RegularText
                    fontSize={20}
                    text={'Не найдено ни одного экспоната'}
                />
            </View>
        );
    }, []);

    return (
        <FlatList
            style={styles.flatList}
            contentInset={DEFAULT_SCROLL_VIEW_INSET}
            keyExtractor={keyExtractor}
            data={exhibitsList}
            renderItem={renderItemRow}
            ListEmptyComponent={EmptyList}
            ListHeaderComponent={SearchRow}
            showsVerticalScrollIndicator={false}
        />
    );
};

/** @internal */
export {ExhibitsList};
