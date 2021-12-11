import {useEffect, useState} from 'react';

import {getExhibitsList} from '@features/get-exhibits-list';

import {IExhibit} from '@entities/exhibit';

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
