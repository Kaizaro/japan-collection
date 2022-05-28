import React, {FC, useCallback} from 'react';

import {Image} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import {IDefaultFCProps} from '@shared/types';

import {exhibitCarouselStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    images?: unknown;
}

const ExhibitCarousel: FC<IProps> = ({images}) => {
    const renderItem = useCallback(
        ({item}) => (
            <Image source={item} style={styles.image} resizeMode={'contain'} />
        ),
        [],
    );

    return (
        <Carousel
            width={styles.image.width}
            height={styles.image.height}
            data={images}
            renderItem={renderItem}
        />
    );
};

export {ExhibitCarousel};
