import React, {FC, useCallback} from 'react';

import {Image, ImageSourcePropType, View, ViewStyle} from 'react-native';

import {RegularText} from '@shared/ui/text';
import {IDefaultFCProps} from '@shared/types';

import schoolIcon from '../../../../../shared/assets/graphics/icons/school.png';
import locationIcon from '../../../../../shared/assets/graphics/icons/pin.png';

import {exhibitLocationStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    school: string;
    location: string;
}

const ExhibitLocation: FC<IProps> = ({school, location, innerStyle}) => {
    const renderItem = useCallback(
        (icon: ImageSourcePropType, text: string, style?: ViewStyle) => {
            return (
                <View style={{...styles.itemContainer, ...style}}>
                    <Image
                        source={icon}
                        resizeMode={'contain'}
                        style={styles.icon}
                    />
                    <View style={styles.text}>
                        <RegularText fontSize={18}>{text}</RegularText>
                    </View>
                </View>
            );
        },
        [],
    );

    return (
        <View style={{...styles.container, ...innerStyle}}>
            {renderItem(schoolIcon, school)}
            {renderItem(locationIcon, location, styles.secondBlock)}
        </View>
    );
};

export {ExhibitLocation};
