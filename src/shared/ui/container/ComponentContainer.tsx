import React, {FC, useMemo} from 'react';

import {View} from 'react-native';

import {
    IPaddingContainer,
    PaddingContainer,
} from '@shared/ui/container/PaddingContainer';
import {IDefaultFCProps} from '@shared/types';

interface IProps extends IDefaultFCProps, IPaddingContainer {
    isHorizontalPaddingEnabled?: boolean;
}

const ComponentContainer: FC<IProps> = ({
    isHorizontalPaddingEnabled = true,
    children,
    innerStyle,
}) => {
    const Component = useMemo(
        () =>
            isHorizontalPaddingEnabled ? (
                <PaddingContainer>{children}</PaddingContainer>
            ) : (
                children
            ),
        [children, isHorizontalPaddingEnabled],
    );

    return <View style={innerStyle}>{Component}</View>;
};

export {ComponentContainer};
