import {chunk} from 'lodash';

import {IExhibit} from '@src/modules/exhibits/entities';
import {EXHIBITS} from '@src/modules/exhibits/DAL/exhibits/exhibits';

/** @internal */
export const getExhibitsList = (
    exhibitList: IExhibit[] = EXHIBITS,
): IExhibit[][] => {
    return chunk(exhibitList, 2);
};
