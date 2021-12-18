import React, {FC} from 'react';
import {Pressable, ViewStyle} from 'react-native';

import {Text} from '@shared/ui';

import {getExhibitFilterModalContentItemStyles} from './styles';

import {IExhibitFilterCategory} from '@src/modules/exhibits/entities';

interface IProps {
    onPress: () => void;
    category: IExhibitFilterCategory;
    innerStyle?: ViewStyle;
}

const ExhibitFilterModalContentItem: FC<IProps> = (props) => {
    const {onPress, category, innerStyle} = props;

    return (
        <Pressable
            onPress={onPress}
            style={{...getExhibitFilterModalContentItemStyles, ...innerStyle}}>
            <Text.RegularText>{category.title}</Text.RegularText>
        </Pressable>
    );
};

export default ExhibitFilterModalContentItem;
