import React, {FC} from 'react';

import {ComponentContainer} from '@shared/ui/Container';
import ExhibitsList from '@src/modules/exhibits/ui/components/exhibits-list/ExhibitsList';

const Exhibits: FC = () => {
    return (
        <ComponentContainer>
            <ExhibitsList />
        </ComponentContainer>
    );
};

/** @internal */
export default Exhibits;
