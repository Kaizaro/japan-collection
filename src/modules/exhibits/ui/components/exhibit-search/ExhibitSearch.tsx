import React, {FC} from 'react';

import {
    Image,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';

import {IDefaultFCProps} from '@shared/types';

import searchIcon from '../../../../../shared/assets/graphics/icons/search.png';

import {exhibitSearchStyles as styles} from './styles';

interface IProps extends IDefaultFCProps, TextInputProps {
    innerTextInputStyles?: TextStyle & ViewStyle;
}

const ExhibitSearch: FC<IProps> = (props) => {
    const {innerStyle, innerTextInputStyles} = props;

    return (
        <View style={{...styles.container, ...innerStyle}}>
            <Image
                source={searchIcon}
                style={styles.icon}
                resizeMode={'contain'}
            />
            <TextInput
                style={{...styles.textInput, ...innerTextInputStyles}}
                {...props}
            />
        </View>
    );
};

export {ExhibitSearch};
