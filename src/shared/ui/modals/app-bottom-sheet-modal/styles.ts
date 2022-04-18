import {StyleSheet} from 'react-native';

import {scaleVertical} from '@shared/utils/scale';
import {APP_COLORS} from '@shared/config/colors';

export const appBottomSheetModalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: APP_COLORS.WHITE,
        borderRadius: scaleVertical(16),
    },
    scrollviewContainer: {
        height: '100%',
        width: '100%',
    },
    modal: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: APP_COLORS.BLACK_30,
    },
});
