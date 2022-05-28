import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

export const exhibitCarouselStyles = StyleSheet.create({
    image: {
        width: scaleHorizontal(714),
        height: scaleVertical(391),
    },
});
