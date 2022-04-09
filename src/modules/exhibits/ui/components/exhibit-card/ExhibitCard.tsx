import React, {FC} from 'react';

import {Image, View} from 'react-native';

import {HeaderText, RegularText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';

import {getCategoryIcon} from '@src/modules/exhibits/utils/getCategoryIcon';
import {exhibitCardStyles as styles} from '@src/modules/exhibits/ui/components/exhibit-card/styles';
import {useExhibitCard} from '@src/modules/exhibits/presenter/hooks/useExhibitCard';
import {IExhibit} from '@src/modules/exhibits/entities';

interface IProps {
    card: IExhibit;
}

const ExhibitCard: FC<IProps> = ({card}) => {
    const {onCardPress} = useExhibitCard(card);

    return (
        <PressableComponent onPress={onCardPress} innerStyle={styles.card}>
            {card.image && (
                <View style={styles.imageContainer}>
                    <Image
                        source={card.image}
                        resizeMode={'contain'}
                        style={styles.image}
                    />
                </View>
            )}
            <View style={styles.title}>
                <HeaderText>{card.title}</HeaderText>
            </View>
            <View style={styles.subtitle}>
                <RegularText fontSize={16}>{card.subtitle}</RegularText>
            </View>
            <View style={styles.description}>
                <RegularText numberOfLines={3}>{card.description}</RegularText>
            </View>
            <View style={styles.categoryIconContainer}>
                <Image
                    source={getCategoryIcon(card.category)}
                    resizeMode={'contain'}
                    style={styles.categoryIcon}
                />
            </View>
        </PressableComponent>
    );
};

export {ExhibitCard};
