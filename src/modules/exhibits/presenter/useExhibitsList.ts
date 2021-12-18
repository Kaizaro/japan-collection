import {useEffect, useState} from 'react';

import {getExhibitsList} from '@src/modules/exhibits/useCase/get-exhibits-list';

import {IExhibit} from '@src/modules/exhibits/entities';

const useExhibitsList = () => {
    const [exhibitsList, setExhibitsList] = useState<IExhibit[]>([]);

    useEffect(() => {
        setExhibitsList(getExhibitsList());
    }, []);

    return {
        exhibitsList,
    };
};

/** @internal */
export {useExhibitsList};
