import {IExhibit} from '@entities/exhibit';

/** @internal */
export const keyExtractor = (item: IExhibit, index: number): string => {
    return `${item.title}_${index}`;
};
