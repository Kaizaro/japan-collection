import React, {FC} from 'react';

import {ComponentContainer} from '@shared/ui/Container';
import ExhibitsList from '@entities/exhibits-list/ui/ExhibitsList';

const Exhibits: FC = () => {
    return (
        <ComponentContainer>
            <ExhibitsList />
        </ComponentContainer>
    );
};

/** @internal */
export default Exhibits;
