import React, {FC, useCallback, useEffect, useMemo, useRef} from 'react';

import {View} from 'react-native';

import {BottomSheetModal, BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {IDefaultFCProps} from '@shared/types';

import {appBottomSheetModalStyles as styles} from './styles';

interface IAppBottomSheetModalProps extends IDefaultFCProps {
    modalName?: string;
    modalVisible: boolean;
    closeModal: () => void;
    snapPoints?: string[];
    isScrollable?: boolean;
    bottomSheetRef?: {current: BottomSheetModal};
}

const CLOSED_BOTTOM_SHEET_INDEX = -1;

const AppBottomSheetModal: FC<IAppBottomSheetModalProps> = (props) => {
    // define block
    const {
        modalName,
        modalVisible,
        closeModal,
        snapPoints,
        isScrollable,
        children,
        innerStyle,
        bottomSheetRef,
    } = props;
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPointsLocal: string[] = useMemo(
        () => snapPoints ?? ['90%'],
        [snapPoints],
    );

    // callbacks
    const handlePresentModalPress = useCallback((): void => {
        bottomSheetModalRef?.current?.present();
    }, []);

    const handleDismissModalPress = useCallback((): void => {
        bottomSheetModalRef?.current?.dismiss();
    }, []);

    const handleSheetChanges = useCallback(
        (bottomSheetIndex: number): void => {
            if (bottomSheetIndex === CLOSED_BOTTOM_SHEET_INDEX) {
                closeModal();
            }
        },
        [closeModal],
    );

    useEffect(() => {
        if (modalVisible) {
            handlePresentModalPress();
        } else {
            handleDismissModalPress();
        }
    }, [handleDismissModalPress, handlePresentModalPress, modalVisible]);

    // components block
    const renderChildrenComponent = useMemo(
        () =>
            isScrollable ? (
                <BottomSheetScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollviewContainer}>
                    {children}
                </BottomSheetScrollView>
            ) : (
                children
            ),
        [children, isScrollable],
    );

    const renderBackDropComponent = useCallback(
        () => (modalVisible ? <View style={styles.modal} /> : null),
        [modalVisible],
    );

    // render block
    return (
        <>
            {modalVisible && (
                <BottomSheetModal
                    name={modalName}
                    ref={bottomSheetModalRef}
                    snapPoints={snapPointsLocal}
                    index={0}
                    onChange={handleSheetChanges}
                    style={{...styles.modalContainer, ...innerStyle}}
                    backdropComponent={renderBackDropComponent}>
                    {renderChildrenComponent}
                </BottomSheetModal>
            )}
        </>
    );
};

export {AppBottomSheetModal};
export type {IAppBottomSheetModalProps};
