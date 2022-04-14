import {EXHIBIT_WEAPON_SUBCATEGORY} from '@src/modules/exhibits/entities/exhibitWeaponSubCategory';
import {ExhibitCategory} from '@src/modules/exhibits/entities/exhibitCategory';
import {IExhibit} from '@src/modules/exhibits/entities';
import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articleModalIds';

import threeStarsIcon from '../../../shared/assets/graphics/icons/three_stars.png';
import tickIcon from '../../../shared/assets/graphics/icons/active.png';

export const EXHIBITS = [
    {
        id: 'sakai_masamune',
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Вакидзаси «Сакаи Масамунэ»',
        subtitle: 'それは長い間確立された',
        type: 'Вакидзаси',
        blacksmith_name: 'Горо Нюдо Масамунэ',
        blacksmith_name_japanese: '五郎入道正宗',
        school: 'Сосю',
        province: 'Сагами',
        time: 'Конец периода Камакура – начало периода Намбокутё, первая треть XIV века',
        status: [
            {
                name: 'Мэйбуцу (исторический меч с личным именем)',
                icon: threeStarsIcon,
            },
            {
                name: 'Сайдзё-саку (наивысшее качество). Сертификат от Фукунага Суйкэн',
                icon: tickIcon,
            },
        ],
        description:
            'Уникальнейший клинок одного из самых выдающихся кузнецов Японии, Горо Масамунэ (ссылка-кнопка), представителя школы Сосю в провинции Сагами. Выкован в эпоху Камакура в эру Каряку (1326-1329 гг.), и относится к мечам периода Кото (ссылка-модалка «классификация мечей по временным периодам») («старые мечи»). Клинок шире обычного - «дамбира», по классификации длины - «вакидзаси» (ссылка-модалка). По форме относится типу «о-танто», и имеет однолезвийную форму, именуемую «хира-дзукури» (ссылка-модалка – «формы клинков»). На лезвии вырезано изображение самого почитаемого самураями буддийского божества Фудо-мёо. Меч обладает статусом «Мэйбуцу» (меч с именем), имеет собственное имя «Сакаи Масамунэ», поскольку хранился в семье князей Сакаи (ссылка-статья). Это подтверждено экспертизой одного из самых авторитетных экспертов Японии, доктором Фукунага Суйкэном в 1989 году. Признан клинком наивысшего качества «Сайдзёсаку» (ссылка-модалка «Рейтинги мечей по Фудзисиро»).',
        links: [
            // {
            //     route_id: 'goro_masamune',
            //     linkName: 'Горо Масамунэ',
            //     image: ARTICLE_IMAGES.GORO_NUDO_MASAMUNE,
            //     title: 'ГОРО НЮДО МАСАМУНЭ (1264-1343)',
            // },
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                name: 'Горо Масамунэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                name: 'Кото',
            },
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                name: '«вакидзаси»',
            },
            {
                route_id: ARTICLE_MODAL_IDS,
                name: '«хира-дзукури»',
            },
            {
                route_id: ARTICLE_IDS.SAKAI_CLAN,
                name: 'Сакаи',
            },
            {
                route_id: ARTICLE_MODAL_IDS,
                name: '«Сайдзёсаку»',
            },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     name: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        id: 'katana_masamune',
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.KATANA,
        title: 'Катана Масамунэ',
        subtitle: 'それは長い間確立された',
        type: 'Катана',
        blacksmith_name: 'Горо Нюдо Масамунэ',
        blacksmith_name_japanese: '五郎入道正宗',
        school: 'Сосю',
        province: 'Сагами',
        time: 'Конец периода Камакура – начало периода Намбокутё, первая треть XIV века',
        status: [
            {
                name: 'Сайдзё-саку (наивысшее качество). Сертификат от Хонъами Кондзюн',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Удивительный клинок легендарнейшего кузнеца Японии, яркий пример идеальной классической формы и превосходного качества, которое невозможно повторить. Поэтому Масамунэ в основном не подписывал свои клинки. Подлинность подтверждена авторитетным экспертом из старинной семьи оценщиков, Хонъами Кондзюном.',
        links: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                name: 'Масамунэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KATANA,
                name: 'Катана',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_FUJISIRO,
                name: 'Сайдзёсаку',
            },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     name: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        id: 'o_tanto_masamune',
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'О-танто Масамунэ',
        subtitle: 'それは長い間確立された',
        type: 'Вакидзаси',
        blacksmith_name: 'Горо Нюдо Масамунэ',
        blacksmith_name_japanese: '五郎入道正宗',
        school: 'Сосю',
        province: 'Сагами',
        time: 'Конец периода Камакура – начало периода Намбокутё, первая треть XIV века',
        status: [
            {
                name: 'Китё Токэн (Драгоценный Меч). Сертификат от NBTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Редчайший предмет и великолепный образец японского кузнечного искусства, произведенный великим кузнецом. Меч имеет довольно большой размер, что говорит о том, что возможно он был изготовлен для подношения в храм. Однако его вполне можно было одеть и в качестве малого меча «косигатана».',
        links: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                name: 'Горо Масамунэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                name: 'Вакидзаси',
            },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     name: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
] as IExhibit[];
