import {StyleSheet} from 'react-native';

import {scaleHorizontal} from '@shared/utils/scale';

export const exhibitTabsStyles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        marginHorizontal: scaleHorizontal(8),
    },
});
