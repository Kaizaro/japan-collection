import {StyleSheet} from 'react-native';

import {scaleFontSize} from '@shared/utils/scale';
import {APP_FONTS} from '@shared/config/fonts';
import {APP_TEXT_COLORS} from '@shared/config/colors';

const styles = StyleSheet.create({
    regularText: {
        fontFamily: APP_FONTS.REGULAR,
        fontSize: scaleFontSize(14),
        color: APP_TEXT_COLORS.MAIN,
        textAlign: 'left',
    },
});

export default styles;
