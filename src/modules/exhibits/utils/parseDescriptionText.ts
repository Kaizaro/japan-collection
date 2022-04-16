import {IExhibitLink} from '../entities/exhibitLink';

export const parseDescriptionText = (
    descriptionText: string,
    linkWords: IExhibitLink[],
) => {
    const splittedText = descriptionText.split(' ');
    const linkTexts = linkWords.map((linkWord) => linkWord.text);
    splittedText.forEach((textItem) => {
        console.log(linkTexts.includes(textItem));
        if (linkTexts.includes(textItem)) {
            return
        }
    });
};
