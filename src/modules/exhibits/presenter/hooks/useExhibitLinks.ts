import {useCallback} from 'react';

import {instanceOf} from 'prop-types';
import {useNavigation} from '@react-navigation/native';

import {APP_SCREEN_NAME} from '@shared/constants';

import {ARTICLES} from '@src/modules/exhibits/DAL/articles/articles';
import {ARTICLE_MODALS} from '@src/modules/exhibits/DAL/articles/articleModals';
import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articleModalIds';

const useExhibitLinks = () => {
    const {navigate} = useNavigation();

    const handleRouteToArticle = useCallback(
        (route_id: ARTICLE_IDS) => {
            const article = ARTICLES.find(
                (articleItem) => articleItem.id === route_id,
            );
            console.log('@SEAN', article);

            navigate(
                APP_SCREEN_NAME.ExhibitArticle as never,
                {article} as never,
            );
        },
        [navigate],
    );

    const handleArticleModal = useCallback((route_id: ARTICLE_MODAL_IDS) => {
        const articleModalValues = Object.values(ARTICLE_MODAL_IDS);
        console.log(articleModalValues);
        if (articleModalValues) {
            const articleModal = ARTICLE_MODALS.find(
                (articleModalItem) => articleModalItem.id === route_id,
            );

            console.log('@SEAN', articleModal);
        }
    }, []);

    const handleLinkPress = useCallback(
        (route_id: ARTICLE_IDS | ARTICLE_MODAL_IDS) => {
            if (Object.values(ARTICLE_IDS).includes(route_id as ARTICLE_IDS)) {
                handleRouteToArticle(route_id as ARTICLE_IDS);
            } else if (
                Object.values(ARTICLE_MODAL_IDS).includes(
                    route_id as ARTICLE_MODAL_IDS,
                )
            ) {
                handleArticleModal(route_id as ARTICLE_MODAL_IDS);
            }
        },
        [handleArticleModal, handleRouteToArticle],
    );

    return {handleLinkPress};
};

export {useExhibitLinks};
