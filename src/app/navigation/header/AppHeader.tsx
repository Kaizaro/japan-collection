import React, {FC, useMemo} from 'react';

import {Alert, Image, TouchableOpacity, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import {getHeaderHeight} from '@shared/utils/height';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {IDefaultFCProps} from '@shared/types';

import backIcon from '../../../shared/assets/graphics/icons/back.png';

import {appHeaderStyles as styles} from './styles';

type TProps = NativeStackHeaderProps & IDefaultFCProps;

const AppHeader: FC<TProps> = ({navigation}) => {
    const insetTop = useSafeAreaInsets().top;

    return (
        <View
            style={{
                ...styles.header,
                paddingTop: getHeaderHeight(insetTop),
            }}>
            <PressableComponent onPress={() => navigation.goBack()}>
                <Image
                    source={backIcon}
                    style={styles.icon}
                    resizeMode={'contain'}
                />
            </PressableComponent>
        </View>
    );
};

export {AppHeader};
