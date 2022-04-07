import {ViewStyle} from 'react-native';

const DEFAULT_ACTIVE_OPACITY = 0.7;
const DEFAULT_INACTIVE_OPACITY = 1;
const DEFAULT_DISABLED_OPACITY = 0.3;

export const HIT_SLOP_TOUCHABLE = {
    top: 16,
    bottom: 16,
    left: 16,
    right: 16,
};

export const getPressableComponentStyles = (isPressed: boolean, isDisabled: boolean): ViewStyle => {
    if (isPressed) {
        return {
            opacity: DEFAULT_ACTIVE_OPACITY,
        };
    } else if (isDisabled) {
        return {
            opacity: DEFAULT_DISABLED_OPACITY,
        };
    } else {
        return {
            opacity: DEFAULT_INACTIVE_OPACITY,
        };
    }
};
