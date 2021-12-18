import React, {FC} from 'react';
import {Pressable, ViewStyle} from 'react-native';

import {Text} from '@shared/ui';

interface IProps {
    onPress: () => void;
    category
    innerStyle?: ViewStyle;
}

const ExhibitFilterModalContentItem: FC<IProps> = (props) => {
    const {onPress} = props;

    return (
        <Pressable onPress={onPress}>
            <Text.RegularText>{}</Text.RegularText>
        </Pressable>
    );
};
