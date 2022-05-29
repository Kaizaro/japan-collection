import {StyleSheet} from 'react-native';

import {
    scaleFontSize,
    scaleHorizontal,
    scaleVertical,
} from '@shared/utils/scale';
import {textStyles} from '@shared/ui/text/styles';
import {APP_COLORS} from '@shared/config/colors';

const ICON_SIZE = scaleVertical(24);

export const exhibitSearchStyles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: scaleHorizontal(16),
        paddingVertical: scaleVertical(18),
        alignItems: 'center',
        backgroundColor: APP_COLORS.BLACK_6,
        borderRadius: scaleVertical(18),
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
    },
    textInput: {
        ...textStyles.bold,
        marginLeft: scaleHorizontal(18),
        width: '100%',
        fontSize: scaleFontSize(20),
    },
});
