import {StyleSheet} from 'react-native';

import {scaleVertical} from '@shared/utils/scale';
import {APP_COLORS} from '@shared/config/colors';

export const MODAL_MIN_HEIGHT = scaleVertical(249);
export const MIN_HEIGHT_SNAP_POINT = [MODAL_MIN_HEIGHT];

export const styles = StyleSheet.create({
    container: {
        backgroundColor: APP_COLORS.WHITE,
        borderRadius: scaleVertical(16),
    },
});
