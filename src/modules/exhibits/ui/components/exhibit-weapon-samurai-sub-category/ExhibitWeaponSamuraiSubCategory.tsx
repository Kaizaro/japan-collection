import React, {FC, useMemo} from 'react';

import {HeaderText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {APP_COLORS, APP_TEXT_COLORS} from '@shared/config/colors';

import {IDefaultFCProps, TNullable} from '@src/shared/types';
import {EXHIBIT_WEAPONS_SAMURAI_CATEGORY} from '@src/modules/exhibits/entities';

import {exhibitWeaponsSamuraiSubCategoryStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    rowId?: EXHIBIT_WEAPONS_SAMURAI_CATEGORY;
    selectedWeaponSamuraiSubCategory: TNullable<EXHIBIT_WEAPONS_SAMURAI_CATEGORY>;
    rowTitle?: string;
    selectWeaponSamuraiSubCategory?: () => void;
}

const ExhibitWeaponSamuraiSubCategory: FC<IProps> = ({
    rowId,
    selectedWeaponSamuraiSubCategory,
    rowTitle,
    selectWeaponSamuraiSubCategory,
    innerStyle,
}) => {
    const isActive = useMemo(
        () => rowId === selectedWeaponSamuraiSubCategory,
        [selectedWeaponSamuraiSubCategory, rowId],
    );

    const textColor = useMemo(
        () => (isActive ? APP_COLORS.RED : APP_TEXT_COLORS.MAIN),
        [isActive],
    );

    return (
        <PressableComponent
            onPress={() => selectWeaponSamuraiSubCategory(rowId)}
            innerStyle={{...styles.container, ...innerStyle}}>
            <HeaderText fontSize={20} color={textColor} text={rowTitle} />
        </PressableComponent>
    );
};

export {ExhibitWeaponSamuraiSubCategory};
export type {IProps as ExhibitWeaponSamuraiSubCategoryProps};
