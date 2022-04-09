import React, {FC, useMemo} from 'react';

import {Image, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import {scaleVertical} from '@shared/utils/scale';
import {IDefaultFCProps} from '@shared/types';

import backIcon from '../../../shared/assets/graphics/icons/back.png';

import {appHeaderStyles as styles} from './styles';
import {PressableComponent} from "@shared/ui/buttons/pressable-component";

type TProps = NativeStackHeaderProps & IDefaultFCProps;

const AppHeader: FC<TProps> = ({navigation}) => {
    const insetTop = useSafeAreaInsets().top;
    const marginTop = useMemo(() => insetTop + scaleVertical(20), [insetTop]);

    return (
        <View style={{...styles.header, paddingTop: marginTop}}>
            <PressableComponent onPress={navigation.goBack}>
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
