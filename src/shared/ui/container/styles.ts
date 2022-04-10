import {StyleSheet} from 'react-native';

import {scaleHorizontal} from '@shared/utils/scale';

/** @internal */
export const componentContainerStyles = StyleSheet.create({
    container: {
        paddingHorizontal: scaleHorizontal(60),
    },
});
