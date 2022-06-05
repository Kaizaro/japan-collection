import React, {FC, useMemo} from 'react';

import {HeaderText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {APP_COLORS, APP_TEXT_COLORS} from '@shared/config/colors';

import {IDefaultFCProps, TNullable} from '@src/shared/types';
import {EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY} from '@src/modules/exhibits/entities';

import {exhibitWeaponsSamuraiSubCategoryStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    subRowId?: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY;
    selectedWeaponSamuraiBladeSubCategory: TNullable<EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY>;
    subRowTitle?: string;
    selectWeaponSamuraiBladeSubCategory: (
        category: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY,
    ) => void;
}

const ExhibitWeaponSamuraiBladeSubCategory: FC<IProps> = ({
    subRowId,
    selectedWeaponSamuraiBladeSubCategory,
    subRowTitle,
    selectWeaponSamuraiBladeSubCategory,
    innerStyle,
}) => {
    const isActive = useMemo(
        () => subRowId === selectedWeaponSamuraiBladeSubCategory,
        [selectedWeaponSamuraiBladeSubCategory, subRowId],
    );
    const textColor = useMemo(
        () => (isActive ? APP_COLORS.RED : APP_TEXT_COLORS.MAIN),
        [isActive],
    );

    return (
        <PressableComponent
            onPress={() => selectWeaponSamuraiBladeSubCategory(subRowId)}
            innerStyle={{...styles.container, ...innerStyle}}>
            <HeaderText fontSize={16} color={textColor} text={subRowTitle} />
        </PressableComponent>
    );
};

export {ExhibitWeaponSamuraiBladeSubCategory};
export type {IProps as ExhibitWeaponSamuraiBladeSubCategoryProps};
