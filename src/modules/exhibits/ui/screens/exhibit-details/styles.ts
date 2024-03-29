import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';
import {APP_COLORS} from '@shared/config/colors';

export const exhibitDetailsStyles = StyleSheet.create({
    backgroundImageContainer: {
        position: 'absolute',
        top: scaleVertical(-100),
        left: scaleHorizontal(-200),
    },
    backgroundImage: {
        width: scaleHorizontal(1385),
        height: scaleVertical(1304),
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: APP_COLORS.GRAY_MAIN,
        paddingTop: scaleVertical(20),
    },
    subtitle: {
        marginTop: scaleVertical(8),
    },
    gallery: {
        marginTop: scaleVertical(32),
        // borderRadius: scaleVertical(16),
        // overflow: 'hidden',
    },
    blacksmith: {
        marginTop: scaleVertical(44),
    },
    blacksmithJapanese: {
        marginTop: scaleVertical(8),
    },
    time: {
        marginTop: scaleVertical(27),
    },
    status: {
        marginTop: scaleVertical(12),
    },
    location: {
        marginTop: scaleVertical(12),
    },
    player: {
        marginTop: scaleVertical(32),
        width: '100%',
        alignItems: 'center',
    },
    description: {
        marginTop: scaleVertical(25),
    },
    dictionary: {
        marginTop: scaleVertical(24),
    },
});
