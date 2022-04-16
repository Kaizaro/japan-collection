import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articles/articleModalIds';

export interface IExhibitLink {
    route_id: ARTICLE_IDS | ARTICLE_MODAL_IDS;
    text: string;
}
