import {StyleSheet} from 'react-native';

import {scaleHorizontal} from '@shared/utils/scale';

export const exhibitWeaponSubCategoriesStyles = StyleSheet.create({
    container: {
        width: '100%',
    },
    scrollViewContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        marginHorizontal: scaleHorizontal(8),
    },
});
