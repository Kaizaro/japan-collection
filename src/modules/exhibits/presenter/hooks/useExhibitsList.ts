import {useEffect, useState} from 'react';

import {TNullable} from '@shared/types';

import {getExhibitsList} from '@src/modules/exhibits/useCase/get-exhibits-list';
import {filterExhibitsListByName} from '@src/modules/exhibits/presenter/lib/filterExhibitsListByName';
import {filterExhibitsListByCategory} from '@src/modules/exhibits/presenter/lib/filterExhibitsListByCategory';
import {
    EXHIBIT_CATEGORY,
    EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY,
    EXHIBIT_WEAPONS_SAMURAI_CATEGORY,
    EXHIBIT_WEAPONS_SUBCATEGORY,
    IExhibit,
} from '@src/modules/exhibits/entities';

const useExhibitsList = () => {
    const [exhibitsList, setExhibitsList] = useState<IExhibit[][]>([]);

    // Row engine
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (searchText.length || searchText.length === 0) {
            setExhibitsList(
                getExhibitsList(filterExhibitsListByName(searchText)),
            );
        }
    }, [searchText]);

    // Categories filter
    const [selectedCategory, setSelectedCategory] =
        useState<TNullable<EXHIBIT_CATEGORY>>(null);
    const [selectedWeaponSubCategory, setSelectedWeaponSubCategory] =
        useState<TNullable<EXHIBIT_WEAPONS_SUBCATEGORY>>(null);
    const [
        selectedWeaponSamuraiSubCategory,
        setSelectedWeaponSamuraiSubCategory,
    ] = useState<TNullable<EXHIBIT_WEAPONS_SAMURAI_CATEGORY>>(null);
    const [
        selectedWeaponSamuraiBladeSubCategory,
        setSelectedWeaponSamuraiBladeSubCategory,
    ] = useState<TNullable<EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY>>(null);

    useEffect(() => {
        if (
            selectedCategory ||
            selectedWeaponSubCategory ||
            selectedWeaponSamuraiSubCategory ||
            selectedWeaponSamuraiBladeSubCategory
        ) {
            setExhibitsList(
                getExhibitsList(
                    filterExhibitsListByCategory(
                        selectedCategory,
                        selectedWeaponSubCategory,
                        selectedWeaponSamuraiSubCategory,
                        selectedWeaponSamuraiBladeSubCategory,
                    ),
                ),
            );
        }
    }, [
        selectedCategory,
        selectedWeaponSamuraiBladeSubCategory,
        selectedWeaponSamuraiSubCategory,
        selectedWeaponSubCategory,
    ]);

    return {
        exhibitsList,

        // Row engine
        searchText,
        setSearchText,

        // Filter categories
        selectedCategory,
        setSelectedCategory,
        selectedWeaponSubCategory,
        setSelectedWeaponSubCategory,
        selectedWeaponSamuraiSubCategory,
        setSelectedWeaponSamuraiSubCategory,
        selectedWeaponSamuraiBladeSubCategory,
        setSelectedWeaponSamuraiBladeSubCategory,
    };
};

/** @internal */
export {useExhibitsList};
