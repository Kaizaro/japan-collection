import {chunk} from 'lodash';

import {exhibitsList} from '@shared/assets/mocks/exhibits';
import MOCK_IMAGE from '@shared/assets/graphics/images/exhibits/sakai_masamune_card.png';

import {IExhibit} from '@src/modules/exhibits/entities';

/** @internal */
export const getExhibitsList = (): IExhibit[][] => {
    const localExhibitsList = exhibitsList;

    localExhibitsList.map((item) => {
        item.image = MOCK_IMAGE;
    });

    const chunkedExhibitsList = chunk(exhibitsList, 2);

    return chunkedExhibitsList;
};
