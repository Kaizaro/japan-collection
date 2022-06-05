import React, {FC, useMemo} from 'react';

import {View} from 'react-native';

import {IDefaultFCProps} from '@shared/types';

import {ExhibitWeaponSamuraiSubCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-sub-category/ExhibitWeaponSamuraiSubCategory';
import {ExhibitWeaponSamuraiSubCategory} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-sub-category';
import {ExhibitWeaponSamuraiBladeSubCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-blade-sub-category';
import {ExhibitWeaponSamuraiBladeSubCategories} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-blade-sub-categories';
import {EXHIBIT_WEAPONS_SAMURAI_CATEGORY} from '@src/modules/exhibits/entities';

import {exhibitWeaponSamuraiSubCategoriesStyles as styles} from './styles';

interface IProps
    extends IDefaultFCProps,
        ExhibitWeaponSamuraiSubCategoryProps,
        ExhibitWeaponSamuraiBladeSubCategoryProps {}

const ExhibitWeaponSamuraiSubCategories: FC<IProps> = ({
    innerStyle,
    selectedWeaponSamuraiSubCategory,
    ...props
}) => {
    const isWeaponSamuraiBladeSubCategoryVisible = useMemo(
        () =>
            selectedWeaponSamuraiSubCategory ===
            EXHIBIT_WEAPONS_SAMURAI_CATEGORY.BLADE_WEAPON,
        [selectedWeaponSamuraiSubCategory],
    );

    return (
        <View style={{...styles.container, ...innerStyle}}>
            <ExhibitWeaponSamuraiSubCategory
                {...props}
                rowId={EXHIBIT_WEAPONS_SAMURAI_CATEGORY.BLADE_WEAPON}
                rowTitle={'Клинковое оружие'}
                innerStyle={styles.item}
            />
            {isWeaponSamuraiBladeSubCategoryVisible && (
                <ExhibitWeaponSamuraiBladeSubCategories {...props} />
            )}
            <ExhibitWeaponSamuraiSubCategory
                {...props}
                rowId={EXHIBIT_WEAPONS_SAMURAI_CATEGORY.BLUNT_WEAPON}
                rowTitle={'Ударное оружие'}
                innerStyle={styles.item}
            />
            <ExhibitWeaponSamuraiSubCategory
                {...props}
                rowId={EXHIBIT_WEAPONS_SAMURAI_CATEGORY.PERCUSSION_WEAPON}
                rowTitle={'Древковое оружие'}
                innerStyle={styles.item}
            />
            <ExhibitWeaponSamuraiSubCategory
                {...props}
                rowId={EXHIBIT_WEAPONS_SAMURAI_CATEGORY.ARMOR}
                rowTitle={'Доспехи'}
                innerStyle={styles.item}
            />
            <ExhibitWeaponSamuraiSubCategory
                {...props}
                rowId={EXHIBIT_WEAPONS_SAMURAI_CATEGORY.FIREARMS}
                rowTitle={'Огнестрельное оружие'}
                innerStyle={styles.item}
            />
            <ExhibitWeaponSamuraiSubCategory
                {...props}
                rowId={EXHIBIT_WEAPONS_SAMURAI_CATEGORY.STAFFS}
                rowTitle={'Жезлы'}
                innerStyle={styles.item}
            />
        </View>
    );
};

export {ExhibitWeaponSamuraiSubCategories};
