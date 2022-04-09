import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

const ICON_SIZE = scaleVertical(32);

export const appHeaderStyles = StyleSheet.create({
    header: {
        width: '100%',
        paddingHorizontal: scaleHorizontal(60),
        backgroundColor: 'transparent',
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
    },
});
