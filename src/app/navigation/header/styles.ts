import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';
import {APP_COLORS} from '@shared/config/colors';

const ICON_SIZE = scaleVertical(32);

export const appHeaderStyles = StyleSheet.create({
    header: {
        width: '100%',
        paddingHorizontal: scaleHorizontal(60),
        backgroundColor: APP_COLORS.GRAY_MAIN,
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
    },
});
