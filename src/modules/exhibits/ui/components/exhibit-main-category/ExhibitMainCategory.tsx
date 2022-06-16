import React, {FC, useCallback, useMemo} from 'react';

import {HeaderText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {APP_TEXT_COLORS} from '@shared/config/colors';

import {IDefaultFCProps, TNullable} from '@src/shared/types';
import {EXHIBIT_CATEGORY} from '@src/modules/exhibits/entities';
import {View} from "react-native";

interface IProps extends IDefaultFCProps {
    tabId?: EXHIBIT_CATEGORY;
    selectedMainCategory: TNullable<EXHIBIT_CATEGORY>;
    tabTitle?: string;
    selectMainCategory: (category: EXHIBIT_CATEGORY) => void;
    fontSizeScaled?: number;
}

const ExhibitMainCategory: FC<IProps> = ({
    tabId,
    selectedMainCategory,
    tabTitle,
    selectMainCategory,
    fontSizeScaled,
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
        <View style={innerStyle}>
            <HeaderText
                fontSize={fontSizeScaled ?? 58}
                color={textColor}
                text={tabTitle}
            />
        </View>
    );
};

export {ExhibitMainCategory};
export type {IProps as ExhibitMainCategoryProps};
