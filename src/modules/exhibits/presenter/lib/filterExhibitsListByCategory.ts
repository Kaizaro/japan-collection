import {TNullable} from '@shared/types';

import {
    EXHIBIT_CATEGORY,
    EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY,
    EXHIBIT_WEAPONS_SAMURAI_CATEGORY,
    EXHIBIT_WEAPONS_SUBCATEGORY,
    IExhibit,
} from '@src/modules/exhibits/entities';
import {EXHIBITS} from '@src/modules/exhibits/DAL/exhibits/exhibits';

export const filterExhibitsListByCategory = (
    selectedCategory: TNullable<EXHIBIT_CATEGORY>,
    selectedWeaponSubCategory: TNullable<EXHIBIT_WEAPONS_SUBCATEGORY>,
    selectedWeaponSamuraiSubCategory: TNullable<EXHIBIT_WEAPONS_SAMURAI_CATEGORY>,
    selectedWeaponSamuraiBladeSubCategory: TNullable<EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY>,
): IExhibit[] => {
    if (selectedCategory === EXHIBIT_CATEGORY.JAPANESE_WEAPON) {
        return filterExhibitsListByWeaponCategory(
            selectedWeaponSubCategory,
            selectedWeaponSamuraiSubCategory,
            selectedWeaponSamuraiBladeSubCategory,
        );
    } else if (selectedCategory === EXHIBIT_CATEGORY.JAPANESE_CULTURE) {
        return EXHIBITS.filter(
            (item) => item.mainCategory === selectedCategory,
        );
    } else {
        return EXHIBITS;
    }
};

const filterExhibitsListByWeaponCategory = (
    selectedWeaponSubCategory?: TNullable<EXHIBIT_WEAPONS_SUBCATEGORY>,
    selectedWeaponSamuraiSubCategory?: TNullable<EXHIBIT_WEAPONS_SAMURAI_CATEGORY>,
    selectedWeaponSamuraiBladeSubCategory?: TNullable<EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY>,
) => {
    if (selectedWeaponSubCategory === EXHIBIT_WEAPONS_SUBCATEGORY.SAMURAI) {
        return filterExhibitsListByWeaponSamuraiSubCategory(
            selectedWeaponSamuraiSubCategory,
            selectedWeaponSamuraiBladeSubCategory,
        );
    } else {
        return EXHIBITS.filter(
            (item) => item.weaponSubCategory === selectedWeaponSubCategory,
        );
    }
};

const filterExhibitsListByWeaponSamuraiSubCategory = (
    selectedWeaponSamuraiSubCategory?: TNullable<EXHIBIT_WEAPONS_SAMURAI_CATEGORY>,
    selectedWeaponSamuraiBladeSubCategory?: TNullable<EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY>,
) => {
    if (
        selectedWeaponSamuraiSubCategory ===
        EXHIBIT_WEAPONS_SAMURAI_CATEGORY.BLADE_WEAPON
    ) {
        return filterExhibitsListByWeaponSamuraiBladeSubCategory(
            selectedWeaponSamuraiSubCategory,
            selectedWeaponSamuraiBladeSubCategory,
        );
    } else {
        return EXHIBITS.filter(
            (item) =>
                item.weaponSamuraiTypeSubCategory ===
                selectedWeaponSamuraiSubCategory,
        );
    }
};

const filterExhibitsListByWeaponSamuraiBladeSubCategory = (
    selectedWeaponSamuraiSubCategory?: TNullable<EXHIBIT_WEAPONS_SAMURAI_CATEGORY>,
    selectedWeaponSamuraiBladeSubCategory?: TNullable<EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY>,
) => {
    if (selectedWeaponSamuraiBladeSubCategory) {
        return EXHIBITS.filter(
            (item) =>
                item.weaponSamuraiBladeCategory ===
                selectedWeaponSamuraiBladeSubCategory,
        );
    } else {
        return EXHIBITS.filter(
            (item) =>
                item.weaponSamuraiTypeSubCategory ===
                selectedWeaponSamuraiSubCategory,
        );
    }
};
