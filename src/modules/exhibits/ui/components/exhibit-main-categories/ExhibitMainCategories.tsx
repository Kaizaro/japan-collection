import React, {FC} from 'react';

import {View} from 'react-native';

import {IDefaultFCProps} from '@shared/types';

import {
    ExhibitMainCategory,
    ExhibitMainCategoryProps,
} from '@src/modules/exhibits/ui/components/exhibit-main-category';
import {EXHIBIT_CATEGORY} from '@src/modules/exhibits/entities';

import {exhibitTabsStyles as styles} from './styles';

interface IProps extends IDefaultFCProps, ExhibitMainCategoryProps {}

const ExhibitMainCategories: FC<IProps> = ({innerStyle, ...props}) => {
    return (
        <View style={{...styles.container, ...innerStyle}}>
            <ExhibitMainCategory
                {...props}
                tabId={EXHIBIT_CATEGORY.JAPANESE_WEAPON}
                tabTitle={'Вооружение'}
                innerStyle={styles.item}
            />
            <ExhibitMainCategory
                {...props}
                tabId={EXHIBIT_CATEGORY.JAPANESE_CULTURE}
                tabTitle={'Искусство'}
                innerStyle={styles.item}
            />
        </View>
    );
};

export {ExhibitMainCategories};
