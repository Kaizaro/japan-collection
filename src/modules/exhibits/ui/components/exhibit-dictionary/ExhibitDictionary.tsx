import React, {FC, useCallback} from 'react';

import {Image, View} from 'react-native';

import {RegularText} from '@shared/ui/text';
import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {IDefaultFCProps} from '@shared/types';
import {APP_COLORS} from '@shared/config/colors';

import {useExhibitLinks} from '@src/modules/exhibits/presenter/hooks/useExhibitLinks';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';

import documentIcon from '../../../../../shared/assets/graphics/icons/document.png';
import dictionaryIcon from '../../../../../shared/assets/graphics/icons/dictionary.png';

import {exhibitDictionaryStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    dictionary: IExhibitLink[];
}

const ExhibitDictionary: FC<IProps> = ({dictionary, innerStyle}) => {
    const {handleLinkPress} = useExhibitLinks();

    const renderItem = useCallback(
        ({route_id, text}: IExhibitLink, index: number) => (
            <PressableComponent
                onPress={() => handleLinkPress(route_id)}
                key={`${route_id}_${index}`}
                innerStyle={styles.documentRow}>
                <Image
                    source={documentIcon}
                    resizeMode={'contain'}
                    style={styles.documentIcon}
                />
                <View style={styles.documentText}>
                    <RegularText fontSize={18}>{text}</RegularText>
                </View>
            </PressableComponent>
        ),
        [handleLinkPress],
    );

    return (
        <View style={{...innerStyle}}>
            <View style={styles.titleContainer}>
                <RegularText fontSize={18} color={APP_COLORS.RED}>
                    Справочник
                </RegularText>
                <Image
                    source={dictionaryIcon}
                    style={styles.titleIcon}
                    resizeMode={'contain'}
                />
            </View>
            <View style={styles.documentContainer}>
                {dictionary.map((document, index) => {
                    return renderItem(document, index);
                })}
            </View>
        </View>
    );
};

export {ExhibitDictionary};
