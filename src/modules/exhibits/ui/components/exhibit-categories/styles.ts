import {StyleSheet} from 'react-native';

import {scaleVertical} from '@shared/utils/scale';

export const exhibitCategoriesStyles = StyleSheet.create({
    tags: {
        marginTop: scaleVertical(16),
    },
    rows: {
        marginTop: scaleVertical(14),
    },
});
