import React, {
    FC,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

import {BottomSheetView} from '@gorhom/bottom-sheet';

import {scaleVertical} from '@shared/utils/scale';
import {HeaderText} from '@shared/ui/text';
import {AppBottomSheetModal} from '@shared/ui/modals/app-bottom-sheet-modal/AppBottomSheetModal';
import {IDefaultFCProps, TNullable} from '@shared/types';
import {APP_COLORS, APP_TEXT_COLORS} from '@shared/config/colors';

import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';

import {ExhibitDescription} from '../exhibit-description';

import {exhibitModalStyles as styles} from './styles';

export interface IContextValue {
    isModalVisible: boolean;
    showModal: () => void;
    dismissModal: () => void;
    snapPoints: string[] | number[];
    handleSnapPointsChanges: (snapPointsArray?: string[] | number[]) => void;
    title: string;
    handleTitleChanges: (digit?: string) => void;
    subtitle: string;
    handleSubtitleChanges: (digit?: string) => void;
    text: string;
    handleTextChanges: (digit?: string) => void;
    links: TNullable<IExhibitLink[]>;
    handleLinksChanges: (linksArray: IExhibitLink[]) => void;
    clearAllData?: () => void;
}

const EXHIBIT_MODAL_DEFAULT_SNAP_POINTS = [scaleVertical(249)];

const initialContextValue = {
    isModalVisible: false,
    showModal: () => null,
    dismissModal: () => null,
    snapPoints: EXHIBIT_MODAL_DEFAULT_SNAP_POINTS,
    handleSnapPointsChanges: (snapPointsArray) => null,
    title: '',
    handleTitleChanges: (digit) => null,
    subtitle: '',
    handleSubtitleChanges: (digit) => null,
    text: '',
    handleTextChanges: (digit) => null,
    links: null,
    handleLinksChanges: (linksArray) => null,
} as IContextValue;

const ExhibitModalContext = createContext(initialContextValue);

const ExhibitModalProvider: FC<IDefaultFCProps> = ({children}) => {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [snapPoints, setSnapPoints] = useState(
        initialContextValue.snapPoints,
    );
    const [title, setTitle] = useState<string>(initialContextValue.title);
    const [subtitle, setSubtitle] = useState<string>(
        initialContextValue.subtitle,
    );
    const [text, setText] = useState<string>(initialContextValue.text);
    const [links, setLinks] = useState<TNullable<IExhibitLink[]>>(
        initialContextValue.links,
    );

    const showModal = useCallback(() => {
        setModalVisible(true);
    }, []);
    const dismissModal = useCallback(() => {
        setModalVisible(false);
    }, []);

    const handleSnapPointsChanges = useCallback(
        (snapPointsArray = EXHIBIT_MODAL_DEFAULT_SNAP_POINTS) => {
            setSnapPoints(snapPointsArray);
        },
        [],
    );

    const handleTitleChanges = useCallback((digit: string = '') => {
        setTitle(digit);
    }, []);

    const handleSubtitleChanges = useCallback((digit: string = '') => {
        setSubtitle(digit);
    }, []);

    const handleTextChanges = useCallback((digit: string = '') => {
        setText(digit);
    }, []);

    const handleLinksChanges = useCallback(
        (linksArray: TNullable<IExhibitLink[]> = null) => {
            setLinks(linksArray);
        },
        [],
    );

    const clearAllData = useCallback(() => {
        dismissModal();
        handleSnapPointsChanges();
        handleTitleChanges();
        handleSubtitleChanges();
        handleTextChanges();
        handleLinksChanges();
    }, [
        dismissModal,
        handleLinksChanges,
        handleSnapPointsChanges,
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
            handleLinksChanges,
            clearAllData,
        }),
        [
            clearAllData,
            dismissModal,
            handleLinksChanges,
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
                snapPoints={snapPoints}
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
                    <ExhibitDescription
                        description={text}
                        linkWords={links as IExhibitLink[]}
                        isModal={true}
                        innerStyle={styles.text}
                    />
                </BottomSheetView>
            </AppBottomSheetModal>
        </ExhibitModalContext.Provider>
    );
};

const useExhibitModal = (): IContextValue => useContext(ExhibitModalContext);

export {ExhibitModalProvider, ExhibitModalContext, useExhibitModal};
