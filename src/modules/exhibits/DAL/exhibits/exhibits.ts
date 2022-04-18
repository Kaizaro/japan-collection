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
        exhibit_number: 1,
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
                text: 'Горо',
            },
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: 'Кото',
            },
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: '«вакидзаси»',
            },
            // {
            //     route_id: ARTICLE_MODAL_IDS,
            //     text: '«хира-дзукури»',
            // },
            {
                route_id: ARTICLE_IDS.SAKAI_CLAN,
                text: 'Сакаи',
            },
            // {
            //     route_id: ARTICLE_MODAL_IDS,
            //     text: '«Сайдзёсаку»',
            // },
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
                text: 'Вакидзаси',
            },
            // {
            //     route_id: ARTICLE_MODAL_IDS,
            //     text: '«хира-дзукури»',
            // },
            {
                route_id: ARTICLE_IDS.SAKAI_CLAN,
                text: 'Сакаи',
            },
            // {
            //     route_id: ARTICLE_MODAL_IDS,
            //     text: '«Сайдзёсаку»',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        id: 'katana_masamune',
        exhibit_number: 2,
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
        buttonLink: {
            route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
        },
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Горо',
            },
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
                text: '«Сайдзёсаку»',
            },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        id: 'o_tanto_masamune',
        exhibit_number: 3,
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
        buttonLink: {
            route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
        },
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.SENGO_MARAMASA_SCHOOL,
                text: 'ШКОЛА СЭНГО МУРАМАСА',
            },
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Катана',
            },
            // {
            //     route_id: ARTICLE_MODAL_IDS,
            //     text: 'Косигатана',
            // },
            // {
            //     route_id: 'legend_muramasa_masamune',
            //     text: 'Легенда О противостоянии Мурамаса и Масамунэ',
            // },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 4,
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
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 5,
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
        exhibit_number: 6,
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
        exhibit_number: 7,
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
        exhibit_number: 8,
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
        exhibit_number: 9,
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
        exhibit_number: 10,
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
        exhibit_number: 11,
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
        exhibit_number: 12,
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
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: 'Вакидзаси',
            },
        ],
    },
    // From here links are correct (except TODO)
    {
        exhibit_number: 13,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Катана Масасигэ',
        type: 'Катана',
        blacksmith_name: 'Масасигэ',
        blacksmith_name_japanese: '正重作',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Эдо, 1782 – 1876 годы',
        description:
            'Катана второй половины эпохи Эдо, относится к мечам «син-синто» - классификация мечей по временным периодам). Клинок довольно тяжёлый и крупный, имеет светлый отблеск стали, что характерно для поздних мечей.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: '«син-синто»',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.KATANA,
                text: 'Катана',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: 'Классификация мечей по временным периодам',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 14,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Вакидзаси Киёмицу',
        type: 'Вакидзаси',
        blacksmith_name: 'Киёмицу',
        blacksmith_name_japanese: '清光',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Эдо, 1782 – 1876 годы',
        description:
            'Вакидзаси второй половины эпохи Эдо, относится к мечам «син-синто». Клинок довольно тяжёлый и крупный, имеет светлый отблеск стали, что характерно для поздних мечей.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: '«син-синто»',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: 'Вакидзаси',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: 'Классификация мечей по временным периодам',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 15,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Катана Сукэкуни',
        type: 'Катана в оправе армейского офицерского меча обр. 1938 года',
        blacksmith_name: 'Минамото Сукэкуни',
        blacksmith_name_japanese: '備前守源祐園',
        school: 'Исидо',
        province: 'Сэтцу, Бидзен',
        time: 'Начало периода Эдо, эпоха Синто-Камбун, 1661-1673 годы.',
        status: [
            {
                text: 'Рейтинг: Дзё-саку',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Сукэкуни был кузнецом школы Исидо в провинции Бидзэн, но родился в провинции Кии. Он него осталось очень немного мечей, но качество их считается довольно неплохим, Фудзисиро оценивает его как «Дзё-саку». Клинок обрамлён в армейскую оправу син-гунто, офицеров Имераторской Армии. На рукояти имеется серебряный герб рода Андо, такие гербы наносились, если владелец происходил из самурайской семьи.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: '«Дзё-саку»',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.KATANA,
                text: 'Катана',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_FUJISIRO,
                text: 'Рейтинги мечей по Фудзисиро',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 16,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Катана Кунихиро',
        type: 'Катана',
        blacksmith_name: 'Кунихиро',
        blacksmith_name_japanese: '國廣花押',
        school: 'Хорикава Кунихиро',
        province: 'Ямасиро',
        time: 'Муромати, XVI век',
        status: [
            {
                text: 'Сайдзё-саку',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Кунихиро считался великим мастером меча среди кузнецов периода Эдо. Иногда его клинки дают ощущение массивности. Они часто имеют красивую резьбу в виде изображений дракона, санскритских букв и прочего. Поскольку его мечи выполнены в разных стилях, у них нет общей характеристики.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.KATANA,
                text: 'Катана',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_FUJISIRO,
                text: 'Рейтинги мечей по Фудзисиро',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 17,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Вакидзаси Кубикири Сукэсада',
        type: 'Вакидзаси, Кубикири',
        blacksmith_name: 'Кавати-но-ками Сукэсада',
        blacksmith_name_japanese: '河内守祐定',
        school: 'Осафунэ',
        province: 'Бидзен',
        time: 'Эпоха Эдо, 1736-1741 г.г.',
        description:
            'После разлива реки Ёсии в 1591 году кузнечной традиции деревни Осафунэ был нанесён большой урон, и одним из немногих выживших мастеров был Ёдсодзаэмон-но-дзё Сукэсада, его четвёртый потомок Ёкояма Тосиро Сукэсада стоял у истоков мечей «синто» («новых мечей») традиции Осафунэ.  У него было четверо сыновей, каждый из которых работал под именем Сукэсада, и в семье одного из них родился автор настоящего меча Нидзаэмон, будущий Кавати-но-ками. Наряду со своим современником Кодзукэ-но-дайдзё Сукэсада, он считается одним из столпов этой семейной кузнечной традиции. Этот вакидзаси имеет специальную форму для отрезания головы.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: '«синто»',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: '(«новых',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: 'мечей»)',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KUBI_JIKEN,
                text: 'отрезания',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KUBI_JIKEN,
                text: 'головы',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: 'Вакидзаси',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KUBIKIRI,
                text: 'Кубикири',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KUBI_JIKEN,
                text: 'Куби-дзикэн',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: 'Классификация мечей по временным периодам',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 18,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.KATANA,
        title: 'Катана',
        type: 'Катана',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Период Эдо, вторая половина XVIII – XIX вв',
        description:
            'Неподписанный клинок называется «му-мэй» («без имени»). Но это не означает, что клинок плох, большинство ранних мастеров, и даже часто именитые кузнецы, не подписывали свои клинки.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.KATANA,
                text: 'Катана',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 19,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.TANTO,
        title: 'Танто в оправе айкути',
        type: 'Танто',
        blacksmith_name: 'Масаяcу',
        blacksmith_name_japanese: '正安',
        school: 'Михара',
        province: 'Бинго',
        time: 'Эпоха Муромати, XV век, 1469-1487 г.г.',
        status: [
            {
                text: 'Китё Токэн (Ценный Меч) от NBTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Школа Михара зародилась в провинции Бинго примерно в эпоху Сётю, 1324–1326 годы, и просуществовала до XVII века.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.TANTO,
                text: 'Танто',
            },
            // TODO need to add some modals
            // {
            //     route_id: ARTICLE_MODAL_IDS,
            //     text: 'Классификация мечей по временным периодам',
            // },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 20,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.TANTO,
        title: 'Танто в костяной оправе',
        type: 'Танто',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Мэйдзи, вторая половина XIX в.',
        description:
            'После революции Мэйдзи в 1868-ом году, Япония открыла границы для торговли с миром. Из Европы стали приезжать купцы, привозить множество новых европейских товаров. В свою очередь, в Европу они увозили японские товары и предметы искусства. Европейцы не понимали тонкостей ценности тех или иных предметов и мечей. Они покупали то что на их взгляд было красочным и красивым. Подобные танто с красивой резьбой весьма были привлекательны, и японцы с охотностью для них стали изготавливать множество таких танто.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.TANTO,
                text: 'Танто',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 21,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.TANTO,
        title: 'Танто в оправе айкути',
        type: 'Танто',
        blacksmith_name: 'Канэкиё',
        blacksmith_name_japanese: '包清',
        school: 'Тэгай',
        province: 'Ямато',
        time: 'Период Муромати, 1470-1495 годы',
        status: [
            {
                text: 'Кантэйсё (Важная Работа) от NTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Школа Ямато произвела 5 главных школ своего направления: Ямато Хо-сё, Тайма, Тегай, Сиккаке и Сенджуин. Школа Тэгай появилась в эпохи Камакура и существовала долгое время до позднего периода Эдо. Обычно ранняя школа Тэгай не наносила подпись на хвостовике, потому что они делали мечи для вооруженных монахов (ссылка-модалка – «сохэй»).',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.SOHEY,
                text: 'монахов',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.TANTO,
                text: 'Танто',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SOHEY,
                text: 'Сохэй',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 22,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.TANTO,
        title: 'Кинжал Камикадзе',
        type: 'Кайкэн, подразделение Токко-Тай, 特攻隊',
        blacksmith_name: 'неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: '1944 – 1945 гг.',
        description:
            'Кинжал вручался командирами подразделений пилотам - смертникам после окончания обучения в знак уважения к их жертве.',
        dictionaryLinks: [
            // TODO need to add kaiken modal
            {
                route_id: ARTICLE_MODAL_IDS.TANTO,
                text: 'Кайкэн',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 23,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Каракури-дзиттэ',
        type: 'Специальное оружие, предмет скрытого ношения',
        blacksmith_name: 'Куниёси',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Каракури-дзиттэ создали на основе клинка копья яри, к которому дополнительно крепилась съёмная поперечная защитная железная планка. Такой конструкцией можно было эффективно блокировать меч. И его было удобно носить в сложенном положении. Хорошее оружие для синоби. В настоящее время есть традиционные школы боевых искусств, где до сих пор практикуются техники использования этого оружия.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.YARI,
                text: 'яри',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.KARAKURI_JITTE,
                text: 'Каракури-дзиттэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.YARI,
                text: 'Яри',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 24,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Дзиттэ со скрытым клинком',
        type: 'Дзиттэ предмет скрытого ношения',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Данный дзиттэ имеет скрытый внутри клинок. Таким образом его функциональность заключалась не только в том, что этот предмет демонстрировал окружающим принадлежность человека к органам полицейской власти, но и в случае необходимости мог стать вполне опасным оружием.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.JITTE,
                text: 'Дзиттэ',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 25,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.TANTO,
        title: 'Кинжал замаскированный под веер',
        type: 'Кайкэн, предмет скрытого ношения',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Эдо, 1603—1868 гг. годы',
        description:
            'Замаскированный под веер, такой клинок мог стать хорошей защитой для человека, или опасным оружием в руках синоби. Клинок очень небольшой, так что его разумней было бы отнести к кайкэну (ссылка-модалка).',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.KAIKEN,
                text: 'кайкэну',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.KAIKEN,
                text: 'Кайкэн',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 26,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.TANTO,
        title: 'Танто-тэппо',
        type: 'Специальный предмет. Предмет скрытого ношения',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Вторая половина XIX века',
        description:
            'Маленький пистолет замаскированный под обычный кинжал танто.',
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 27,
        category: ExhibitCategory.FIREARMS,
        // subcategory: ,
        title: 'Фитильное ружьё Танэгасима',
        type: 'Аркебуза',
        blacksmith_name: 'Цуда Ёсимаса',
        blacksmith_name_japanese: '津田善正',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'XVIII – первая четверть XIX века.',
        description:
            'Японская аркебуза, также называется «хинавадзю» (ссылка-модалка) На стволе имеется надпись «нидзю-макибари» («обмотанное в два слоя»), что указывает на технологические особенности производства ствола: вдоль стального стержня накладывали полосу металла, гнули её с двух сторон, чтобы она облегала стержень, образовывая трубу, а сверху наматывали в два или три слоя более узкую полосу металла.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.HINAWADZU,
                text: '«хинавадзю»',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.HINAWADZU,
                text: 'Хинавадзю',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 28,
        category: ExhibitCategory.BLUNT_WEAPON,
        // subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Канабо',
        type: 'Палица',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'XVIII – первая половина XIX века',
        description:
            'Боевая палица самураев, по всем восьми сторонам идут ряды железных шипов. В отличие от железного варианта, эта деревянная палица весит немного, что позволяет войну с ней быстро и эффективно двигаться.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.KANABO,
                text: 'Канабо',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 29,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.NAGINATA,
        title: 'Нагината 長刀',
        type: 'Нагината',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Несмотря что клинок не подписан, мы видим вполне высококачественный предмет. Зачастую кузнецы вовсе и не подписывали свои произведения. Это предположение подтверждает довольно дорогая оправа. На ней высококачественные детали, а древко покрыта золотым декоративным лаком. До эпохи Эдо, нагината была одним из основных видов оружия самураев, а позднее, владение нагинатой стало обязательной дисциплиной для женщин самурайских родов.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.NAGINATA,
                text: 'Нагината',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 30,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.YARI,
        title: 'Оми-яри',
        type: 'Яри',
        blacksmith_name: 'Нобусигэ',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Оми-яри «очень большое копьё». Для его изготовления понадобилось много сил и большое умение. Помимо длинного клинка, копьё имеет также очень длинный хвостовик. Для владения таким копьём нужно обладать сильными атлетическими качествами, но вполне возможно, что подобные яри могли преподноситься в дар храмам.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.YARI,
                text: 'Яри',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 31,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.YARI,
        title: 'Су-яри',
        type: 'Яри',
        blacksmith_name: 'Ивами-но-ками Фудзивара Кунисукэ, I поколение',
        blacksmith_name_japanese: '石見守藤原國助',
        school: 'Кунихиро',
        province: 'Исэ',
        time: 'Эпоха Эдо, 1624-1661 г.г.',
        description:
            'Су-яри – это копьё с прямым клинком, самый распространённый вид. Различия бывали только в длине. Древко этого копья покрыто мелкими частичками перламутра, именуемого «радэн». Это очень сложная и кропотливая техника декорирования. Изготовлено кузнецом Кунисукэ, родившимся в городе Камэяма. Он учился у Кунихиро Хорикавы в Киото.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.YARI,
                text: 'Яри',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 32,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.YARI,
        title: 'Дзюмондзи - яри',
        type: 'Яри',
        blacksmith_name: 'Ивами-но-ками Фудзивара Масанао',
        blacksmith_name_japanese: '石見守藤原正直',
        school: 'Неизвестна',
        province: 'Бидзэн',
        time: 'Эпоха Эдо, 1624-1644 г.г.',
        description:
            'Фудзивара Масанао работал в провинциях Окаяма и Бидзэн, и специализировался на изготовлении копий. Название «Дзюмондзи» происходит от цифры «10» («дзю»), которая иероглифами пишется в виде креста, из-за этой схожести с формой и появилось название. С такой формой на конце копья можно было блокировать оружие и копья противника, также зацеплять за части доспеха.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.YARI,
                text: 'Яри',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 33,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.YARI,
        title: 'Каригата Дзюмондзи Яри',
        type: 'Яри',
        blacksmith_name: 'Этидзэн Дайдзё Фудзивара Куницугу',
        blacksmith_name_japanese: '越前大掾藤原國次',
        school: 'Дэва Дайо Фудзивара Кунимити',
        province: 'Ямасиро, Этидзэн',
        time: 'Эпоха Эдо, 1648-1652 г.г.',
        description:
            'Название «Дзюмондзи» происходит от цифры «10» («дзю»), которая иероглифами пишется в виде креста, из-за этой схожести с формой и появилось название. С такой формой на конце копья можно было блокировать оружие и копья противника, также зацеплять за части доспеха. «Каригата-дзюмондзи» - это дзюмондзи яри с повернутыми краями в обратную сторону, к себе.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.YARI,
                text: 'Яри',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 34,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPON_SUBCATEGORY.YARI,
        title: 'Катакама Яри',
        type: 'Яри',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Эдо, 1603-1868 г.г.',
        description:
            'Катакама-яри это редкое копьё с «Г-образной» формой. Было удобно для зацепления оружия и снятия всадников с лошадей.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.YARI,
                text: 'Яри',
            },
        ],
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 35,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Содэгарами (袖搦)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Название Содэгарами дословно переводится, как «запутыватель рукавов». При задержании, острые железные шипы, торчащие в разные стороны, крепко зацеплялись за одежду преступника, и ему после этого было практически невозможно высвободиться.',
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 36,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Сасумата (без шипа) (刺股)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Боевой ухват, использовался для блокирования и прижимания преступника к земле или стене. Некоторые источники утверждают, что сасумата появилась ещё в XVI веке, в период Муромати. Похожими инструментами, но из современных материалов пользуется сегодняшняя японская полиция.',
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 37,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Цукубо (с крючками) (突棒)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Инструмент для задержания, им можно было, как и прижать человека, так и зацепить, по всем сторонам расположенными шипами, за одежду. Есть версия, что цукубо произошел от сельскохозяйственных граблей.',
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 38,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Кумадэ (средний прямой шип) (熊手)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Кумадэ переводится как «медвежья лапа». Орудие похожее на грабли. Полиция Эдо зацепляла ими любого преступника, а длина древка в примерно два метра, позволяла это делать на довольно большой дистанции. Появилось ещё во времена полевых сражений, для стаскивания на землю всадников.',
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 39,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Кумадэ (три загнутых шипа) (熊手)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Кумадэ переводится как «медвежья лапа». Орудие похожее на грабли. Полиция Эдо зацепляла ими любого преступника, а длина древка в примерно два метра, позволяла это делать на довольно большой дистанции. Появилось ещё во времена полевых сражений, для стаскивания на землю всадников.',
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 40,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Цукубо (простой) (突棒)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Инструмент для задержания, им можно было, как и прижать человека, так и зацепить, по всем сторонам расположенными шипами, за одежду. Есть версия, что цукубо произошел от сельскохозяйственных граблей.',
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
    {
        exhibit_number: 41,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPON_SUBCATEGORY.WAKIZASHI,
        title: 'Сасумата (с шипом) (刺股)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Боевой ухват, использовался для блокирования и прижимания преступника к земле или стене. Некоторые источники утверждают, что сасумата появилась ещё в XVI веке, в период Муромати. Похожими инструментами, но из современных материалов пользуется сегодняшняя японская полиция.',
        images: [EXHIBIT_IMAGES.SAKAI_MASAMUNE],
    },
] as IExhibit[];
