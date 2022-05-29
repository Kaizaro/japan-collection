import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

const NEXT_ICON_SIZE = scaleVertical(32);

export const appSplashStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: scaleVertical(67),
        paddingHorizontal: scaleHorizontal(60),
    },
    image: {
        position: 'absolute',
        top: scaleVertical(0),
        left: scaleHorizontal(-180),
        width: scaleHorizontal(1300),
        height: scaleVertical(1200),
    },
    dataContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    textContainer: {
        width: scaleHorizontal(350),
    },
    text: {
        marginTop: scaleVertical(16),
    },
    nextButton: {
        marginBottom: scaleVertical(5),
        flexDirection: 'row',
        alignItems: 'center',
    },
    nextIcon: {
        width: NEXT_ICON_SIZE,
        height: NEXT_ICON_SIZE,
    },
    nextText: {
        marginRight: scaleHorizontal(16),
    },
});
