import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

const ICON_SIZE = scaleVertical(32);

export const exhibitTimeStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
    },
    text: {
        marginLeft: scaleHorizontal(12),
    },
});
