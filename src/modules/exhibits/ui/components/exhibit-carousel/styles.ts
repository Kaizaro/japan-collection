import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

export const exhibitCarouselStyles = StyleSheet.create({
    carousel: {
        borderWidth: 1,
    },
    image: {
        alignSelf: 'center',
        width: scaleHorizontal(714),
        height: scaleVertical(391),
    },
});
