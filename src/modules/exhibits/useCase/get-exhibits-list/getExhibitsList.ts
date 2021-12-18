import {exhibitsList} from '@shared/assets/mocks/exhibits';

import {IExhibit} from '@src/modules/exhibits/entities';

import fuji from '@shared/assets/graphics/images/fuji.png';

/** @internal */
export const getExhibitsList = (): IExhibit[] => {
    const localExhibitsList = exhibitsList;

    localExhibitsList.map((item) => {
        item.image = fuji;
    });

    return exhibitsList;
};
