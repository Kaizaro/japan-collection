import React, {FC, useCallback} from 'react';

import {View} from 'react-native';

import {RegularTextNew} from '@shared/ui/RegularText';
import {IDefaultFCProps} from '@shared/types';

import {useExhibitLinks} from '@src/modules/exhibits/presenter/hooks/useExhibitLinks';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {APP_FONTS} from "@shared/config/fonts";

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
            return textObjectArray.map(({type, route_id, text}) => {
                if (type === 'pressable') {
                    return (
                        <RegularTextNew
                            fontSizeScaled={18}
                            fontFamily={APP_FONTS.BOLD}
                            onPress={() => handleLinkPress(route_id)}>
                            {`${text}${' '}`}
                        </RegularTextNew>
                    );
                } else {
                    return `${text}${' '}`;
                }
            });
        },
        [handleLinkPress],
    );

    const selectRenderedText = useCallback(() => {
        if (linkWords) {
            const splittedText = description.split(' ');
            const linkTexts = linkWords.map((linkWord) => linkWord.text);
            const endedText: IText[] = [];
            splittedText.forEach((textItem) => {
                if (linkTexts.includes(textItem)) {
                    const link = linkWords.find(
                        (linkWord) => linkWord.text === textItem,
                    );
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
            return renderText(endedText);
        } else {
            return description;
        }
    }, [description, linkWords, renderText]);

    return (
        <View style={innerStyle}>
            <RegularTextNew fontSizeScaled={18}>
                {selectRenderedText()}
            </RegularTextNew>
        </View>
    );
};

export {ExhibitDescription};
