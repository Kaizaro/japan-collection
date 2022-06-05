import {ImageSourcePropType} from 'react-native';

import {EXHIBIT_CATEGORY} from '@src/modules/exhibits/entities/categories/exhibitCategory';

import bladeIcon from '../../../shared/assets/graphics/icons/categories/blade_weapon.png';

export const getCategoryIcon = (
    category: EXHIBIT_CATEGORY,
): ImageSourcePropType => {
    switch (category) {
        case EXHIBIT_CATEGORY.BLADE_WEAPON:
            return bladeIcon;
        default:
            return bladeIcon;
    }
};
