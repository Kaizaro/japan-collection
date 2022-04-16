import React, {FC, useCallback} from 'react';

import {View} from 'react-native';

import {RegularText} from '@shared/ui/text';
import {IDefaultFCProps} from '@shared/types';

import {useExhibitLinks} from '@src/modules/exhibits/presenter/hooks/useExhibitLinks';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';

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

    const renderExhibitLinkText = useCallback(
        ({route_id, text}: IExhibitLink) => (
            <RegularText
                fontSize={18}
                fontWeight={'700'}
                onPress={() => handleLinkPress(route_id)}>
                {text}
            </RegularText>
        ),
        [handleLinkPress],
    );

    const renderExhibitRegularText = useCallback(
        (text: string) => <RegularText fontSize={18}>{text}</RegularText>,
        [],
    );

    const selectRenderedText = useCallback(() => {
        if (linkWords) {
            const splittedText = description.split(' ');
            const linkTexts = linkWords.map((linkWord) => linkWord.text);
            splittedText.forEach((textItem) => {
                console.log(linkTexts.includes(textItem));
                if (linkTexts.includes(textItem)) {
                    return;
                }
            });
        } else {
            return renderExhibitRegularText(description);
        }
    }, [description, linkWords, renderExhibitRegularText]);

    return <View style={innerStyle}>{selectRenderedText()}</View>;
};

export {ExhibitDescription};
