import {StyleSheet} from 'react-native';
import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

/** @internal */
export const exhibitCardStyles = StyleSheet.create({
    card: {
        width: scaleHorizontal(347),
        height: scaleVertical(478),
    },
    image: {
        width: '100%',
    },
});
