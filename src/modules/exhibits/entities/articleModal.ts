import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';
import {ARTICLE_MODAL_IDS} from "@src/modules/exhibits/DAL/articleModalIds";

export interface IArticleModal {
    id: ARTICLE_MODAL_IDS;
    title: string;
    subtitle?: string;
    text: string;
    links?: IExhibitLink[];
}
