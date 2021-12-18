import React, {FC, useCallback} from 'react';
import {FlatList} from 'react-native';

import {ExhibitFilterModalContentItem} from '@src/modules/exhibits/ui/components/exhibit-filter/category';

import {exhibitCategories} from '@src/modules/exhibits/presenter/constants/exhibitCategories';

import {IExhibitFilterCategory} from '@src/modules/exhibits/entities';

interface IProps {}

const keyExtractor = (item: IExhibitFilterCategory, index: number) =>
    `${item.id}_${index}`;

const ExhibitFilterModalContent: FC = () => {
    const renderItem = useCallback(
        ({item}) => (
            <ExhibitFilterModalContentItem
                category={item}
                onPress={() => console.log(item)}
            />
        ),
        [],
    );

    return <FlatList data={exhibitCategories} renderItem={renderItem} />;
};

export default ExhibitFilterModalContent;
