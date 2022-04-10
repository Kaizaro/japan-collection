import {StyleSheet} from "react-native";
import {scaleHorizontal, scaleVertical} from "@shared/utils/scale";

const ICON_SIZE = scaleVertical(24);

export const exhibitLocationStyles = StyleSheet.create({
    secondBlock: {
        marginLeft: scaleHorizontal(29),
    },
    container: {
        flexDirection: 'row',
        width: '100%',
    },
    itemContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
    },
    text: {
        marginLeft: scaleHorizontal(8),
    },
});
