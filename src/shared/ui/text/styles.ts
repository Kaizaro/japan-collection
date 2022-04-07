import {StyleSheet} from 'react-native';
import {APP_FONTS} from "@shared/config/fonts";
import {APP_TEXT_COLORS} from "@shared/config/colors";

/** @internal */
export const textStyles = StyleSheet.create({
    regular: {
        fontFamily: APP_FONTS.REGULAR,
        fontSize: 16,
        color: APP_TEXT_COLORS.MAIN,
    },
    bold: {
        fontFamily: APP_FONTS.HEADER,
        fontSize: 24,
        color: APP_TEXT_COLORS.MAIN,
    },
});
