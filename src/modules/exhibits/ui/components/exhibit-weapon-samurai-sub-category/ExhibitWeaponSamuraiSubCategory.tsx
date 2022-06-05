import React, {FC, useMemo} from 'react';

import {Image} from 'react-native';

import {HeaderText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {APP_COLORS, APP_TEXT_COLORS} from '@shared/config/colors';

import {IDefaultFCProps, TNullable} from '@src/shared/types';
import {EXHIBIT_WEAPONS_SAMURAI_CATEGORY} from '@src/modules/exhibits/entities';

import swordIcon from '../../../../../shared/assets/graphics/icons/active.png';

import {exhibitWeaponsSamuraiSubCategoryStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    rowId?: EXHIBIT_WEAPONS_SAMURAI_CATEGORY;
    selectedWeaponSamuraiSubCategory: TNullable<EXHIBIT_WEAPONS_SAMURAI_CATEGORY>;
    rowTitle?: string;
    selectWeaponSamuraiSubCategory: (
        category: EXHIBIT_WEAPONS_SAMURAI_CATEGORY,
    ) => void;
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

    return (
        <PressableComponent
            onPress={() => selectWeaponSamuraiSubCategory(rowId)}
            innerStyle={{...styles.container, ...innerStyle}}>
            <HeaderText fontSize={20} text={rowTitle} />
            {isActive && (
                <Image
                    source={swordIcon}
                    style={styles.icon}
                    resizeMode={'contain'}
                />
            )}
        </PressableComponent>
    );
};

export {ExhibitWeaponSamuraiSubCategory};
export type {IProps as ExhibitWeaponSamuraiSubCategoryProps};
