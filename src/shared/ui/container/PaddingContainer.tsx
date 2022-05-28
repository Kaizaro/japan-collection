import React, {FC, useMemo} from 'react';

import {View} from 'react-native';

import {scaleHorizontal} from '@shared/utils/scale';
import {IDefaultFCProps} from '@shared/types';

import {componentContainerStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    customPadding?: number;
}

const PaddingContainer: FC<IProps> = ({
    customPadding,
    children,
    innerStyle,
}) => {
    const paddingHorizontal = useMemo(
        () =>
            scaleHorizontal(
                customPadding ?? styles.container.paddingHorizontal,
            ),
        [customPadding],
    );

    return <View style={{paddingHorizontal, ...innerStyle}}>{children}</View>;
};

export {PaddingContainer};
export type {IProps as IPaddingContainer};
