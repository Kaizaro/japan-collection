import React, {FC, useCallback} from 'react';
import {BoldText, Container, RegularText} from '@shared/ui';
import {useGetModels} from '@features/models/useGetModels';
import {FlatList, View} from 'react-native';

const ModelCard = ({item}) => {
    return (
        <View style={{paddingVertical: 10}}>
            <BoldText>{item.title}</BoldText>
            <RegularText>{item.subtitle}</RegularText>
            <RegularText>{item.description}</RegularText>
        </View>
    );
};

const keyExtractor = (item, index) => {
    return `${item.title}_${index}`;
};

const ModelList: FC = () => {
    const {models, fetchModels} = useGetModels();

    const renderItem = useCallback(({item}) => {
        return <ModelCard item={item} />;
    }, []);

    return (
        <Container>
            <FlatList
                keyExtractor={keyExtractor}
                data={models}
                renderItem={renderItem}
            />
        </Container>
    );
};

export {ModelList};
