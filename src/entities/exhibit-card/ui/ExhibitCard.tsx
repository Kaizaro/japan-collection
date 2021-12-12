import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {Text} from '@shared/ui';

import {IExhibit} from '@entities/exhibit';
import {exhibitCardStyles} from '@entities/exhibit-card/ui/styles';
import {useExhibitCard} from "@entities/exhibit-card/model/useExhibitCard";

interface IProps {
    card: IExhibit;
}

const ExhibitCard: FC<IProps> = ({card}) => {
    const {onCardPress} = useExhibitCard(card);

    return (
        <TouchableOpacity onPress={onCardPress} style={exhibitCardStyles.card}>
            <Text.BoldText>{card.title}</Text.BoldText>
            {card.image && (
                <Image
                    source={card.image}
                    resizeMode={'contain'}
                    style={exhibitCardStyles.image}
                />
            )}
            <Text.RegularText fontSize={16}>{card.subtitle}</Text.RegularText>
            <Text.RegularText>{card.description}</Text.RegularText>
        </TouchableOpacity>
    );
};

export default ExhibitCard;
