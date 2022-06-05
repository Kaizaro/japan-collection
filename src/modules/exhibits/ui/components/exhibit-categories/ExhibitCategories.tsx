import React, {FC, useMemo} from 'react';

import {View} from 'react-native';

import {IDefaultFCProps} from '@shared/types';

import {ExhibitWeaponSubCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-weapon-sub-category/ExhibitWeaponSubCategory';
import {ExhibitWeaponSubCategories} from '@src/modules/exhibits/ui/components/exhibit-weapon-sub-categories';
import {ExhibitWeaponSamuraiSubCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-sub-category/ExhibitWeaponSamuraiSubCategory';
import {ExhibitWeaponSamuraiSubCategories} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-sub-categories';
import {ExhibitMainCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-main-category';
import {ExhibitMainCategories} from '@src/modules/exhibits/ui/components/exhibit-main-categories';

interface IProps
    extends IDefaultFCProps,
        ExhibitMainCategoryProps,
        ExhibitWeaponSubCategoryProps,
        ExhibitWeaponSamuraiSubCategoryProps {}

const ExhibitCategories: FC<IProps> = (props) => {
    const {selectedMainCategory, selectedWeaponSubCategory, innerStyle} = props;
    const isWeaponSubCategoryVisible = useMemo(
        () => !!selectedMainCategory,
        [selectedMainCategory],
    );
    const isWeaponSamuraiSubCategoryVisible = useMemo(
        () => !!selectedWeaponSubCategory,
        [selectedWeaponSubCategory],
    );

    return (
        <View style={innerStyle}>
            <ExhibitMainCategories {...props} />
            {isWeaponSubCategoryVisible && (
                <>
                    <ExhibitWeaponSubCategories {...props} />
                    {isWeaponSamuraiSubCategoryVisible && (
                        <ExhibitWeaponSamuraiSubCategories {...props} />
                    )}
                </>
            )}
        </View>
    );
};

export {ExhibitCategories};
