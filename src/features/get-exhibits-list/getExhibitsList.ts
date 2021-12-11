import {exhibitsList} from '@shared/assets';

import {IExhibit} from '@entities/exhibit';

import fuji from '@shared/assets/fuji.png';

/** @internal */
export const getExhibitsList = (): IExhibit[] => {
    const localExhibitsList = exhibitsList;

    localExhibitsList.map((item) => {
        item.image = fuji;
    });

    return exhibitsList;
};
