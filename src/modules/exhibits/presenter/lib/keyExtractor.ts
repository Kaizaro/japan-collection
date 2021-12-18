import {IExhibit} from '@src/modules/exhibits/entities';

/** @internal */
export const keyExtractor = (item: IExhibit, index: number): string => {
    return `${item.title}_${index}`;
};
