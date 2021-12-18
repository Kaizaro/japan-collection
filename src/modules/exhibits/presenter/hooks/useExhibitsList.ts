import {useCallback, useEffect, useState} from 'react';

import {getExhibitsList} from '@src/modules/exhibits/useCase/get-exhibits-list';
import {filterExhibitsList} from '@src/modules/exhibits/presenter/lib/filterExhibitsList';

import {
    IExhibit,
    TExhibitFilterCategoryId,
} from '@src/modules/exhibits/entities';

const useExhibitsList = () => {
    const [exhibitsList, setExhibitsList] = useState<IExhibit[]>([]);
    const [selectedCategory, setSelectedCategory] =
        useState<TExhibitFilterCategoryId | null>(null);
    const [isFilterModalVisible, setFilterModalVisible] =
        useState<boolean>(false);

    const showFilterModal = useCallback(() => {
        setFilterModalVisible(true);
    }, []);

    const closeFilterModal = useCallback(() => {
        setFilterModalVisible(false);
    }, []);

    useEffect(() => {
        setExhibitsList(getExhibitsList());
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            setExhibitsList(
                filterExhibitsList(getExhibitsList(), selectedCategory),
            );
        }
    }, [selectedCategory]);

    return {
        exhibitsList,
        selectedCategory,
        setSelectedCategory,
        isFilterModalVisible,
        showFilterModal,
        closeFilterModal,
    };
};

/** @internal */
export {useExhibitsList};
