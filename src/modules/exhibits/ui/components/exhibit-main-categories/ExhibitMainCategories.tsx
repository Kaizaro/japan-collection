import React, {FC} from 'react';

import {View} from 'react-native';

import {IDefaultFCProps, TNullable} from '@shared/types';

import {ExhibitMainCategory} from '@src/modules/exhibits/ui/components/exhibit-main-category';
import {EXHIBIT_CATEGORY} from '@src/modules/exhibits/entities';

import {exhibitTabsStyles} from './styles';

interface IProps extends IDefaultFCProps {
    selectedMainCategory: TNullable<EXHIBIT_CATEGORY>;
    setSelectedMainCategory: () => void;
}

const ExhibitMainCategories: FC<IProps> = ({
    selectedMainCategory,
    setSelectedMainCategory,
    innerStyle,
}) => {
    return (
        <View style={{...exhibitTabsStyles, ...innerStyle}}>
            <ExhibitMainCategory
                tabId={EXHIBIT_CATEGORY.JAPANESE_WEAPON}
                selectedMainCategory={selectedMainCategory}
                tabTitle={'Оружие'}
                onTabPress={setSelectedMainCategory}
            />
            <ExhibitMainCategory
                tabId={EXHIBIT_CATEGORY.JAPANESE_CULTURE}
                selectedMainCategory={selectedMainCategory}
                tabTitle={'Искусство'}
                onTabPress={setSelectedMainCategory}
            />
        </View>
    );
};

export {ExhibitMainCategories};
