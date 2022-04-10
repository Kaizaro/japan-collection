import React, {FC, useCallback} from 'react';

import {Image, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {HeaderText, RegularText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {APP_SCREEN_NAME} from '@shared/constants';

import backgroundImage from '../../shared/assets/graphics/images/dragon_splash.png';
import nextIcon from '../../shared/assets/graphics/icons/next.png';
import {name as appName} from '../../../app.json';

import {appSplashStyles as styles} from './styles';

const AppSplash: FC = () => {
    const {navigate} = useNavigation();

    const handleNextButtonPress = useCallback(() => {
        navigate(APP_SCREEN_NAME.Exhibits);
    }, [navigate]);

    return (
        <View style={styles.container}>
            <Image
                source={backgroundImage}
                resizeMode={'contain'}
                style={styles.image}
            />
            <View style={styles.dataContainer}>
                <View style={styles.textContainer}>
                    <HeaderText fontSize={48}>{appName}</HeaderText>
                    <View style={styles.text}>
                        <RegularText fontSize={18}>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum
                        </RegularText>
                    </View>
                </View>
                <PressableComponent
                    onPress={handleNextButtonPress}
                    innerStyle={styles.nextButton}>
                    <View style={styles.nextText}>
                        <RegularText fontSize={18}>Начать просмотр</RegularText>
                    </View>
                    <Image
                        source={nextIcon}
                        style={styles.nextIcon}
                        resizeMode={'contain'}
                    />
                </PressableComponent>
            </View>
        </View>
    );
};

export {AppSplash};
