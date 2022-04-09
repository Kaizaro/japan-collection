import React, {FC} from 'react';
import {IDefaultFCProps} from '@shared/types';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Image, View} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import backIcon from '../../../shared/assets/graphics/icons/back.png';
import {appHeaderStyles as styles} from './styles';

type TProps = NativeStackHeaderProps & IDefaultFCProps;

const AppHeader: FC<TProps> = () => {
    const statusBarHeight = useHeaderHeight();

    return (
        <View style={{marginTop: statusBarHeight}}>
            <Image
                source={backIcon}
                style={styles.icon}
                resizeMode={'contain'}
            />
        </View>
    );
};

export {AppHeader};
