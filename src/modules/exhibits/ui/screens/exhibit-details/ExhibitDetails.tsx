import React, {FC} from 'react';

import {Image, ScrollView, View} from 'react-native';

import {useRoute} from '@react-navigation/core';

import {scaleVertical} from '@shared/utils/scale';
import {HeaderText, RegularText} from '@shared/ui/text';
import {ComponentContainer} from '@shared/ui/container';
import {IDefaultFCProps} from '@shared/types';

import {ExhibitTime} from '@src/modules/exhibits/ui/components/exhibit-time';
import {ExhibitStatus} from '@src/modules/exhibits/ui/components/exhibit-status';
import {ExhibitLocation} from '@src/modules/exhibits/ui/components/exhibit-location';
import {IExhibit} from '@src/modules/exhibits/entities';

import MOCK_IMAGE from '../../../../../shared/assets/graphics/images/exhibits/sakai_masamune.png';
import backgroundImage from '../../../../../shared/assets/graphics/images/dragon.png';

import {exhibitDetailsStyles as styles} from './styles';

const ExhibitDetails: FC<IDefaultFCProps> = () => {
    const exhibit = useRoute().params?.exhibit as IExhibit;

    return (
        <ComponentContainer innerStyle={styles.container}>
            <View style={styles.backgroundImageContainer}>
                <Image
                    source={backgroundImage}
                    style={styles.backgroundImage}
                    resizeMode={'contain'}
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentInset={{bottom: scaleVertical(30)}}>
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
                    <HeaderText fontSize={24}>
                        {exhibit.blacksmith_name}
                    </HeaderText>
                    <View style={styles.blacksmithJapanese}>
                        <RegularText fontSize={18}>
                            {exhibit.blacksmith_name_japanese}
                        </RegularText>
                    </View>
                </View>
                <ExhibitTime time={exhibit.time} innerStyle={styles.time} />
                <ExhibitStatus
                    exhibitStatuses={exhibit.status}
                    innerStyle={styles.status}
                />
                <ExhibitLocation
                    school={exhibit.school}
                    location={exhibit.province}
                    innerStyle={styles.location}
                />
                <View style={styles.description}>
                    <RegularText fontSize={18}>
                        {exhibit.description}
                    </RegularText>
                </View>
            </ScrollView>
        </ComponentContainer>
    );
};

export {ExhibitDetails};
