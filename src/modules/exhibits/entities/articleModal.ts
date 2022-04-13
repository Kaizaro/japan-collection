import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';

export interface IArticleModal {
    title: string;
    subtitle?: string;
    text: string;
    links?: IExhibitLink[];
}
