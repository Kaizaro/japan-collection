import {chunk} from 'lodash';

import {IExhibit} from '@src/modules/exhibits/entities';
import {EXHIBITS} from '@src/modules/exhibits/DAL/exhibits';

/** @internal */
export const getExhibitsList = (): IExhibit[][] => {
    const chunkedExhibitsList = chunk(EXHIBITS, 2);

    return chunkedExhibitsList;
};
