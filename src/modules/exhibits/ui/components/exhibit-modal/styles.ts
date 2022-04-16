import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';
import {APP_COLORS} from "@shared/config/colors";

export const exhibitModalStyles = StyleSheet.create({
    externalContainer: {
        flex: 1,
        paddingHorizontal: scaleHorizontal(30),
        borderRadius: scaleVertical(30),
    },
    container: {
        flex: 1,
        paddingVertical: scaleVertical(36),
        paddingHorizontal: scaleHorizontal(60),
        backgroundColor: APP_COLORS.WHITE,
    },
    subtitle: {
        marginTop: scaleVertical(8),
    },
    text: {
        marginTop: scaleVertical(24),
    },
});
