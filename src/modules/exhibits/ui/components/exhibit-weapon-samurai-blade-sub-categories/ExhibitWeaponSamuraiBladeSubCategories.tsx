import React, {FC} from 'react';

import {View} from 'react-native';

import {IDefaultFCProps} from '@shared/types';

import {
    ExhibitWeaponSamuraiBladeSubCategory,
    ExhibitWeaponSamuraiBladeSubCategoryProps
} from '@src/modules/exhibits/ui/components/exhibit-weapon-samurai-blade-sub-category';
import {EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY} from '@src/modules/exhibits/entities';

import {exhibitWeaponSamuraiSubCategoriesStyles as styles} from './styles';

interface IProps
    extends IDefaultFCProps,
        ExhibitWeaponSamuraiBladeSubCategoryProps {}

const ExhibitWeaponSamuraiBladeSubCategories: FC<IProps> = ({
    innerStyle,
    ...props
}) => {
    return (
        <View style={{...styles.container, ...innerStyle}}>
            <ExhibitWeaponSamuraiBladeSubCategory
                {...props}
                subRowId={EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA}
                subRowTitle={'Катаны'}
                innerStyle={styles.item}
            />
            <ExhibitWeaponSamuraiBladeSubCategory
                {...props}
                subRowId={EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI}
                subRowTitle={'Вакидзаси'}
                innerStyle={styles.item}
            />
            <ExhibitWeaponSamuraiBladeSubCategory
                {...props}
                subRowId={EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO}
                subRowTitle={'Танто'}
                innerStyle={styles.item}
            />
        </View>
    );
};

export {ExhibitWeaponSamuraiBladeSubCategories};
