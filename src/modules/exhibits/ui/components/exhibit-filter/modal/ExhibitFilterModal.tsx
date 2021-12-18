import React, {FC} from 'react';
import {Modal} from 'react-native';

import {ExhibitFilterModalContent} from '../modal-content';

interface IProps {
    isVisible: boolean;
}

const ExhibitFilterModal: FC<IProps> = (props) => {
    const {isVisible} = props;

    return (
        <Modal visible={isVisible} animated={true} animationType={'slide'}>
            <ExhibitFilterModalContent />
        </Modal>
    );
};

export default ExhibitFilterModal;
