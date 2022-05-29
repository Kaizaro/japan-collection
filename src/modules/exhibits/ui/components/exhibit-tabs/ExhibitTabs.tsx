import React, {FC} from 'react';

import {View} from 'react-native';

import {ExhibitTab} from "@src/modules/exhibits/ui/components/exhibit-tab";
import {IDefaultFCProps} from "@shared/types";

interface IProps extends IDefaultFCProps {
    warriorCategory: string;
}

const ExhibitTabs: FC<IProps> = ({warriorCategory, innerStyle}) => {


    return (
        <View>
            <ExhibitTab isActive={} tabTitle={} onTabPress={} />
        </View>
    );
};
