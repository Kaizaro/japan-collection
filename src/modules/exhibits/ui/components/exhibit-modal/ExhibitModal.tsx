import React, {
    FC,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

import {BottomSheetView} from '@gorhom/bottom-sheet';

import {HeaderText} from '@shared/ui/text';
import {AppBottomSheetModal} from '@shared/ui/modals/app-bottom-sheet-modal/AppBottomSheetModal';
import {IDefaultFCProps} from '@shared/types';
import {APP_COLORS, APP_TEXT_COLORS} from '@shared/config/colors';

import {exhibitModalStyles as styles} from './styles';

export interface IContextValue {
    isModalVisible: boolean;
    showModal: () => void;
    dismissModal: () => void;
    title: string;
    handleTitleChanges: (digit?: string) => void;
    subtitle: string;
    handleSubtitleChanges: (digit?: string) => void;
    text: string;
    handleTextChanges: (digit?: string) => void;
    clearAllData?: () => void;
}

const initialContextValue = {
    isModalVisible: false,
    showModal: () => null,
    dismissModal: () => null,
    title: '',
    handleTitleChanges: (digit) => null,
    subtitle: '',
    handleSubtitleChanges: (digit) => null,
    text: '',
    handleTextChanges: (digit) => null,
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
            <AppBottomSheetModal
                modalVisible={isModalVisible}
                closeModal={dismissModal}
                snapPoints={['20%']}
                innerStyle={styles.externalContainer}>
                <BottomSheetView style={styles.container}>
                    <HeaderText color={APP_COLORS.RED} fontSize={24}>
                        {title}
                    </HeaderText>
                    <BottomSheetView style={styles.subtitle}>
                        <HeaderText
                            color={APP_TEXT_COLORS.MAIN_OPACITY}
                            fontSize={18}>
                            {subtitle}
                        </HeaderText>
                    </BottomSheetView>
                    <BottomSheetView style={styles.text}>
                        <HeaderText color={APP_TEXT_COLORS.MAIN} fontSize={18}>
                            {text}
                        </HeaderText>
                    </BottomSheetView>
                </BottomSheetView>
            </AppBottomSheetModal>
        </ExhibitModalContext.Provider>
    );
};

const useExhibitModal = (): IContextValue => useContext(ExhibitModalContext);

export {ExhibitModalProvider, ExhibitModalContext, useExhibitModal};
