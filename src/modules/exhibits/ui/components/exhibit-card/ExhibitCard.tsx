import React, {FC} from 'react';
import {Image} from 'react-native';

import {useExhibitCard} from '@src/modules/exhibits/presenter/hooks/useExhibitCard';

import {exhibitCardStyles} from '@src/modules/exhibits/ui/components/exhibit-card/styles';

import {IExhibit} from '@src/modules/exhibits/entities';
import {HeaderText, RegularText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';

interface IProps {
    card: IExhibit;
}

const ExhibitCard: FC<IProps> = ({card}) => {
    const {onCardPress} = useExhibitCard(card);

    return (
        <PressableComponent
            onPress={onCardPress}
            innerStyle={exhibitCardStyles.card}>
            {card.image && (
                <Image
                    source={card.image}
                    resizeMode={'contain'}
                    style={exhibitCardStyles.image}
                />
            )}
            <HeaderText>{card.title}</HeaderText>
            <RegularText fontSize={16}>{card.subtitle}</RegularText>
            <RegularText numberOfLines={3}>{card.description}</RegularText>
        </PressableComponent>
    );
};

export {ExhibitCard};
