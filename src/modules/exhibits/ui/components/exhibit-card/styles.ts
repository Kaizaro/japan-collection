import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';
import { IExhibit } from './src/modules/exhibits/entities';

const ICON_SIZE = scaleVertical(32);

export const exhibitCardStyles = StyleSheet.create({
    card: {
        width: scaleHorizontal(347),
        paddingBottom: scaleVertical(5),
        borderWidth: 1,
    },
    imageContainer: {
        borderRadius: scaleVertical(16),
        overflow: 'hidden',
    },
    image: {
        width: scaleHorizontal(347),
        height: scaleVertical(260),
    },
    title: {
        marginTop: scaleVertical(20),
    },
    subtitle: {
        marginTop: scaleVertical(4),
    },
    description: {
        marginTop: scaleVertical(16),
    },
    categoryIconContainer: {
        marginTop: scaleVertical(8),
        width: '100%',
        alignItems: 'flex-end',
    },
    categoryIcon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
    },
});
