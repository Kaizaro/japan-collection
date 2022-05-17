import {StyleSheet} from "react-native";
import {scaleHorizontal, scaleVertical} from "@shared/utils/scale";
import {APP_COLORS} from "@shared/config/colors";

const ICON_SIZE = scaleVertical(24);

export const exhibitStatusStyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginVertical: scaleVertical(8),
        paddingVertical: scaleVertical(8),
        paddingHorizontal: scaleHorizontal(16),
        borderRadius: scaleVertical(16),
        borderWidth: scaleVertical(1),
        borderColor: APP_COLORS.GRAY_SEC,
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
    },
    text: {
        marginLeft: scaleHorizontal(8),
    },
});
