import React, {FC} from 'react';

import {IDefaultFCProps} from '@shared/types';

import {ExhibitWeaponSubCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-weapon-sub-category/ExhibitWeaponSubCategory';
import {ExhibitWeaponSubCategories} from '@src/modules/exhibits/ui/components/exhibit-weapon-sub-categories';
import {ExhibitMainCategoryProps} from '@src/modules/exhibits/ui/components/exhibit-main-category';
import {ExhibitMainCategories} from '@src/modules/exhibits/ui/components/exhibit-main-categories';
import {View} from "react-native";

interface IProps
    extends IDefaultFCProps,
        ExhibitMainCategoryProps,
        ExhibitWeaponSubCategoryProps {}

const ExhibitCategories: FC<IProps> = (props) => {
    return (
        <View>
            <ExhibitMainCategories {...props} />
            <ExhibitWeaponSubCategories {...props} />
        </View>
    );
};

export {ExhibitCategories};
