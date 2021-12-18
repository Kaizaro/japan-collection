import React, {FC, useCallback} from 'react';
import {FlatList} from 'react-native';

import {ExhibitFilterModalContentItem} from '@src/modules/exhibits/ui/components/exhibit-filter/category';

import {exhibitCategories} from '@src/modules/exhibits/presenter/constants/exhibitCategories';

import {
    IExhibitFilterCategory,
    TExhibitFilterCategoryId,
} from '@src/modules/exhibits/entities';

interface IProps {
    closeModal: () => void;
    selectedCategory: TExhibitFilterCategoryId;
    setSelectedCategory: () => void;
}

const keyExtractor = (item: IExhibitFilterCategory, index: number) =>
    `${item.id}_${index}`;

const ExhibitFilterModalContent: FC<IProps> = (props) => {
    const {closeModal, selectedCategory, setSelectedCategory} = props;

    const renderItem = useCallback(
        ({item}) => (
            <ExhibitFilterModalContentItem
                category={item}
                onPress={() => {
                    console.log(item);
                    setSelectedCategory(item.id);
                    closeModal();
                }}
            />
        ),
        [closeModal, setSelectedCategory],
    );

    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={exhibitCategories}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default ExhibitFilterModalContent;
