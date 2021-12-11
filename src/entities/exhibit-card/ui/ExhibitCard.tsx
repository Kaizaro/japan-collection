import React, {FC} from 'react';
import {View} from 'react-native';

import {Text} from '@shared/ui';

import {IExhibit} from '@entities/exhibit';

interface IProps {
    card: IExhibit;
}

const ExhibitCard: FC<IProps> = ({card}) => {
    return (
        <View>
            <Text.BoldText>{card.title}</Text.BoldText>
            <Text.RegularText>{card.subtitle}</Text.RegularText>
            <Text.RegularText>{card.description}</Text.RegularText>
        </View>
    );
};

export default ExhibitCard;
