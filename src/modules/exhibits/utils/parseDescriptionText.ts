import {IExhibitDescriptionText} from '@src/modules/exhibits/entities/exhibitDescriptionText';

import {IExhibitLink} from '../entities/exhibitLink';

export const parseDescriptionText = (
    descriptionText: string,
    linkWords: IExhibitLink[],
): IExhibitDescriptionText[] => {
    const splittedText = descriptionText.split(' ');
    const linkTexts = linkWords.map((linkWord) => linkWord.text);
    const endedText: IExhibitDescriptionText[] = [];
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
    return endedText;
};
