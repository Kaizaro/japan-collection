import React, {FC} from 'react';

import {Image, ScrollView, View} from 'react-native';

import {scaleVertical} from '@shared/utils/scale';
import {HeaderText, RegularText} from '@shared/ui/text';
import {ComponentContainer} from '@shared/ui/container';
import {APP_TEXT_COLORS} from '@shared/config/colors';

import goroNudoMasamune from '../../../../../../shared/assets/graphics/images/articles/goro-nudo-masamune.png';

import {articleGoroNudoMasamuneStyles as styles} from './styles';

const ArticleGoroNudoMasamune: FC = () => {
    return (
        <ComponentContainer innerStyle={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
                contentInset={{bottom: scaleVertical(30)}}>
                <View>
                    <Image
                        source={goroNudoMasamune}
                        style={styles.image}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.title}>
                    <HeaderText fontSize={48}>ГОРО НЮДО МАСАМУНЭ</HeaderText>
                </View>
                <View>
                    <RegularText
                        fontSize={24}
                        color={APP_TEXT_COLORS.SECONDARY}>
                        (1264-1343)
                    </RegularText>
                </View>
                <View style={styles.description}>
                    <RegularText fontSize={18}>
                        Масамунэ считается самым величайшим кузнецом в Японии,
                        работавшим в эпоху Камакура в провинции Сагами.
                        Принадлежал к школе Сосю. Разработал неповторимую
                        сложную технику ковки из разных по плотности сортов
                        стали, которая делала клинок одновременно прочным и
                        гибким. Характерной чертой клинков Масамунэ является
                        рисунок «ниэ» («кипение»), при рассмотрении которого
                        частицы мартенсита выглядят как «мерцающие звёзды».
                        Большинство клинков Масамунэ не подписывал, зная, что их
                        не возможно подделать. Многие из дошедших клинков были
                        укорочены (ссылка-модалка) «укорачивание клинков») в
                        эпоху Эдо, начиная с XVII века. Мечи Масамунэ были
                        излюбленными клинками правящего рода Токугава
                        (ссылка-статья), а меч "Хондзё Масамунэ"
                        (ссылка-модалка) стал символом сёгуната Токугава,
                        который передавали по наследству как символ власти.
                        Традиции школы Масамунэ продолжил его сын Хикосиро
                        Садамуне (ссылка-статья), десять учеников «Дзютэцу»
                        (ссылка-модалка), а также его ученики Хиромицу и
                        Акихиро.
                    </RegularText>
                </View>
            </ScrollView>
        </ComponentContainer>
    );
};

export {ArticleGoroNudoMasamune};
