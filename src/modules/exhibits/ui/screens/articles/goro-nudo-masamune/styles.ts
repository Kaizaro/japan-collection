import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

export const articleGoroNudoMasamuneStyles = StyleSheet.create({
    image: {
        width: scaleHorizontal(714),
        height: scaleHorizontal(391),
    },
    title: {
        marginTop: scaleVertical(44),
    },
    description: {
        marginTop: scaleVertical(24),
    },
});
