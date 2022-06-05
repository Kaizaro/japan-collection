import React, {FC, useMemo} from 'react';

import {HeaderText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {APP_COLORS, APP_TEXT_COLORS} from '@shared/config/colors';

import {IDefaultFCProps, TNullable} from '@src/shared/types';
import {EXHIBIT_WEAPONS_SUBCATEGORY} from '@src/modules/exhibits/entities';

import {exhibitWeaponsSubCategoryStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    tagId?: EXHIBIT_WEAPONS_SUBCATEGORY;
    selectedWeaponSubCategory: TNullable<EXHIBIT_WEAPONS_SUBCATEGORY>;
    tagTitle?: string;
    onTagPress?: () => void;
}

const ExhibitWeaponSubCategory: FC<IProps> = ({
    tagId,
    selectedWeaponSubCategory,
    tagTitle,
    onTagPress,
    innerStyle,
}) => {
    const isActive = useMemo(
        () => tagId === selectedWeaponSubCategory,
        [selectedWeaponSubCategory, tagId],
    );

    const textColor = useMemo(
        () => (isActive ? APP_COLORS.RED : APP_TEXT_COLORS.MAIN),
        [isActive],
    );

    return (
        <PressableComponent
            onPress={() => onTagPress(tagId)}
            innerStyle={{...styles.container, ...innerStyle}}>
            <HeaderText fontSize={20} color={textColor} text={tagTitle} />
        </PressableComponent>
    );
};

export {ExhibitWeaponSubCategory};
export type {IProps as ExhibitWeaponSubCategoryProps};
