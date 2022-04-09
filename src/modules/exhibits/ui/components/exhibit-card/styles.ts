import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

/** @internal */
export const exhibitCardStyles = StyleSheet.create({
    card: {
        width: scaleHorizontal(347),
        height: scaleVertical(478),
    },
    imageContainer: {
        borderRadius: scaleVertical(16),
        overflow: 'hidden',
    },
    image: {
        width: scaleHorizontal(347),
        height: scaleVertical(260),
    },
});
