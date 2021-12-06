import React from 'react';
import {FlatList} from 'react-native';

import {exhibitsListKeyExtractor} from '../lib/utils';

const ExhibitsList = () => {
    const {}

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={exhibitsListKeyExtractor}
            data={models}
            renderItem={renderItem}
        />
    );
};

export {ExhibitsList};
