import React, {FC} from 'react';

import {Image, View} from 'react-native';

import {HeaderText, RegularText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';

import {exhibitCardStyles} from '@src/modules/exhibits/ui/components/exhibit-card/styles';
import {useExhibitCard} from '@src/modules/exhibits/presenter/hooks/useExhibitCard';
import {IExhibit} from '@src/modules/exhibits/entities';

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
                <View style={exhibitCardStyles.imageContainer}>
                    <Image
                        source={card.image}
                        resizeMode={'contain'}
                        style={exhibitCardStyles.image}
                    />
                </View>
            )}
            <HeaderText>{card.title}</HeaderText>
            <RegularText fontSize={16}>{card.subtitle}</RegularText>
            <RegularText numberOfLines={3}>{card.description}</RegularText>
        </PressableComponent>
    );
};

export {ExhibitCard};
