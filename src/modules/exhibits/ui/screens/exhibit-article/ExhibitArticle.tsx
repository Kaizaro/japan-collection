import React, {FC} from 'react';

import {Image, ScrollView, View} from 'react-native';

import {useRoute} from '@react-navigation/core';

import {HeaderText, RegularText} from '@shared/ui/text';
import {ComponentContainer} from '@shared/ui/container';
import {DEFAULT_BOTTOM_INSET} from '@shared/constants/styles';
import {APP_TEXT_COLORS} from '@shared/config/colors';

import {IArticle} from '@src/modules/exhibits/entities/article';

import {articleGoroNudoMasamuneStyles as styles} from './styles';

const ExhibitArticle: FC = () => {
    const article = useRoute().params?.article as Record<string, IArticle>;

    return (
        <ComponentContainer innerStyle={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
                contentInset={DEFAULT_BOTTOM_INSET}>
                <View>
                    {/* TODO need to fix images */}
                    <Image
                        source={article.images[0]}
                        style={styles.image}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.title}>
                    <HeaderText fontSize={48}>{article.title}</HeaderText>
                </View>
                {article.subtitle && (
                    <View>
                        <RegularText
                            fontSize={24}
                            color={APP_TEXT_COLORS.SECONDARY}>
                            {article.subtitle}
                        </RegularText>
                    </View>
                )}
                <View style={styles.description}>
                    <RegularText fontSize={18}>
                        {article.description}
                    </RegularText>
                </View>
            </ScrollView>
        </ComponentContainer>
    );
};

export {ExhibitArticle};
