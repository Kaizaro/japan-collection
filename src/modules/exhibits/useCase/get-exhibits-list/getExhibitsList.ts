import {exhibitsList} from '@shared/assets/mocks/exhibits';

import {IExhibit} from '@src/modules/exhibits/entities';

import fuji from '@shared/assets/graphics/images/fuji.png';
import {chunk} from 'lodash';

/** @internal */
export const getExhibitsList = (): IExhibit[][] => {
    const localExhibitsList = exhibitsList;

    localExhibitsList.map((item) => {
        item.image = fuji;
    });

    const chunkedExhibitsList = chunk(exhibitsList, 2);

    return chunkedExhibitsList;
};
