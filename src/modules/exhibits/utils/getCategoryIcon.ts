import {ImageSourcePropType} from 'react-native';

import {IExhibitCategory} from '@src/modules/exhibits/entities/exhibitCategory';

import bladeIcon from '../../../shared/assets/graphics/icons/categories/blade_weapon.png';

export const getCategoryIcon = (
    category: IExhibitCategory,
): ImageSourcePropType => {
    switch (category) {
        case IExhibitCategory.BLADE_WEAPON:
            return bladeIcon;
        default:
            return bladeIcon;
    }
};
