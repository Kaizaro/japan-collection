import {exhibitsList} from '@shared/assets/mocks';

import {IExhibit} from '@entities/exhibit';

import fuji from '@shared/assets/graphics/images/fuji.png';

/** @internal */
export const getExhibitsList = (): IExhibit[] => {
    const localExhibitsList = exhibitsList;

    localExhibitsList.map((item) => {
        item.image = fuji;
    });

    return exhibitsList;
};
