import React, {FC} from 'react';

import {Image, View} from 'react-native';

import {useRoute} from '@react-navigation/core';

import {HeaderText, RegularText} from '@shared/ui/text';
import {ComponentContainer} from '@shared/ui/container';
import {IDefaultFCProps} from '@shared/types';

import {IExhibit} from '@src/modules/exhibits/entities';

import MOCK_IMAGE from '../../../../../shared/assets/graphics/images/exhibits/sakai_masamune.png';
import backgroundImage from '../../../../../shared/assets/graphics/images/dragon.png';

import {exhibitDetailsStyles as styles} from './styles';

const ExhibitDetails: FC<IDefaultFCProps> = () => {
    const exhibit = useRoute().params?.exhibit as IExhibit;

    return (
        <ComponentContainer innerStyle={styles.container}>
            <Image
                source={backgroundImage}
                style={styles.backgroundImage}
                resizeMode={'contain'}
            />
            <HeaderText fontSize={48}>{exhibit.title}</HeaderText>
            <View style={styles.subtitle}>
                <RegularText fontSize={24}>{exhibit.subtitle}</RegularText>
            </View>
            <View style={styles.gallery}>
                <Image
                    source={MOCK_IMAGE}
                    style={styles.image}
                    resizeMode={'contain'}
                />
            </View>
            <View style={styles.blacksmith}>
                <HeaderText fontSize={24}>{exhibit.blacksmith_name}</HeaderText>
                <View style={styles.blacksmithJapanese}>
                    <RegularText fontSize={18}>
                        {exhibit.blacksmith_name_japanese}
                    </RegularText>
                </View>
            </View>
        </ComponentContainer>
    );
};

export {ExhibitDetails};
