import {useCallback, useEffect, useState} from 'react';

import {getModels} from '@features/models/getModels';
import {models as IModels} from '@entities';

interface IUseGetModels {
    models: IModels.IModel;
    fetchModels: () => void;
}

const useGetModels = (): IUseGetModels => {
    const [models, setModels] = useState<IModels.IModel | null>(null);

    const fetchModels = useCallback(() => {
        const fetchedModels = getModels();

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

export {useGetModels};
