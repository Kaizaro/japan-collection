import React, {FC, useCallback, useMemo} from 'react';

import {HeaderText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {APP_TEXT_COLORS} from '@shared/config/colors';

import {IDefaultFCProps, TNullable} from '@src/shared/types';
import {EXHIBIT_CATEGORY} from '@src/modules/exhibits/entities';

interface IProps extends IDefaultFCProps {
    tabId?: EXHIBIT_CATEGORY;
    selectedMainCategory: TNullable<EXHIBIT_CATEGORY>;
    tabTitle?: string;
    selectMainCategory: (category: EXHIBIT_CATEGORY) => void;
}

const ExhibitMainCategory: FC<IProps> = ({
    tabId,
    selectedMainCategory,
    tabTitle,
    selectMainCategory,
    innerStyle,
}) => {
    const isActive = useMemo(
        () => tabId === selectedMainCategory,
        [selectedMainCategory, tabId],
    );

    const textColor = useMemo(
        () => (isActive ? APP_TEXT_COLORS.MAIN : APP_TEXT_COLORS.MAIN_OPACITY),
        [isActive],
    );

    const handleTabPress = useCallback(() => {
        if (selectMainCategory) {
            selectMainCategory(tabId);
        }
    }, [selectMainCategory, tabId]);

    return (
        <PressableComponent onPress={handleTabPress} innerStyle={innerStyle}>
            <HeaderText fontSize={64} color={textColor} text={tabTitle} />
        </PressableComponent>
    );
};

export {ExhibitMainCategory};
export type {IProps as ExhibitMainCategoryProps};
