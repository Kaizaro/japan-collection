import React, {FC} from 'react';
import {Modal} from 'react-native';

import {ExhibitFilterModalContent} from '../modal-content';

import {TExhibitFilterCategoryId} from '@src/modules/exhibits/entities';

interface IProps {
    isVisible: boolean;
    closeModal: () => void;
    selectedCategory: TExhibitFilterCategoryId;
    setSelectedCategory: () => void;
}

const ExhibitFilterModal: FC<IProps> = (props) => {
    const {isVisible, closeModal, selectedCategory, setSelectedCategory} =
        props;

    return (
        <Modal
            visible={isVisible}
            animated={true}
            animationType={'slide'}
            onRequestClose={closeModal}>
            <ExhibitFilterModalContent
                closeModal={closeModal}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </Modal>
    );
};

export default ExhibitFilterModal;
