import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

const TITLE_ICON_SIZE = scaleVertical(24);
const DOCUMENT_ICON_SIZE = scaleVertical(32);

export const exhibitDictionaryStyles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleIcon: {
        marginLeft: scaleHorizontal(16),
        width: TITLE_ICON_SIZE,
        height: TITLE_ICON_SIZE,
    },
    documentContainer: {
        marginTop: scaleVertical(28),
        width: '100%',
    },
    documentRow: {
        marginVertical: scaleVertical(10),
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    documentIcon: {
        width: DOCUMENT_ICON_SIZE,
        height: DOCUMENT_ICON_SIZE,
    },
    documentText: {
        marginLeft: scaleHorizontal(12),
    },
});
