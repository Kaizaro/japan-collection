import React, {FC, useCallback} from 'react';

import {View} from 'react-native';

import {RegularText} from '@shared/ui/RegularText';
import {IDefaultFCProps} from '@shared/types';

import {useExhibitLinks} from '@src/modules/exhibits/presenter/hooks/useExhibitLinks';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articles/articleModalIds';
import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';

interface IText extends IExhibitLink {
    type: 'regular' | 'pressable';
}

interface IProps extends IDefaultFCProps {
    description: string;
    linkWords?: IExhibitLink[];
}

const ExhibitDescription: FC<IProps> = ({
    description,
    linkWords,
    innerStyle,
}) => {
    const {handleLinkPress} = useExhibitLinks();

    const renderText = useCallback(
        (textObjectArray: IText[]) => {
            return (
                <RegularText fontSizeScaled={18}>
                    {textObjectArray.map(({type, route_id, text}) => {
                        if (type === 'pressable') {
                            return (
                                <RegularText
                                    fontSizeScaled={18}
                                    fontWeight={'700'}
                                    onPress={() => handleLinkPress(route_id)}>
                                    {`${text}${' '}`}
                                </RegularText>
                            );
                        } else {
                            return (
                                <RegularText fontSizeScaled={18}>
                                    {`${text}${' '}`}
                                </RegularText>
                            );
                        }
                    })}
                </RegularText>
            );
        },
        [handleLinkPress],
    );

    const selectRenderedText = useCallback(() => {
        if (linkWords) {
            const splittedText = description.split(' ');
            const linkTexts = linkWords.map((linkWord) => linkWord.text);
            console.log('@LINK_TEXT', linkTexts);
            const endedText: IText[] = [];
            splittedText.forEach((textItem) => {
                console.log('@LINK_includes', linkTexts.includes(textItem));
                if (linkTexts.includes(textItem)) {
                    const link = linkWords.find(
                        (linkWord) => linkWord.text === textItem,
                    );
                    console.log('@LINK', link);
                    if (link) {
                        endedText.push({
                            route_id: link.route_id,
                            text: textItem,
                            type: 'pressable',
                        });
                    }
                } else {
                    endedText.push({
                        route_id: '',
                        text: textItem,
                        type: 'regular',
                    });
                }
            });
            console.log('@LINK_ENDED_TEXT', endedText);
            return renderText(endedText);
        } else {
            return <RegularText fontSizeScaled={18}>{description}</RegularText>;
        }
    }, [description, linkWords, renderText]);

    return <View style={innerStyle}>{selectRenderedText()}</View>;
};

export {ExhibitDescription};
