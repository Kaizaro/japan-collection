import React, {FC} from 'react';

import {Image, ImageSourcePropType, View} from 'react-native';

import {RegularText} from '@shared/ui/text';
import {IDefaultFCProps} from '@shared/types';

import {IExhibitStatus} from '@src/modules/exhibits/entities/exhibitStatus';

import threeStarsIcon from '../../../../../shared/assets/graphics/icons/three_stars.png';
import activeIcon from '../../../../../shared/assets/graphics/icons/active.png';

import {exhibitStatusStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    exhibitStatuses: IExhibitStatus[];
}

const getExhibitIcon = (index: number): ImageSourcePropType => {
    return index === 0 ? threeStarsIcon : activeIcon;
};

const ExhibitStatus: FC<IProps> = ({exhibitStatuses, innerStyle}) => {
    return (
        <View style={{...innerStyle}}>
            {exhibitStatuses.map((exhibitStatus, index) => (
                <View
                    style={styles.item}
                    key={`${exhibitStatus.name}_${index}`}>
                    <Image
                        source={getExhibitIcon(index)}
                        resizeMode={'contain'}
                        style={styles.icon}
                    />
                    <View style={styles.text}>
                        <RegularText fontSize={18}>
                            {exhibitStatus.name}
                        </RegularText>
                    </View>
                </View>
            ))}
        </View>
    );
};

export {ExhibitStatus};
