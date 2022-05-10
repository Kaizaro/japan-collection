import React, {FC} from 'react';

import {Image, ScrollView, View} from 'react-native';

import {useRoute} from '@react-navigation/core';

import {scaleVertical} from '@shared/utils/scale';
import {HeaderText, RegularText} from '@shared/ui/text';
import {ComponentContainer} from '@shared/ui/container';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {IDefaultFCProps, TRecord} from '@shared/types';

import {ExhibitTrack} from '@src/modules/exhibits/ui/components/exhibit-track/ExhibitTrack';
import {ExhibitTime} from '@src/modules/exhibits/ui/components/exhibit-time';
import {ExhibitStatus} from '@src/modules/exhibits/ui/components/exhibit-status';
import {ExhibitLocation} from '@src/modules/exhibits/ui/components/exhibit-location';
import {ExhibitDictionary} from '@src/modules/exhibits/ui/components/exhibit-dictionary';
import {ExhibitDescription} from '@src/modules/exhibits/ui/components/exhibit-description';
import {useExhibitLinks} from '@src/modules/exhibits/presenter/hooks/useExhibitLinks';
import {IExhibit} from '@src/modules/exhibits/entities';

import BACKGROUND_IMAGE from '../../../../../shared/assets/graphics/images/dragon.png';

import {exhibitDetailsStyles as styles} from './styles';

const ExhibitDetails: FC<IDefaultFCProps> = () => {
    const {exhibit} = useRoute().params as TRecord<IExhibit>;
    const {handleLinkPress} = useExhibitLinks();

    return (
        <ComponentContainer innerStyle={styles.container}>
            <View style={styles.backgroundImageContainer}>
                <Image
                    source={BACKGROUND_IMAGE}
                    style={styles.backgroundImage}
                    resizeMode={'contain'}
                />
            </View>
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentInset={{bottom: scaleVertical(30)}}>
                <HeaderText
                    fontSize={
                        48
                    }>{`№${exhibit.exhibit_number} ${exhibit.title}`}</HeaderText>
                <View style={styles.subtitle}>
                    <RegularText fontSize={24}>{exhibit.subtitle}</RegularText>
                </View>
                {exhibit.images?.gallery && (
                    <View style={styles.gallery}>
                        <Image
                            source={exhibit.images.gallery[0]}
                            style={styles.image}
                            resizeMode={'contain'}
                        />
                    </View>
                )}
                <PressableComponent
                    onPress={() =>
                        exhibit.buttonLink?.route_id
                            ? handleLinkPress(exhibit.buttonLink.route_id)
                            : null
                    }
                    innerStyle={styles.blacksmith}>
                    <HeaderText fontSize={24}>
                        {exhibit.blacksmith_name}
                    </HeaderText>
                    <View style={styles.blacksmithJapanese}>
                        <RegularText fontSize={18}>
                            {exhibit.blacksmith_name_japanese}
                        </RegularText>
                    </View>
                </PressableComponent>
                {exhibit.time && (
                    <ExhibitTime time={exhibit.time} innerStyle={styles.time} />
                )}
                {exhibit.status && (
                    <ExhibitStatus
                        exhibitStatuses={exhibit.status}
                        innerStyle={styles.status}
                    />
                )}
                {exhibit.school && exhibit.province && (
                    <ExhibitLocation
                        school={exhibit.school}
                        location={exhibit.province}
                        innerStyle={styles.location}
                    />
                )}
                <ExhibitDescription
                    description={exhibit.description}
                    linkWords={exhibit.linkWords}
                    innerStyle={styles.description}
                />
                {exhibit.dictionaryLinks && (
                    <ExhibitDictionary
                        dictionary={exhibit.dictionaryLinks}
                        innerStyle={styles.dictionary}
                    />
                )}
            </ScrollView>
            {exhibit.track && <ExhibitTrack track={exhibit.track} />}
        </ComponentContainer>
    );
};

export {ExhibitDetails};
