import React, {FC} from 'react';

import {Image, View} from 'react-native';

import {IDefaultTextProps} from '@shared/ui/text/MainText';
import {RegularText} from '@shared/ui/text';
import {IDefaultFCProps} from '@shared/types';

import {exhibitTimeStyles as styles} from '@src/modules/exhibits/ui/components/exhibit-time/styles';
import {IExhibitStatus} from '@src/modules/exhibits/entities/exhibitStatus';

import timeIcon from '../../../../../shared/assets/graphics/icons/time.png';

interface IProps extends IDefaultFCProps {
    time: string;
}

const ExhibitTime: FC<IProps> = ({time, innerStyle}) => {
    return (
        <View style={{...styles.container, ...innerStyle}}>
            <Image
                source={timeIcon}
                resizeMode={'contain'}
                style={styles.icon}
            />
            <View style={styles.text}>
                <RegularText fontSize={18}>{time}</RegularText>
            </View>
        </View>
    );
};

export {ExhibitTime};
