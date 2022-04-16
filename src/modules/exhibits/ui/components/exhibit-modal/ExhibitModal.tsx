import React, {FC, createContext, useCallback, useMemo, useState} from 'react';

import {BottomSheetView} from '@gorhom/bottom-sheet';

import {HeaderText} from '@shared/ui/text';
import {AppBottomSheetModal} from '@shared/ui/AppBottomSheetModal/AppBottomSheetModal';
import {IDefaultFCProps} from '@shared/types';
import {APP_COLORS, APP_TEXT_COLORS} from '@shared/config/colors';

export interface IContextValue {
    isModalVisible: boolean;
    showModal: () => void;
    dismissModal: () => void;
    title: string;
    handleTitleChanges?: (title?: string) => void;
    subtitle: string;
    handleSubtitleChanges?: (subtitle?: string) => void;
    text: string;
    handleTextChanges?: (text?: string) => void;
    clearAllData?: () => void;
}

const initialContextValue = {
    isModalVisible: false,
    title: '',
    subtitle: '',
    text: '',
} as IContextValue;

const ExhibitModalContext = createContext(initialContextValue);

const ExhibitModalProvider: FC<IDefaultFCProps> = ({children}) => {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(initialContextValue.title);
    const [subtitle, setSubtitle] = useState<string>(
        initialContextValue.subtitle,
    );
    const [text, setText] = useState<string>(initialContextValue.text);

    const showModal = useCallback(() => {
        setModalVisible(true);
    }, []);
    const dismissModal = useCallback(() => {
        setModalVisible(false);
    }, []);

    const handleTitleChanges = useCallback((digit: string = '') => {
        setTitle(digit);
    }, []);

    const handleSubtitleChanges = useCallback((digit: string = '') => {
        setSubtitle(digit);
    }, []);

    const handleTextChanges = useCallback((digit: string = '') => {
        setText(digit);
    }, []);

    const clearAllData = useCallback(() => {
        dismissModal();
        handleTitleChanges();
        handleSubtitleChanges();
        handleTextChanges();
    }, [
        dismissModal,
        handleSubtitleChanges,
        handleTextChanges,
        handleTitleChanges,
    ]);

    const contextValue = useMemo(
        () => ({
            isModalVisible,
            title,
            subtitle,
            text,
            showModal,
            dismissModal,
            handleTitleChanges,
            handleSubtitleChanges,
            handleTextChanges,
            clearAllData,
        }),
        [
            clearAllData,
            dismissModal,
            handleSubtitleChanges,
            handleTextChanges,
            handleTitleChanges,
            isModalVisible,
            showModal,
            subtitle,
            text,
            title,
        ],
    );

    return (
        <ExhibitModalContext.Provider value={contextValue}>
            {children}
            <AppBottomSheetModal>
                <BottomSheetView>
                    <HeaderText color={APP_COLORS.RED} fontSize={24}>
                        {title}
                    </HeaderText>
                    <BottomSheetView>
                        <HeaderText
                            color={APP_TEXT_COLORS.MAIN_OPACITY}
                            fontSize={18}>
                            {subtitle}
                        </HeaderText>
                    </BottomSheetView>
                    <BottomSheetView>
                        <HeaderText color={APP_TEXT_COLORS.MAIN} fontSize={18}>
                            {text}
                        </HeaderText>
                    </BottomSheetView>
                </BottomSheetView>
            </AppBottomSheetModal>
        </ExhibitModalContext.Provider>
    );
};

export {ExhibitModalProvider};
