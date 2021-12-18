import {PressableStateCallbackType, ViewStyle} from 'react-native';

import {ACTIVE_OPACITY, NOT_ACTIVE_OPACITY} from '@shared/constants/styles';

export const getExhibitFilterModalContentItemStyles = ({
    pressed,
}: PressableStateCallbackType): ViewStyle => ({
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 10,
    opacity: pressed ? ACTIVE_OPACITY : NOT_ACTIVE_OPACITY,
});
