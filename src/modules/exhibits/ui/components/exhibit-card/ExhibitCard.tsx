import React, {FC} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {Text} from '@shared/ui';

import {useExhibitCard} from '@src/modules/exhibits/presenter/hooks/useExhibitCard';

import {exhibitCardStyles} from '@src/modules/exhibits/ui/components/exhibit-card/styles';

import {IExhibit} from '@src/modules/exhibits/entities';

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
