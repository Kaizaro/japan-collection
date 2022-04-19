import React, {FC, useCallback} from 'react';

import {View} from 'react-native';

import {RegularTextNew} from '@shared/ui/RegularText';
import {IDefaultFCProps, TNullable} from '@shared/types';
import {APP_FONTS} from '@shared/config/fonts';

import {parseDescriptionText} from '@src/modules/exhibits/utils/parseDescriptionText';
import {useExhibitLinks} from '@src/modules/exhibits/presenter/hooks/useExhibitLinks';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {IExhibitDescriptionText} from '@src/modules/exhibits/entities/exhibitDescriptionText';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articles/articleModalIds';
import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';

interface IProps extends IDefaultFCProps {
    description: string;
    linkWords?: TNullable<IExhibitLink[]>;
    isModal?: boolean;
}

const ExhibitDescription: FC<IProps> = ({
    description,
    linkWords,
    innerStyle,
    isModal = false,
}) => {
    const {handleLinkPress} = useExhibitLinks();

    const renderText = useCallback(
        (textObjectArray: IExhibitDescriptionText[]) => {
            return textObjectArray.map(({type, route_id, text}) => {
                if (type === 'pressable') {
                    return (
                        <RegularTextNew
                            fontSizeScaled={18}
                            fontFamily={
                                isModal ? APP_FONTS.HEADER : APP_FONTS.BOLD
                            }
                            isUnderlined={isModal}
                            onPress={() =>
                                handleLinkPress(
                                    route_id as ARTICLE_IDS | ARTICLE_MODAL_IDS,
                                )
                            }>
                            {`${text}${' '}`}
                        </RegularTextNew>
                    );
                } else {
                    return `${text}${' '}`;
                }
            });
        },
        [handleLinkPress, isModal],
    );

    const selectRenderedText = useCallback(() => {
        if (linkWords) {
            const formattedText = parseDescriptionText(description, linkWords);
            return renderText(formattedText);
        } else {
            return description;
        }
    }, [description, linkWords, renderText]);

    return (
        <View style={innerStyle}>
            <RegularTextNew
                fontFamily={isModal ? APP_FONTS.HEADER : APP_FONTS.REGULAR}
                fontSizeScaled={18}
                lineHeightScaled={32}>
                {selectRenderedText()}
            </RegularTextNew>
        </View>
    );
};

export {ExhibitDescription};
