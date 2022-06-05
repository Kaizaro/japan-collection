import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';
import {APP_COLORS} from '@shared/config/colors';

export const exhibitWeaponsSubCategoryStyles = StyleSheet.create({
    container: {
        paddingVertical: scaleVertical(8),
        paddingHorizontal: scaleHorizontal(16),
        borderRadius: scaleVertical(16),
        backgroundColor: APP_COLORS.WHITE,
    },
});
