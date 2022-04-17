import {StyleSheet} from "react-native";
import {APP_COLORS} from "@shared/config/colors";
import {scaleHorizontal, scaleVertical} from "@shared/utils/scale";

export const appBottomSheetModalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        // width: '100%',
        backgroundColor: APP_COLORS.WHITE,
        borderRadius: scaleVertical(16),
        paddingVertical: scaleVertical(36),
        paddingHorizontal: scaleHorizontal(60),
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
