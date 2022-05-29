import React, {FC, useMemo} from 'react';

import {View} from 'react-native';

import {HeaderText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {APP_TEXT_COLORS} from '@shared/config/colors';

import {IDefaultFCProps} from '@src/shared/types';

interface IProps extends IDefaultFCProps {
    isActive: boolean;
    tabTitle: string;
    onTabPress: () => void;
}

const ExhibitTab: FC<IProps> = ({
    isActive,
    tabTitle,
    onTabPress,
    innerStyle,
}) => {
    const textColor = useMemo(
        () => (isActive ? null : APP_TEXT_COLORS.MAIN_OPACITY),
        [isActive],
    );

    return (
        <PressableComponent onPress={onTabPress} innerStyle={innerStyle}>
            <HeaderText fontSize={64} color={textColor} text={tabTitle} />
        </PressableComponent>
    );
};

export {ExhibitTab};
export type {IProps as ExhibitTabProps};
