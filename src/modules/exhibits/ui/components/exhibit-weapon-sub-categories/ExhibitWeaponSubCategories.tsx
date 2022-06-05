import React, {FC} from 'react';

import {ScrollView} from 'react-native';

import {IDefaultFCProps} from '@shared/types';

import {
    ExhibitWeaponSubCategory,
    ExhibitWeaponSubCategoryProps,
} from '@src/modules/exhibits/ui/components/exhibit-weapon-sub-category/ExhibitWeaponSubCategory';
import {EXHIBIT_WEAPONS_SUBCATEGORY} from '@src/modules/exhibits/entities';

import {exhibitWeaponSubCategoriesStyles as styles} from './styles';

interface IProps extends IDefaultFCProps, ExhibitWeaponSubCategoryProps {}

const ExhibitWeaponSubCategories: FC<IProps> = ({innerStyle, ...props}) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{...styles.container, ...innerStyle}}
            contentContainerStyle={styles.scrollViewContainer}
            bounces={false}>
            <ExhibitWeaponSubCategory
                {...props}
                tagId={EXHIBIT_WEAPONS_SUBCATEGORY.SAMURAI}
                tagTitle={'Вооружение самураев'}
                innerStyle={styles.item}
            />
            <ExhibitWeaponSubCategory
                {...props}
                tagId={EXHIBIT_WEAPONS_SUBCATEGORY.EDO_POLICE}
                tagTitle={'Оружие полиции Эдо'}
                innerStyle={styles.item}
            />
            <ExhibitWeaponSubCategory
                {...props}
                tagId={EXHIBIT_WEAPONS_SUBCATEGORY.IMPERIAL_ARMY}
                tagTitle={'Вооружение Императорской армии'}
                innerStyle={styles.item}
            />
            <ExhibitWeaponSubCategory
                {...props}
                tagId={EXHIBIT_WEAPONS_SUBCATEGORY.SHINOBI}
                tagTitle={'Вооружение Синоби'}
                innerStyle={styles.item}
            />
        </ScrollView>
    );
};

export {ExhibitWeaponSubCategories};
