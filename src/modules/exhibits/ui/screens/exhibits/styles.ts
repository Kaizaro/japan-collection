import {StyleSheet} from 'react-native';

import {scaleVertical} from '@shared/utils/scale';

export const exhibitListStyles = StyleSheet.create({
    flatList: {
        // flex: 1,
        // marginTop: scaleVertical(80),
        width: '100%',
        height: '100%',
    },
    flatListContainer: {
        marginBottom: scaleVertical(20),
    },
    flatListItemRow: {
        marginVertical: scaleVertical(12),
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    emptyContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
