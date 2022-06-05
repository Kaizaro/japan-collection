import React, {FC} from 'react';

import {IDefaultFCProps, TNullable} from '@shared/types';

import {ExhibitMainCategories} from '@src/modules/exhibits/ui/components/exhibit-main-categories';
import {EXHIBIT_CATEGORY} from '@src/modules/exhibits/entities';

interface IProps extends IDefaultFCProps {
    selectedMainCategory: TNullable<EXHIBIT_CATEGORY>;
    setSelectedMainCategory: () => void;
}

const ExhibitCategories: FC<IProps> = ({
    selectedMainCategory,
    setSelectedMainCategory,
}) => {
    return (
        <ExhibitMainCategories
            selectedMainCategory={selectedMainCategory}
            setSelectedMainCategory={setSelectedMainCategory}
        />
    );
};

export {ExhibitCategories};
