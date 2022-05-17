import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';
import {APP_COLORS} from '@shared/config/colors';

export const articleGoroNudoMasamuneStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: APP_COLORS.GRAY_MAIN,
        paddingTop: scaleVertical(20),
    },
    image: {
        width: scaleHorizontal(714),
        height: scaleHorizontal(391),
    },
    title: {
        marginTop: scaleVertical(44),
    },
    description: {
        marginTop: scaleVertical(24),
    },
});
