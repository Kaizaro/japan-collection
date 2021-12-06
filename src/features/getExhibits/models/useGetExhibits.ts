import {useCallback, useEffect, useState} from 'react';

import {getExhibits} from '@features/getExhibits/models/getExhibits';

import {models as IModels} from '@entities';

interface IUseGetModels {
    models: IModels.IExhibit;
    fetchModels: () => void;
}

const useGetExhibits = (): IUseGetModels => {
    const [models, setModels] = useState<IModels.IExhibit | null>(null);

    const fetchModels = useCallback(() => {
        const fetchedModels = getExhibits();

        console.log('@SEAN', 'models', fetchedModels);
        if (fetchedModels) {
            setModels(fetchedModels);
        }
    }, []);

    useEffect(() => {
        fetchModels();
    }, [fetchModels]);

    return {
        models,
        fetchModels,
    };
};

export {useGetExhibits};
