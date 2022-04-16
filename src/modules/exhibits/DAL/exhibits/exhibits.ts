import {EXHIBIT_WEAPON_SUBCATEGORY} from '@src/modules/exhibits/entities/exhibitWeaponSubCategory';
import {ExhibitCategory} from '@src/modules/exhibits/entities/exhibitCategory';
import {IExhibit} from '@src/modules/exhibits/entities';
import {EXHIBIT_IMAGES} from '@src/modules/exhibits/DAL/exhibits/exhibitImages';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articles/articleModalIds';
import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';

import threeStarsIcon from '../../../../shared/assets/graphics/icons/three_stars.png';
import tickIcon from '../../../../shared/assets/graphics/icons/active.png';

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
                text: 'Мэйбуцу (исторический меч с личным именем)',
                icon: threeStarsIcon,
            },
            {
                text: 'Сайдзё-саку (наивысшее качество). Сертификат от Фукунага Суйкэн',
                icon: tickIcon,
            },
        ],
        description:
            'Уникальнейший клинок одного из самых выдающихся кузнецов Японии, Горо Масамунэ (ссылка-кнопка), представителя школы Сосю в провинции Сагами. Выкован в эпоху Камакура в эру Каряку (1326-1329 гг.), и относится к мечам периода Кото (ссылка-модалка «классификация мечей по временным периодам») («старые мечи»). Клинок шире обычного - «дамбира», по классификации длины - «вакидзаси» (ссылка-модалка). По форме относится типу «о-танто», и имеет однолезвийную форму, именуемую «хира-дзукури» (ссылка-модалка – «формы клинков»). На лезвии вырезано изображение самого почитаемого самураями буддийского божества Фудо-мёо. Меч обладает статусом «Мэйбуцу» (меч с именем), имеет собственное имя «Сакаи Масамунэ», поскольку хранился в семье князей Сакаи (ссылка-статья). Это подтверждено экспертизой одного из самых авторитетных экспертов Японии, доктором Фукунага Суйкэном в 1989 году. Признан клинком наивысшего качества «Сайдзёсаку» (ссылка-модалка «Рейтинги мечей по Фудзисиро»).',
        buttonLink: {
            route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
        },
        linkWords: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Горо Масамунэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: 'Кото',
            },
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: '«вакидзаси»',
            },
            {
                route_id: ARTICLE_MODAL_IDS,
                text: '«хира-дзукури»',
            },
            {
                route_id: ARTICLE_IDS.SAKAI_CLAN,
                text: 'Сакаи',
            },
            {
                route_id: ARTICLE_MODAL_IDS,
                text: '«Сайдзёсаку»',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Горо Масамунэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: 'Кото',
            },
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: '«вакидзаси»',
            },
            {
                route_id: ARTICLE_MODAL_IDS,
                text: '«хира-дзукури»',
            },
            {
                route_id: ARTICLE_IDS.SAKAI_CLAN,
                text: 'Сакаи',
            },
            {
                route_id: ARTICLE_MODAL_IDS,
                text: '«Сайдзёсаку»',
            },
            {
                route_id: 'legend_muramasa_masamune',
                text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
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
                text: 'Сайдзё-саку (наивысшее качество). Сертификат от Хонъами Кондзюн',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Удивительный клинок легендарнейшего кузнеца Японии, яркий пример идеальной классической формы и превосходного качества, которое невозможно повторить. Поэтому Масамунэ в основном не подписывал свои клинки. Подлинность подтверждена авторитетным экспертом из старинной семьи оценщиков, Хонъами Кондзюном.',
        linkWords: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KATANA,
                text: 'Катана',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_FUJISIRO,
                text: 'Сайдзёсаку',
            },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
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
                text: 'Китё Токэн (Драгоценный Меч). Сертификат от NBTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Редчайший предмет и великолепный образец японского кузнечного искусства, произведенный великим кузнецом. Меч имеет довольно большой размер, что говорит о том, что возможно он был изготовлен для подношения в храм. Однако его вполне можно было одеть и в качестве малого меча «косигатана».',
        linkWords: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Горо Масамунэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: 'Вакидзаси',
            },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.KATANA,
        title: 'Катана Нидай Мурамаса',
        type: 'Катана',
        blacksmith_name: 'Нидай Мурамаса, II поколение',
        blacksmith_name_japanese: '村正',
        school: 'Сэнго Мурамаса',
        province: 'Исэ',
        time: 'Муромати, XVI век',
        status: [
            {
                text: 'Китё Токэн (Драгоценный Меч) от NBTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Меч, выкованный кузнецом Второго поколения кузнецов Мурамаса. Сын основателя школы Сэнго был не менее талантливым, чем его отец. Качество его работы оценивается также высоко. Поскольку легенды о мечах Мурамаса имеют скорее коллективный образ, мы не можем точно сказать какие именно из мечей самые зловещие.',
        linkWords: [
            // {
            //     route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
            //     text: 'Горо Масамунэ',
            // },
            // {
            //     route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
            //     text: 'Вакидзаси',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'О-танто Нидай Мурамаса',
        type: 'Вакидзаси',
        blacksmith_name: 'Нидай Мурамаса, II поколение',
        blacksmith_name_japanese: '村正',
        school: 'Сэнго Мурамаса',
        province: 'Исэ',
        time: 'Муромати, XVI век',
        status: [
            {
                text: 'Китё Токэн (Драгоценный Меч) от NBTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Малый меч, выкованный кузнецом Второго поколения кузнецов Мурамаса. Сын основателя школы Сэнго был не менее талантливым, чем его отец. Качество его работы оценивается также высоко. Данный клинок, учитывая длину, был изготовлен для ношения при доспехах, в качестве вспомогательного меча «косигатана».',
        linkWords: [
            // {
            //     route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
            //     text: 'Горо Масамунэ',
            // },
            // {
            //     route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
            //     text: 'Вакидзаси',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.TANTO,
        title: 'Танто Нидай Мурамаса',
        type: 'Танто',
        blacksmith_name: 'Нидай Мурамаса, II поколение',
        blacksmith_name_japanese: '村正',
        school: 'Сэнго Мурамаса',
        province: 'Исэ',
        time: 'Муромати, XVI век',
        status: [
            {
                text: 'Кантэйсё (Важная Работа) от NTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Танто, короткий клинок, выкованный кузнецом Второго поколения кузнецов Мурамаса. Сын основателя школы Сэнго был не менее талантливым, чем его отец. Качество его работы оценивается также высоко. Танто традиции Мурамаса отличаются, от большинства танто того времени чуть большей длиной. Прекрасный образец танто эпохи Кото (ссылка «классификация мечей по временным периодам»).',
        linkWords: [
            // {
            //     route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
            //     text: 'Горо Масамунэ',
            // },
            // {
            //     route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
            //     text: 'Вакидзаси',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.KATANA,
        title: 'Катана Сэнго Мурамаса',
        type: 'Катана',
        blacksmith_name: 'Сэнго Мурамаса, I поколение',
        blacksmith_name_japanese: '村正',
        school: 'Сэнго Мурамаса',
        province: 'Исэ',
        time: 'Муромати, XVI век',
        status: [
            {
                text: 'Косю Токубэцу Китё (Чрезвычайно драгоценный Меч) от NBTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            '«Демоническая» катана великого Сэнго, основателя школы «Сэнго Мурамаса». Редчайший и легендарный предмет. Мечей «первого» Мурамасы осталось очень немного, это очень коллекционно редкий предмет. Поражает совершенством формы и удивительным балансом. При этом имеет очень скромный и гармоничный вид, характерный для школы Мурамаса, что выдаёт в нём настоящий боевой меч.',
        linkWords: [
            // {
            //     route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
            //     text: 'Горо Масамунэ',
            // },
            // {
            //     route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
            //     text: 'Вакидзаси',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.TANTO,
        title: 'О-танто Сэнго Мурамаса',
        type: 'Танто',
        blacksmith_name: 'Сэнго Мурамаса, I поколение',
        blacksmith_name_japanese: '村正',
        school: 'Сэнго Мурамаса',
        province: 'Исэ',
        time: 'Муромати, XVI век',
        status: [
            {
                text: 'Ходзон Токэн (Оберегаемый Меч) от NBTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Искусное произведение великого Сэнго, основателя школы «Сэнго Мурамаса». Очень редкий предмет. Мечей «первого» Мурамасы осталось очень немного. Очень многие знатные самураи мечтали владеть подобной вещью.',
        linkWords: [
            // {
            //     route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
            //     text: 'Горо Масамунэ',
            // },
            // {
            //     route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
            //     text: 'Вакидзаси',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.KATANA,
        title: 'Катана Садамунэ',
        type: 'Катана',
        blacksmith_name: 'Хикосиро Садамунэ',
        blacksmith_name_japanese: '貞宗',
        school: 'Сосю',
        province: 'Сагами',
        time: 'Период раннего Намбокутё, Эпохи Муромати, первая треть XIV века',
        status: [
            {
                text: 'Сертификат от Хонъами Нарисигэ',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Клинок лучшего ученика и сына великого Масамунэ. Многие эксперты ставят Садамунэ на один уровень со своим отцом. Лезвие имеет хорошую форму, без резких изгибов, достойное продолжение традиции школы Сосю, представителем которой он являлся. Подлинность клинка подтверждается заключением Хонъами Нарисигэ из уважаемой старинной семьи экспертов по мечам.',
        linkWords: [
            // {
            //     route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
            //     text: 'Горо Масамунэ',
            // },
            // {
            //     route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
            //     text: 'Вакидзаси',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Вакидзаси Садамунэ',
        type: 'Вакидзаси',
        blacksmith_name: 'Хикосиро Садамунэ',
        blacksmith_name_japanese: '貞宗',
        school: 'Сосю',
        province: 'Сагами',
        time: 'Период раннего Намбокутё, Эпохи Муромати, первая треть XIV века',
        status: [
            {
                text: 'Китё Токэн (Драгоценный Меч) от NBTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Клинок лучшего ученика и сына великого Масамунэ. Многие эксперты ставят Садамунэ на один уровень со своим отцом. Клинок большого размера, с сечением «хира-дзукури» (ссылка-модалка - «формы клинков»), такие обычно изготавливали для подношения богам в храм.',
        linkWords: [
            // {
            //     route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
            //     text: 'Горо Масамунэ',
            // },
            // {
            //     route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
            //     text: 'Вакидзаси',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.KATANA,
        title: 'Катана в оправе тати',
        type: 'Катана',
        blacksmith_name: 'Минамото Хиромаса',
        blacksmith_name_japanese: '廣政',
        school: 'Сукэхиро',
        province: 'Сэтцу',
        time: 'Эпоха Эдо, 1681-1688 г.г.',
        status: [
            {
                text: 'Вадзамоно',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Хиромаса был известным мастером в провинции Сетцу, в начале периода Эдо. Его клинки были довольно хорошего качества, а благодаря прекрасным режущим свойствам попали в рейтинговый список остроты «вадзамоно» (ссылка-модалка). Клинок облачён в великолепно сохранившуюся оправу для ношения при доспехах «итомаки-но-тати» (ссылка-модалка «тати»).',
        linkWords: [
            // {
            //     route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
            //     text: 'Горо Масамунэ',
            // },
            // {
            //     route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
            //     text: 'Вакидзаси',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
    {
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Вакидзаси Тадамицу',
        type: 'Вакидзаси',
        blacksmith_name: 'Бисю Осафунэ Тадамицу',
        blacksmith_name_japanese: '備州長船忠光',
        school: 'Осафунэ',
        province: 'Бидзэн',
        time: 'Муромати, XVI век',
        description:
            'Кузнечная школа Осафунэ в провинции Бидзэн – это крупнейшая и одна из самых уважаемых школ Японии, существовавшая довольно давно. Не будет большим преувеличением сказать, что около трети всех шедевров раннего времени были созданы в провинции Бидзэн при активном участии мастеров школы Осафунэ. Традиция Бидзэн потерпела серьезную неудачу, когда разлив реки Ёсии почти полностью уничтожил деревни Осафунэ и Хатакэда в 1591 году.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: 'Вакидзаси',
            },
            // {
            //     route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
            //     text: 'Вакидзаси',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
    },
] as IExhibit[];
