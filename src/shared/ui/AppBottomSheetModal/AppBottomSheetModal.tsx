import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';

import {ViewStyle} from 'react-native';

import Animated from 'react-native-reanimated';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';

import {MIN_HEIGHT_SNAP_POINT, styles} from './styles';

export type SnapPoints =
    | (string | number)[]
    | Animated.SharedValue<(string | number)[]>;

export interface IAppBottomSheetModal {
    children: React.ReactNode | React.ReactNode[];
    isVisible?: boolean;
    ref?: IAppBottomSheetModalRef;
    innerStyle?: ViewStyle;
    name?: string;
    snapPoints?: SnapPoints;
    handleHeight?: number | Animated.SharedValue<number>;
    contentHeight?: number | Animated.SharedValue<number>;
    enableDismissOnClose?: boolean;
    showsVerticalScrollIndicator?: boolean;
    isEnableContentPanningGesture?: boolean;
    onClose?: () => void;
    onChange?: (index: number) => void;
    setBottomSheetModalRef?: (ref: React.Ref<BottomSheetModal>) => void;
    overDrag?: boolean;
}

export interface IAppBottomSheetModalRef {
    present: () => void;
    dismiss: () => void;
    snapToIndex: (
        index: number,
        animationConfigs?:
            | Animated.WithSpringConfig
            | Animated.WithTimingConfig
            | undefined,
    ) => void;
}

export const AppBottomSheetModal = forwardRef<
    IAppBottomSheetModalRef,
    IAppBottomSheetModal
>(
    (
        {
            children,
            isVisible = false,
            innerStyle = {},
            name,
            snapPoints = MIN_HEIGHT_SNAP_POINT,
            handleHeight,
            contentHeight,
            enableDismissOnClose = true,
            isEnableContentPanningGesture = true,
            onClose,
            onChange,
            setBottomSheetModalRef,
            overDrag = true,
        }: IAppBottomSheetModal,
        ref,
    ) => {
        const bottomSheetModalRef = useRef<BottomSheetModal>(null);

        const present = useCallback(
            () => bottomSheetModalRef.current?.present(),
            [],
        );
        const dismiss = useCallback(
            () => bottomSheetModalRef.current?.dismiss(),
            [],
        );

        const snapToIndex = useCallback(
            (
                index: number,
                animationConfigs?:
                    | Animated.WithSpringConfig
                    | Animated.WithTimingConfig
                    | undefined,
            ) =>
                bottomSheetModalRef.current?.snapToIndex(
                    index,
                    animationConfigs,
                ),
            [],
        );

        useImperativeHandle(ref, () => ({present, dismiss, snapToIndex}), [
            present,
            dismiss,
            snapToIndex,
        ]);

        useEffect(() => {
            setBottomSheetModalRef?.(bottomSheetModalRef);
        }, []);

        useEffect(() => {
            if (isVisible) {
                bottomSheetModalRef.current?.present();
            } else {
                bottomSheetModalRef.current?.dismiss();
            }
        }, [isVisible]);

        const renderBackdrop = useCallback(
            (props) => (
                <BottomSheetBackdrop
                    disappearsOnIndex={-1}
                    appearsOnIndex={0}
                    {...props}
                />
            ),
            [],
        );

        return (
            <BottomSheetModal
                activeOffsetY={[-1, 1]}
                failOffsetX={[-5, 5]}
                style={{...styles.container, ...innerStyle}}
                name={name}
                ref={bottomSheetModalRef}
                snapPoints={snapPoints}
                handleHeight={handleHeight}
                contentHeight={contentHeight}
                enableContentPanningGesture={isEnableContentPanningGesture}
                enableDismissOnClose={enableDismissOnClose}
                keyboardBehavior="interactive"
                keyboardBlurBehavior="restore"
                backdropComponent={renderBackdrop}
                onDismiss={onClose}
                onChange={onChange}
                enableOverDrag={overDrag}>
                {children}
            </BottomSheetModal>
        );
    },
);
