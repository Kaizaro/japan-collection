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
            <HeaderText>{card.title}</HeaderText>
            {card.image && (
                <Image
                    source={card.image}
                    resizeMode={'contain'}
                    style={exhibitCardStyles.image}
                />
            )}
            <RegularText fontSize={16}>{card.subtitle}</RegularText>
            <RegularText>{card.description}</RegularText>
        </PressableComponent>
    );
};

export {ExhibitCard};
