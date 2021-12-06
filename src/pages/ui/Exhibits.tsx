import React, {FC} from 'react';

import {Container} from '@shared/ui';
import {ExhibitsList} from '@features/../../entities/ui/exhibits-list/ExhibitsList';

const Exhibits: FC = () => {
    return (
        <Container>
            <ExhibitsList />
        </Container>
    );
};

export {Exhibits};
