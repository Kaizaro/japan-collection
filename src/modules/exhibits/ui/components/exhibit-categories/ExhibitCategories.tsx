import React, {FC, useMemo} from 'react';

import {View} from 'react-native';

import {IDefaultFCProps} from '@shared/types';

import {ExhibitWeaponSubCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-weapon-sub-category/ExhibitWeaponSubCategory';
import {ExhibitWeaponSubCategories} from '@src/modules/exhibits/ui/components/exhibit-weapon-sub-categories';
import {ExhibitWeaponSamuraiSubCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-sub-category/ExhibitWeaponSamuraiSubCategory';
import {ExhibitWeaponSamuraiSubCategories} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-sub-categories';
import {ExhibitWeaponSamuraiBladeSubCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-blade-sub-category';
import {ExhibitWeaponSamuraiBladeSubCategories} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-blade-sub-categories';
import {ExhibitMainCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-main-category';
import {ExhibitMainCategories} from '@src/modules/exhibits/ui/components/exhibit-main-categories';
import {
    EXHIBIT_CATEGORY,
    EXHIBIT_WEAPONS_SAMURAI_CATEGORY,
    EXHIBIT_WEAPONS_SUBCATEGORY,
} from '@src/modules/exhibits/entities';

import {exhibitCategoriesStyles as styles} from './styles';

interface IProps
    extends IDefaultFCProps,
        ExhibitMainCategoryProps,
        ExhibitWeaponSubCategoryProps,
        ExhibitWeaponSamuraiSubCategoryProps,
        ExhibitWeaponSamuraiBladeSubCategoryProps {}

const ExhibitCategories: FC<IProps> = (props) => {
    const {
        selectedMainCategory,
        selectedWeaponSubCategory,
        selectedWeaponSamuraiSubCategory,
        innerStyle,
    } = props;
    const isWeaponSubCategoryVisible = useMemo(
        () => selectedMainCategory === EXHIBIT_CATEGORY.JAPANESE_WEAPON,
        [selectedMainCategory],
    );
    const isWeaponSamuraiSubCategoryVisible = useMemo(
        () => selectedWeaponSubCategory === EXHIBIT_WEAPONS_SUBCATEGORY.SAMURAI,
        [selectedWeaponSubCategory],
    );

    return (
        <View style={innerStyle}>
            <ExhibitMainCategories {...props} />
            {isWeaponSubCategoryVisible && (
                <>
                    <ExhibitWeaponSubCategories
                        {...props}
                        innerStyle={styles.tags}
                    />
                    {isWeaponSamuraiSubCategoryVisible && (
                        <ExhibitWeaponSamuraiSubCategories
                            {...props}
                            innerStyle={styles.rows}
                        />
                    )}
                </>
            )}
        </View>
    );
};

export {ExhibitCategories};
