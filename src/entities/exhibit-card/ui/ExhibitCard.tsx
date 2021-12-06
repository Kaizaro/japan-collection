import React, {FC} from 'react';
import {View} from 'react-native';

import {BoldText, RegularText} from '@shared/ui';

import {models} from '@entities';

import {exhibitCardStyles} from './styles';

interface IProps {
    item: models.IExhibit;
}

const ExhibitCard: FC<IProps> = ({item}) => {
    return (
        <View style={exhibitCardStyles.container}>
            <BoldText>{item.title}</BoldText>
            <RegularText>{item.subtitle}</RegularText>
            <RegularText>{item.description}</RegularText>
        </View>
    );
};

export {ExhibitCard};
