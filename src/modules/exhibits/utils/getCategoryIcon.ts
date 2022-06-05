import {ImageSourcePropType} from 'react-native';

import {ExhibitCategory} from '@src/modules/exhibits/entities/categories/exhibitCategory';

import bladeIcon from '../../../shared/assets/graphics/icons/categories/blade_weapon.png';

export const getCategoryIcon = (
    category: ExhibitCategory,
): ImageSourcePropType => {
    switch (category) {
        case ExhibitCategory.BLADE_WEAPON:
            return bladeIcon;
        default:
            return bladeIcon;
    }
};
