import React, {FC, useCallback} from 'react';

import {View} from 'react-native';

import {RegularTextNew} from '@shared/ui/RegularText';
import {IDefaultFCProps} from '@shared/types';
import {APP_FONTS} from '@shared/config/fonts';

import {parseDescriptionText} from '@src/modules/exhibits/utils/parseDescriptionText';
import {useExhibitLinks} from '@src/modules/exhibits/presenter/hooks/useExhibitLinks';
import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {IExhibitDescriptionText} from '@src/modules/exhibits/entities/exhibitDescriptionText';

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
        (textObjectArray: IExhibitDescriptionText[]) => {
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
            const formattedText = parseDescriptionText(description, linkWords);
            return renderText(formattedText);
        } else {
            return description;
        }
    }, [description, linkWords, renderText]);

    return (
        <View style={innerStyle}>
            <RegularTextNew fontSizeScaled={18} lineHeightScaled={32}>
                {selectRenderedText()}
            </RegularTextNew>
        </View>
    );
};

export {ExhibitDescription};
