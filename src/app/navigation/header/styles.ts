import {StyleSheet} from 'react-native';
import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

const ICON_SIZE = scaleVertical(32);

export const appHeaderStyles = StyleSheet.create({
    header: {
        flex: 1,
        paddingHorizontal: scaleHorizontal(60),
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
    },
});
