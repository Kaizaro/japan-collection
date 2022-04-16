import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articles/articleModalIds';
import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';

export interface IExhibitLink {
    route_id: ARTICLE_IDS | ARTICLE_MODAL_IDS;
    text: string;
}
