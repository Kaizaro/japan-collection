import {models} from '@entities';

export const exhibitsListKeyExtractor = (
    item: models.IExhibit,
    index: number,
) => {
    return `${item.title}_${index}`;
};
