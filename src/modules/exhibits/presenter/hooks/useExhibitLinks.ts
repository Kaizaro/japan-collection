import {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';

import {IArticle} from '@src/modules/exhibits/entities/article';
import {ARTICLES} from '@src/modules/exhibits/DAL/articles/articles';
import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articleModalIds';
import {APP_SCREEN_NAME} from "@shared/constants";

const useExhibitLinks = () => {
    const {navigate} = useNavigation();

    const handleRouteToArticle = useCallback((route_id: ARTICLE_IDS) => {
        const article = ARTICLES.find((articleItem) => articleItem.id === route_id)

        navigate(APP_SCREEN_NAME);
    }, []);

    const handleLinkPress = useCallback(
        (route_id: ARTICLE_IDS | ARTICLE_MODAL_IDS) => {
            const articleValues = Object.values(ARTICLE_IDS);
            if (articleValues) {
                handleRouteToArticle(route_id, articleValues);
            } else {
                const articleModalValues = Object.values(
                    ARTICLE_MODAL_IDS,
                ).includes(route_id as ARTICLE_MODAL_IDS);

                console.log(articleModalValues);
            }
        },
        [handleRouteToArticle],
    );

    return {handleLinkPress};
};

export {useExhibitLinks};
