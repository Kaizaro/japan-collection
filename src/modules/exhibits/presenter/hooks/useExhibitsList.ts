import {useCallback, useEffect, useState} from 'react';

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

    const handleSelectCategory = useCallback(
        (category: EXHIBIT_CATEGORY) => {
            if (selectedCategory === category) {
                setSelectedCategory(null);
            } else {
                setSelectedCategory(category);
            }
            setSelectedWeaponSubCategory(null);
            setSelectedWeaponSamuraiSubCategory(null);
        },
        [selectedCategory],
    );

    const handleSelectWeaponSubCategory = useCallback(
        (category: EXHIBIT_WEAPONS_SUBCATEGORY) => {
            if (selectedWeaponSubCategory === category) {
                setSelectedWeaponSubCategory(null);
            } else {
                setSelectedWeaponSubCategory(category);
            }
            setSelectedWeaponSamuraiSubCategory(null);
        },
        [selectedWeaponSubCategory],
    );

    const handleSelectWeaponSamuraiSubCategory = useCallback(
        (category: EXHIBIT_WEAPONS_SAMURAI_CATEGORY) => {
            if (selectedWeaponSamuraiSubCategory === category) {
                setSelectedWeaponSamuraiSubCategory(null);
            } else {
                setSelectedWeaponSamuraiSubCategory(category);
            }
        },
        [selectedWeaponSamuraiSubCategory],
    );

    const handleSelectWeaponSamuraiBladeSubCategory = useCallback(
        (category: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY) => {
            if (selectedWeaponSamuraiBladeSubCategory === category) {
                setSelectedWeaponSamuraiBladeSubCategory(null);
            } else {
                setSelectedWeaponSamuraiBladeSubCategory(category);
            }
        },
        [selectedWeaponSamuraiBladeSubCategory],
    );

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
        handleSelectCategory,
        selectedWeaponSubCategory,
        setSelectedWeaponSubCategory,
        handleSelectWeaponSubCategory,
        selectedWeaponSamuraiSubCategory,
        setSelectedWeaponSamuraiSubCategory,
        handleSelectWeaponSamuraiSubCategory,
        selectedWeaponSamuraiBladeSubCategory,
        setSelectedWeaponSamuraiBladeSubCategory,
        handleSelectWeaponSamuraiBladeSubCategory,
    };
};

/** @internal */
export {useExhibitsList};
