import {StyleSheet} from 'react-native';

import {scaleHorizontal, scaleVertical} from '@shared/utils/scale';

const TRACK_MOVE_ICON_SIZE = scaleVertical(32);
const TRACK_PLAY_PAUSE_SIZE_ICON = scaleVertical(48);

export const exhibitTrackStyles = StyleSheet.create({
    playerContainer: {
        flexDirection: 'row',
        width: scaleHorizontal(160),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    trackMoveIcon: {
        width: TRACK_MOVE_ICON_SIZE,
        height: TRACK_MOVE_ICON_SIZE,
    },
    trackPlayPauseIcon: {
        width: TRACK_PLAY_PAUSE_SIZE_ICON,
        height: TRACK_PLAY_PAUSE_SIZE_ICON,
    },
});
