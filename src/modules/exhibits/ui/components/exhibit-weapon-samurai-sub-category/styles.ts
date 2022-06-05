import {StyleSheet} from 'react-native';

import {scaleVertical} from '@shared/utils/scale';

const ACTIVE_ICON_SIZE = scaleVertical(32);

export const exhibitWeaponsSamuraiSubCategoryStyles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: ACTIVE_ICON_SIZE,
        height: ACTIVE_ICON_SIZE,
    },
});
