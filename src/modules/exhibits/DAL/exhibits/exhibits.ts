import {EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY} from '@src/modules/exhibits/entities/categories/exhibitWeaponsSamuraiBladeSubCategory';
import {ExhibitCategory} from '@src/modules/exhibits/entities/categories/exhibitCategory';
import {IExhibit} from '@src/modules/exhibits/entities';
import {EXHIBIT_TRACKS} from '@src/modules/exhibits/DAL/exhibits/exhibitTracks';
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
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
            'Уникальнейший клинок одного из самых выдающихся кузнецов Японии, Горо Масамунэ, представителя школы Сосю в провинции Сагами. Выкован в эпоху Камакура в эру Каряку (1326-1329 гг.), и относится к мечам периода Кото («старые мечи»). Клинок шире обычного - «дамбира», по классификации длины - «вакидзаси». По форме относится типу «о-танто», и имеет однолезвийную форму, именуемую «хира-дзукури». На лезвии вырезано изображение самого почитаемого самураями буддийского божества Фудо-мёо. Меч обладает статусом «Мэйбуцу» (меч с именем), имеет собственное имя «Сакаи Масамунэ», поскольку хранился в семье князей Сакаи. Это подтверждено экспертизой одного из самых авторитетных экспертов Японии, доктором Фукунага Суйкэном в 1989 году. Признан клинком наивысшего качества «Сайдзёсаку».',
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
            {
                route_id: ARTICLE_MODAL_IDS.BLADE_SHAPES,
                text: '«хира-дзукури»',
            },
            {
                route_id: ARTICLE_IDS.SAKAI_CLAN,
                text: 'Сакаи',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_FUJISIRO,
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
                text: 'Вакидзаси',
            },
            {
                route_id: ARTICLE_MODAL_IDS.BLADE_SHAPES,
                text: '«хира-дзукури»',
            },
            {
                route_id: ARTICLE_IDS.SAKAI_CLAN,
                text: 'Сакаи',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_FUJISIRO,
                text: '«Сайдзёсаку»',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_MURAMASA_MASAMUNE,
                text: 'Легенда о противостоянии Мурамаса и Масамунэ',
            },
        ],
        images: EXHIBIT_IMAGES.E1,
        track: EXHIBIT_TRACKS.E1,
    },
    {
        id: 'katana_masamune',
        exhibit_number: 2,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
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
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_FUJISIRO,
                text: '«Сайдзёсаку»',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_MURAMASA_MASAMUNE,
                text: 'Легенда о противостоянии Мурамаса и Масамунэ',
            },
        ],
        images: EXHIBIT_IMAGES.E2,
        track: EXHIBIT_TRACKS.E2,
    },
    {
        id: 'o_tanto_masamune',
        exhibit_number: 3,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
                route_id: ARTICLE_IDS.SENGO_MURAMASA_SCHOOL,
                text: 'Школа Сэнго Мурамаса',
            },
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Катана',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KOSIGATANA,
                text: 'Косигатана',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_MURAMASA_MASAMUNE,
                text: 'Легенда о противостоянии Мурамаса и Масамунэ',
            },
        ],
        images: EXHIBIT_IMAGES.E3,
        track: EXHIBIT_TRACKS.E3,
    },
    {
        exhibit_number: 4,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
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
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.SENGO_MURAMASA_SCHOOL,
                text: 'Школа Сэнго Мурамаса',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_MURAMASA_MASAMUNE,
                text: 'Легенда о противостоянии Мурамаса и Масамунэ',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_DEMON_SWORD_CLAN_TOKUGAWA,
                text: 'Легенда о демонических клинках и проклятии рода Токугава',
            },
        ],
        images: EXHIBIT_IMAGES.E4,
        track: EXHIBIT_TRACKS.E4,
    },
    {
        exhibit_number: 5,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.SENGO_MURAMASA_SCHOOL,
                text: 'Школа Сэнго Мурамаса',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_MURAMASA_MASAMUNE,
                text: 'Легенда о противостоянии Мурамаса и Масамунэ',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_DEMON_SWORD_CLAN_TOKUGAWA,
                text: 'Легенда о демонических клинках и проклятии рода Токугава',
            },
        ],
        images: EXHIBIT_IMAGES.E5,
        track: EXHIBIT_TRACKS.E5,
    },
    {
        exhibit_number: 6,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
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
            'Танто, короткий клинок, выкованный кузнецом Второго поколения кузнецов Мурамаса. Сын основателя школы Сэнго был не менее талантливым, чем его отец. Качество его работы оценивается также высоко. Танто традиции Мурамаса отличаются, от большинства танто того времени чуть большей длиной. Прекрасный образец танто эпохи Кото.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
                text: 'Кото.',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.LEGEND_MURAMASA_MASAMUNE,
                text: 'Легенда о противостоянии Мурамаса и Масамунэ',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_DEMON_SWORD_CLAN_TOKUGAWA,
                text: 'Легенда о демонических клинках и проклятии рода Токугава',
            },
        ],
        images: EXHIBIT_IMAGES.E6,
        track: EXHIBIT_TRACKS.E6,
    },
    {
        exhibit_number: 7,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
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
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.SENGO_MURAMASA_SCHOOL,
                text: 'Школа Сэнго Мурамаса',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_MURAMASA_MASAMUNE,
                text: 'Легенда о противостоянии Мурамаса и Масамунэ',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_DEMON_SWORD_CLAN_TOKUGAWA,
                text: 'Легенда о демонических клинках и проклятии рода Токугава',
            },
        ],
        images: EXHIBIT_IMAGES.E7,
        track: EXHIBIT_TRACKS.E7,
    },
    {
        exhibit_number: 8,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
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
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.SENGO_MURAMASA_SCHOOL,
                text: 'Школа Сэнго Мурамаса',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_MURAMASA_MASAMUNE,
                text: 'Легенда о противостоянии Мурамаса и Масамунэ',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_DEMON_SWORD_CLAN_TOKUGAWA,
                text: 'Легенда о демонических клинках и проклятии рода Токугава',
            },
        ],
        images: EXHIBIT_IMAGES.E8,
        track: EXHIBIT_TRACKS.E8,
    },
    {
        exhibit_number: 9,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
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
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.HIKOSIRO_SADAMUNE,
                text: 'Хикосиро Садамунэ',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_SADAMUNE,
                text: 'Легенда о Садамунэ',
            },
        ],
        images: EXHIBIT_IMAGES.E9,
        track: EXHIBIT_TRACKS.E9,
    },
    {
        exhibit_number: 10,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
            'Клинок лучшего ученика и сына великого Масамунэ. Многие эксперты ставят Садамунэ на один уровень со своим отцом. Клинок большого размера, с сечением «хира-дзукури», такие обычно изготавливали для подношения богам в храм.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.HIKOSIRO_SADAMUNE,
                text: 'Хикосиро Садамунэ',
            },
            {
                route_id: ARTICLE_IDS.LEGEND_SADAMUNE,
                text: 'Легенда о Садамунэ',
            },
        ],
        images: EXHIBIT_IMAGES.E10,
        track: EXHIBIT_TRACKS.E10,
    },
    {
        exhibit_number: 11,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
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
            'Хиромаса был известным мастером в провинции Сетцу, в начале периода Эдо. Его клинки были довольно хорошего качества, а благодаря прекрасным режущим свойствам попали в рейтинговый список остроты «вадзамоно». Клинок облачён в великолепно сохранившуюся оправу для ношения при доспехах «итомаки-но-тати».',
        images: EXHIBIT_IMAGES.E11,
        track: EXHIBIT_TRACKS.E11,
    },
    {
        exhibit_number: 12,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Вакидзаси Тадамицу',
        type: 'Вакидзаси',
        blacksmith_name: 'Бисю Осафунэ Тадамицу',
        blacksmith_name_japanese: '備州長船忠光',
        school: 'Осафунэ',
        province: 'Бидзэн',
        time: 'Муромати, XVI век',
        description:
            'Кузнечная школа Осафунэ в провинции Бидзэн – это крупнейшая и одна из самых уважаемых школ Японии, существовавшая довольно давно. Не будет большим преувеличением сказать, что около трети всех шедевров раннего времени были созданы в провинции Бидзэн при активном участии мастеров школы Осафунэ. Традиция Бидзэн потерпела серьезную неудачу, когда разлив реки Ёсии почти полностью уничтожил деревни Осафунэ и Хатакэда в 1591 году.',
        images: EXHIBIT_IMAGES.E12,
        track: EXHIBIT_TRACKS.E12,
    },
    {
        exhibit_number: 13,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
        images: EXHIBIT_IMAGES.E13,
        track: EXHIBIT_TRACKS.E13,
    },
    {
        exhibit_number: 14,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
        images: EXHIBIT_IMAGES.E14,
        track: EXHIBIT_TRACKS.E14,
    },
    {
        exhibit_number: 15,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
        images: EXHIBIT_IMAGES.E15,
        track: EXHIBIT_TRACKS.E15,
    },
    {
        exhibit_number: 16,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
        images: EXHIBIT_IMAGES.E16,
        track: EXHIBIT_TRACKS.E16,
    },
    {
        exhibit_number: 17,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
        images: EXHIBIT_IMAGES.E17,
        track: EXHIBIT_TRACKS.E17,
    },
    {
        exhibit_number: 18,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
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
        images: EXHIBIT_IMAGES.E18,
        track: EXHIBIT_TRACKS.E18,
    },
    {
        exhibit_number: 19,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
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
        images: EXHIBIT_IMAGES.E19,
        track: EXHIBIT_TRACKS.E19,
    },
    {
        exhibit_number: 20,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Танто в костяной оправе',
        type: 'Танто',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Мэйдзи, вторая половина XIX в.',
        description:
            'После революции Мэйдзи в 1868-ом году, Япония открыла границы для торговли с миром. Из Европы стали приезжать купцы, привозить множество новых европейских товаров. В свою очередь, в Европу они увозили японские товары и предметы искусства. Европейцы не понимали тонкостей ценности тех или иных предметов и мечей. Они покупали то что на их взгляд было красочным и красивым. Подобные танто с красивой резьбой весьма были привлекательны, и японцы с охотностью для них стали изготавливать множество таких танто.',
        images: EXHIBIT_IMAGES.E20,
        track: EXHIBIT_TRACKS.E20,
    },
    {
        exhibit_number: 21,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
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
            'Школа Ямато произвела 5 главных школ своего направления: Ямато Хо-сё, Тайма, Тегай, Сиккаке и Сенджуин. Школа Тэгай появилась в эпохи Камакура и существовала долгое время до позднего периода Эдо. Обычно ранняя школа Тэгай не наносила подпись на хвостовике, потому что они делали мечи для вооруженных монахов.',
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
        images: EXHIBIT_IMAGES.E21,
        track: EXHIBIT_TRACKS.E21,
    },
    {
        exhibit_number: 22,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Кинжал Камикадзе',
        type: 'Кайкэн, подразделение Токко-Тай, 特攻隊',
        blacksmith_name: 'неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: '1944 – 1945 гг.',
        description:
            'Кинжал вручался командирами подразделений пилотам - смертникам после окончания обучения в знак уважения к их жертве.',
        images: EXHIBIT_IMAGES.E22,
        track: EXHIBIT_TRACKS.E22,
    },
    {
        exhibit_number: 23,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
        images: EXHIBIT_IMAGES.E23,
        track: EXHIBIT_TRACKS.E23,
    },
    {
        exhibit_number: 24,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
        images: EXHIBIT_IMAGES.E24,
        track: EXHIBIT_TRACKS.E24,
    },
    {
        exhibit_number: 25,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Кинжал замаскированный под веер',
        type: 'Кайкэн, предмет скрытого ношения',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Эдо, 1603—1868 гг. годы',
        description:
            'Замаскированный под веер, такой клинок мог стать хорошей защитой для человека, или опасным оружием в руках синоби. Клинок очень небольшой, так что его разумней было бы отнести к кайкэну.',
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
        images: EXHIBIT_IMAGES.E25,
        track: EXHIBIT_TRACKS.E25,
    },
    {
        exhibit_number: 26,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Танто-тэппо',
        type: 'Специальный предмет. Предмет скрытого ношения',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Вторая половина XIX века',
        description:
            'Маленький пистолет замаскированный под обычный кинжал танто.',
        images: EXHIBIT_IMAGES.E26,
        track: EXHIBIT_TRACKS.E26,
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
            'Японская аркебуза, также называется «хинавадзю». На стволе имеется надпись «нидзю-макибари» («обмотанное в два слоя»), что указывает на технологические особенности производства ствола: вдоль стального стержня накладывали полосу металла, гнули её с двух сторон, чтобы она облегала стержень, образовывая трубу, а сверху наматывали в два или три слоя более узкую полосу металла.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.HINAWADZU,
                text: '«хинавадзю».',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.HINAWADZU,
                text: 'Хинавадзю',
            },
        ],
        images: EXHIBIT_IMAGES.E27,
        track: EXHIBIT_TRACKS.E27,
    },
    {
        exhibit_number: 28,
        category: ExhibitCategory.BLUNT_WEAPON,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
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
        images: EXHIBIT_IMAGES.E28,
        track: EXHIBIT_TRACKS.E28,
    },
    {
        exhibit_number: 29,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.NAGINATA,
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
        images: EXHIBIT_IMAGES.E29,
        track: EXHIBIT_TRACKS.E29,
    },
    {
        exhibit_number: 30,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.YARI,
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
        images: EXHIBIT_IMAGES.E30,
        track: EXHIBIT_TRACKS.E30,
    },
    {
        exhibit_number: 31,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.YARI,
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
        images: EXHIBIT_IMAGES.E31,
        track: EXHIBIT_TRACKS.E31,
    },
    {
        exhibit_number: 32,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.YARI,
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
        images: EXHIBIT_IMAGES.E32,
        track: EXHIBIT_TRACKS.E32,
    },
    {
        exhibit_number: 33,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.YARI,
        title: 'Каригата Дзюмондзи Яри',
        type: 'Яри',
        blacksmith_name: 'Этидзэн Дайдзё Фудзивара Куницугу',
        blacksmith_name_japanese: '越前大掾藤原國次',
        school: 'Дэва Дайо Фудзивара Кунимити',
        province: 'Ямасиро, Этидзэн',
        time: 'Эпоха Эдо, 1648-1652 г.г.',
        description:
            'Название «Дзюмондзи» происходит от цифры «10» («дзю»), которая иероглифами пишется в виде креста (十), из-за этой схожести с формой и появилось название. С такой формой на конце копья можно было блокировать оружие и копья противника, также зацеплять за части доспеха. «Каригата-дзюмондзи» - это дзюмондзи яри с повернутыми краями в обратную сторону, к себе.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_MODAL_IDS.YARI,
                text: 'Яри',
            },
        ],
        images: EXHIBIT_IMAGES.E33,
        track: EXHIBIT_TRACKS.E33,
    },
    {
        exhibit_number: 34,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.YARI,
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
        images: EXHIBIT_IMAGES.E34,
        track: EXHIBIT_TRACKS.E34,
    },
    {
        exhibit_number: 35,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Содэгарами (袖搦)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Название Содэгарами дословно переводится, как «запутыватель рукавов». При задержании, острые железные шипы, торчащие в разные стороны, крепко зацеплялись за одежду преступника, и ему после этого было практически невозможно высвободиться.',
        images: EXHIBIT_IMAGES.E35,
        track: EXHIBIT_TRACKS.E35,
    },
    {
        exhibit_number: 36,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Сасумата (без шипа) (刺股)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Боевой ухват, использовался для блокирования и прижимания преступника к земле или стене. Некоторые источники утверждают, что сасумата появилась ещё в XVI веке, в период Муромати. Похожими инструментами, но из современных материалов пользуется сегодняшняя японская полиция.',
        images: EXHIBIT_IMAGES.E36,
        track: EXHIBIT_TRACKS.E36,
    },
    {
        exhibit_number: 37,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Цукубо (с крючками) (突棒)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Инструмент для задержания, им можно было, как и прижать человека, так и зацепить, по всем сторонам расположенными шипами, за одежду. Есть версия, что цукубо произошел от сельскохозяйственных граблей.',
        images: EXHIBIT_IMAGES.E37,
        track: EXHIBIT_TRACKS.E37,
    },
    {
        exhibit_number: 38,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Кумадэ (средний прямой шип) (熊手)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Кумадэ переводится как «медвежья лапа». Орудие похожее на грабли. Полиция Эдо зацепляла ими любого преступника, а длина древка в примерно два метра, позволяла это делать на довольно большой дистанции. Появилось ещё во времена полевых сражений, для стаскивания на землю всадников.',
        images: EXHIBIT_IMAGES.E38,
        track: EXHIBIT_TRACKS.E38,
    },
    {
        exhibit_number: 39,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Кумадэ (три загнутых шипа) (熊手)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Кумадэ переводится как «медвежья лапа». Орудие похожее на грабли. Полиция Эдо зацепляла ими любого преступника, а длина древка в примерно два метра, позволяла это делать на довольно большой дистанции. Появилось ещё во времена полевых сражений, для стаскивания на землю всадников.',
        images: EXHIBIT_IMAGES.E39,
        track: EXHIBIT_TRACKS.E39,
    },
    {
        exhibit_number: 40,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Цукубо (простой) (突棒)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Инструмент для задержания, им можно было, как и прижать человека, так и зацепить, по всем сторонам расположенными шипами, за одежду. Есть версия, что цукубо произошел от сельскохозяйственных граблей.',
        images: EXHIBIT_IMAGES.E40,
        track: EXHIBIT_TRACKS.E40,
    },
    {
        exhibit_number: 41,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Сасумата (с шипом) (刺股)',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Боевой ухват, использовался для блокирования и прижимания преступника к земле или стене. Некоторые источники утверждают, что сасумата появилась ещё в XVI веке, в период Муромати. Похожими инструментами, но из современных материалов пользуется сегодняшняя японская полиция.',
        images: EXHIBIT_IMAGES.E41,
        track: EXHIBIT_TRACKS.E41,
    },
    {
        exhibit_number: 42,
        category: ExhibitCategory.ARMOR,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Доспех татехаги окэгава-до Тосэй-гусоку',
        type: 'Тосэй-гусоку',
        blacksmith_name: 'Неизвестен',
        time: 'Эпоха Эдо, 1603-1630 гг.',
        description:
            'Массовый новый доспех появившийся в эпоху Сэнгоку (XV-XVI вв), когда численность армий увеличилась в разы. Требовалось быстрое и недорогое изготовление. Ещё более лёгкий, более удобный, наплечники Содэ уже. Было много вариантов кирас До: Могами-до, окэгава-до, мару-до, хотокэ-до и др. Окэгава-до, изготовленная из прикованных железных пластин могла выдерживать попадание огнестрельного оружия.',
        images: EXHIBIT_IMAGES.E42,
        track: EXHIBIT_TRACKS.E42,
    },
    {
        exhibit_number: 43,
        category: ExhibitCategory.ARMOR,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Доспех Тати-до Гусоку',
        subtitle: '(с драконом, красная шнуровка)',
        type: 'Парадные',
        blacksmith_name: 'Неизвестен',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Во второй половине эпохи Эдо, когда войн уже не было, стали изготавливать доспехи для установки в богатых резиденциях знатных самураев. В таких доспехах любили повторять элементы свойственные старинным доспехам, времён ранних эпох. Подобные доспехи напоминали о великих победах прошлого, и показывали высокий статус хозяина.',
        images: EXHIBIT_IMAGES.E43,
        track: EXHIBIT_TRACKS.E43,
    },
    {
        exhibit_number: 44,
        category: ExhibitCategory.ARMOR,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Доспех Тати-до Гусоку',
        subtitle: '(с гербом, синяя шнуровка)',
        type: 'Парадные',
        blacksmith_name: 'Неизвестен',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Во второй половине эпохи Эдо, когда войн уже не было, стали изготавливать доспехи для установки в богатых резиденциях знатных самураев. В таких доспехах любили повторять элементы свойственные старинным доспехам, времён ранних эпох. Подобные доспехи напоминали о великих победах прошлого, и показывали высокий статус хозяина. На кирасе виден родовой герб с изображением «сагари фудзи» (нисходящей глицинии), одним из популярных мотивов среди самурайских родов.',
        images: EXHIBIT_IMAGES.E44,
        track: EXHIBIT_TRACKS.E44,
    },
    {
        exhibit_number: 45,
        category: ExhibitCategory.ARMOR,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Доспех Кусари Татами Гусоку',
        subtitle: '(с гербом, синяя шнуровка)',
        type: 'Татами Гусоку. Доспех синоби',
        blacksmith_name: 'Неизвестен',
        time: 'Эпоха Эдо, 1603-1868 гг.',
        description:
            'Татами-гусоку - это вид лёгких доспехов. Их носили либо войны низких рангов, либо наоборот, самурай мог выбрать их по причине лёгкости и мобильности, их всегда можно было без труда сложить. Такие доспехи предпочитали использовать синоби, из-за специфики их деятельности. Данный доспех называется «кусари», что означает, что он кольчужный.',
        images: EXHIBIT_IMAGES.E45,
        track: EXHIBIT_TRACKS.E45,
    },
    {
        exhibit_number: 46,
        category: ExhibitCategory.CULTURE,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Свиток «Триумф Маэда Тосииэ»',
        subtitle: '前田犬千代凱旋図',
        type: 'Татами Гусоку. Доспех синоби',
        time: 'Эпоха Эдо, 1603-1868 г.г.',
        description:
            'На свитке изображен великий мастер владения копьём Маэда Тосииэ (1538-1599 гг.) на лошади, с привязанными отрезанными головами врагов. Это связано с традицией отрезать головы знатных противников, чтобы представить их после боя своему господину на церемонии осмотра трофейных голов куби-дзикэн. В 1551 году Маэда становится пажом у Оды Нобунаги, но в 1559-ом году теряет своё положение из-за того, что по собственному подозрению убивает мастера чайной церемонии Дзуами. Чтобы вернуть расположение своего хозяина, он вступает в действующую армию. И в 1560-ом году возвращает его после битвы под Окэхадзама, когда Маэда убивает одного из главных врагов своего господина, Адати Рокухёэ, и приносит ему его голову.',
        images: EXHIBIT_IMAGES.E46,
        track: EXHIBIT_TRACKS.E46,
    },
    {
        // TODO need to check and add 47 track
        exhibit_number: 47,
        category: ExhibitCategory.CULTURE,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Скульптура «Тоётоми Хидэёси»',
        blacksmith_name: 'Скульптор В.Е.Маслов, 2012 г.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.TOETOMI_HIDEOSI,
                text: 'Тоётоми Хидэёси',
            },
        ],
        // track: EXHIBIT_TRACKS.E47,
        images: EXHIBIT_IMAGES.E47,
    },
    {
        exhibit_number: 48,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Наручники Тэдзё',
        type: 'Специальные предметы, полиция Эдо',
        time: 'Период Эдо, 1603 – 1868 гг.',
        description:
            'Наручники "Тэдзё" (手鎖 – букв.с яп. "ручная цепь") использовались полицией Эдо не только при задержании преступников, но и для домашнего ареста на 30, 50 или 100 дней. Наручники опечатывались и проверялись полицией через день или раз в 5 дней в зависимости от тяжести преступления. Нарушившего печать ждало удвоение срока наказания.',
        images: EXHIBIT_IMAGES.E48,
        track: EXHIBIT_TRACKS.E48,
    },
    {
        exhibit_number: 49,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Фонарь Гандо',
        type: 'Специальные предметы, нидзя (синоби)',
        time: 'Период Эдо (1603 - 1868 гг.)',
        description:
            'Оригинальная конструкции фонаря защищала свечу от ветра и позволяла лучом направленного света освещать любой предмет, оставляя в темноте человека, держащего его в руках.',
        images: EXHIBIT_IMAGES.E49,
        track: EXHIBIT_TRACKS.E49,
    },
    {
        exhibit_number: 50,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Асико',
        type: 'Специальные предметы, нидзя (синоби)',
        time: 'Период Эдо (1603 - 1868 гг.)',
        description:
            'Это приспособление для преодоления вертикальных препятствий, которое крепилось на ноги специальными ремнями.',
        images: EXHIBIT_IMAGES.E50,
        track: EXHIBIT_TRACKS.E50,
    },
    {
        exhibit_number: 51,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Танто школы Мурамаса',
        type: 'Танто',
        blacksmith_name: 'Неизвестен',
        school: 'Сэнго Мурамаса',
        province: 'Исэ',
        time: 'Муромати, XVII век',
        description:
            'Несмотря на то, принято считать, что традиция Мурамаса это всего несколько поколений, однако в этой школе было много учеников и кузнецов. И характерные признаки школы можно встретить вплоть до новейших времён. Данный клинок представляет из себя работу ранних продолжателей, и был выкован, в XVII веке, чуть позднее первых трёх поколений, и относится к периоду ранних синто.',
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.SENGO_MURAMASA_SCHOOL,
                text: 'Школа Сэнго Мурамаса',
            },
        ],
        images: EXHIBIT_IMAGES.E51,
        track: EXHIBIT_TRACKS.E51,
    },
    {
        exhibit_number: 52,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
        title: 'Катана Фудзивара Ёсимицу',
        type: 'Катана',
        blacksmith_name: 'Фудзивара Ёсимицу (II поколение)',
        blacksmith_name_japanese: '義光',
        school: 'Осафунэ',
        province: 'Бидзэн',
        time: 'Камакура, XIV век, 1356 г.',
        description:
            'Его отец Ёсимицу I поколение, был сыном известного Кагэмицу, кузнеца традиции Бидзэн Осафунэ. Кагэмицу и его второй сын Канэмицу, младший брат Ёсимицу II-го, учились также у самого Масамунэ. Его ранние работы похожи на отца, а поздние на брата.',
        linkWords: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
        ],
        images: EXHIBIT_IMAGES.E52,
        track: EXHIBIT_TRACKS.E52,
    },
    {
        exhibit_number: 53,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Танто Кагэфую',
        type: 'Танто',
        blacksmith_name: 'Асакура Кагэфую',
        blacksmith_name_japanese: '朝倉景冬',
        province: 'Этидзэн',
        time: 'Муромати, XV век',
        status: [
            {
                text: 'Ходзон Токэн (Оберегаемый Меч) от NBTHK',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Имя Кагэфую не присутствует среди кузнецов, потому что это был известный полководец Асакура Кагэфую, увлекавшийся ковкой клинков. Такие клинки, выкованные войнами называются «Буси-ути». Кагэфую сначала занимал пост военного судьи в провинции Этидзэн, после, участвовал в войнах за сёгунов Асикага. В феврале 1490 года он работал над пересадкой сосен из Императорского дворца Сэнто в Хигасияма для Ёсимасы Асикага.',
        images: EXHIBIT_IMAGES.E53,
        track: EXHIBIT_TRACKS.E53,
    },
    {
        exhibit_number: 54,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Танто Юкимицу',
        type: 'Танто',
        blacksmith_name: 'Юкимицу',
        blacksmith_name_japanese: '行光',
        school: 'Ямасиро, Сосю',
        province: 'Сагами',
        time: 'Камакура, XIII век, 1275 год',
        status: [
            {
                text: 'Сайдзё-саку (Исключительно Высокое Качество)',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Очень «древний» клинок высочайшего качества, Фудзисиро он оценён как Сайдзё-саку. Кузнец Юкимицу обучался у Сиитого Кунимицу. Работал в городе Камакура, и позднее стал одним из основателей школы Сосю в провинции Сагами. Его иногда считают отчимом или старшим братом легендарного Масамунэ.',
        // linkWords: [
        //     {
        //         route_id: ARTICLE_MODAL_IDS,
        //         text: 'Сайдзё-саку',
        //     },
        // ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
        ],
        images: EXHIBIT_IMAGES.E54,
        track: EXHIBIT_TRACKS.E54,
    },
    {
        exhibit_number: 55,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
        title: 'Катана Нагамицу',
        type: 'Катана',
        blacksmith_name: 'Нагамицу',
        blacksmith_name_japanese: '長光',
        school: 'Осафунэ',
        province: 'Бидзэн',
        time: 'Камакура, XIII век',
        status: [
            {
                text: 'Заключение Хоъами Ниссю',
                icon: tickIcon,
            },
            {
                text: 'Сайдзё-саку (Исключительно Высокое Качество)',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Мастер Нагамицу (1222-1297 г.г.) признан одним из лучших кузнецов за всю историю Японии. Учился у своего отца Мицутада, и стал основателем школы Осафунэ, самой сильной школы провинции Бидзэн. Несколько его работ имеют статус «Национальное Сокровище». Когда принял монашество, взял имя Дзюнкэй.',
        images: EXHIBIT_IMAGES.E55,
        track: EXHIBIT_TRACKS.E55,
    },
    {
        exhibit_number: 56,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Кю-гунто Ёсицукэ',
        type: 'Вакидзаси',
        blacksmith_name: 'Ёсицукэ',
        blacksmith_name_japanese: '義助',
        province: 'Суруга',
        time: 'Камакура, XIV век, 1319-1321 г.г.',
        description:
            'Старинный клинок XIV-го века установленный в армейскую оправу образца 1875-го года. На оправе имеется фамильный герб, изображающий бабочку, символ рода «Тайра», что говорит о том, что офицер, владелец меча, происходил из очень знатного самурайского рода.',
        images: EXHIBIT_IMAGES.E56,
        track: EXHIBIT_TRACKS.E56,
    },
    {
        exhibit_number: 57,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Кубикири Хиромаса',
        type: 'Вакидзаси, Кубикири',
        blacksmith_name: 'Хиромаса',
        blacksmith_name_japanese: '廣正',
        school: 'Сосю',
        province: 'Сагами',
        time: 'Муромати, XVI век',
        description:
            'Очень редкая и необычная форма вакидзаси. Такие клинки использовали для отрезания головы поверженного противника.',
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: 'вакидзаси',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KUBIKIRI,
                text: 'отрезания',
            },
        ],
        images: EXHIBIT_IMAGES.E57,
        track: EXHIBIT_TRACKS.E57,
    },
    {
        exhibit_number: 58,
        category: ExhibitCategory.THROWABLE_WEAPON,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Сюрикэны',
        type: 'Метательное оружие',
        time: 'Эпохи Муромати – Эдо, XVI-XIX в.в.',
        description:
            'Несколько разных видов сюрикэнов. Самые распространённые –крестообразные, которые до сих пор иногда находят на полях, применялись для травмирования людей и лошадей, как синоби, так и самураями во время сражений. И более поздние - складной сюрикэн и сюрикэн в виде свастики («мандзи» - яп.).',
        images: EXHIBIT_IMAGES.E58,
        track: EXHIBIT_TRACKS.E58,
    },
    {
        exhibit_number: 59,
        category: ExhibitCategory.THROWABLE_WEAPON,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.WAKIZASHI,
        title: 'Бо-Сюрикэны в коробочке для лекарств Инро',
        type: 'Метательное оружие',
        time: 'Вторая половина эпохи Эдо, XVIII-XIX в.в.',
        description:
            'Бо-сюрикэны - прямые сюрикэны, спрятанные в коробочке для лекарств. Коробочка «инро», была неотъемлемым атрибутом одежды самурая, в инро хранили лекарства, а также она была предметом украшения костюма.',
        images: EXHIBIT_IMAGES.E59,
        track: EXHIBIT_TRACKS.E59,
    },
    {
        exhibit_number: 60,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
        title: 'Катана Рай Куницугу',
        type: 'Катана',
        blacksmith_name: 'Куницугу',
        blacksmith_name_japanese: '國次',
        school: 'Рай, Сосю',
        province: 'Ямасиро, Сагами',
        time: 'Камакура, первая половина XIV века',
        status: [
            {
                text: 'Сайдзё-саку (Наивысшее качество)',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Это катана мастера Куницугу, I-го поколения, одного из «Дзютэцу» («Десяти Учеников») легендарного кузнеца Масамунэ. Куницугу начал свой путь в школе Рай, традиции Ямасиро, но потом пошёл совершенствовать своё мастерство у Горо Масамунэ. Подлинность клинка подтверждается подписью на ножнах эксперта Хонъами Косона. Также на ножнах наклеена бумага с родовым гербом, которая говорит о том, что меч хранился в аристократической семье Намбу.',
        linkWords: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
        ],
        dictionaryLinks: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
        ],
        images: EXHIBIT_IMAGES.E60,
        track: EXHIBIT_TRACKS.E60,
    },
    {
        exhibit_number: 61,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.KATANA,
        title: 'Катана Фудзивара Кунитоми',
        type: 'Катана',
        blacksmith_name: 'Садо-но-ками Фудзивара Кунитоми',
        blacksmith_name_japanese: '國富',
        province: 'Нагато',
        time: '1640-е годы',
        status: [
            {
                text: 'Тюдзё саку',
                icon: threeStarsIcon,
            },
        ],
        description:
            'Данный клинок интересен тем, что на его хвостовике имеется надпись о проведении тамэсигири. Написано, что мастер меча Ямано Каэмон Нахахиса в 1664-ом году перерубил им два тела.',
        images: EXHIBIT_IMAGES.E61,
        track: EXHIBIT_TRACKS.E61,
    },
    {
        exhibit_number: 62,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Танто Микаса-то Хидэаки',
        type: 'Танто',
        blacksmith_name: 'Хории Хидэаки',
        blacksmith_name_japanese: '秀昭',
        province: 'Город Токио',
        time: '1931 год',
        status: [
            {
                text: 'Уникальный исторический предмет',
                icon: tickIcon,
            },
        ],
        description:
            'Во время Русско-японской войны 1904-1905 гг. броненосец «Микаса» был флагманом японского флота. Спустя время в память о победе из одного из орудий было выковано 973 коротких клинка и 229 длинных. Такие клинки называются «Микаса-то». При изготовлении были смешаны сталь от орудия, произведённой сталелитейной английской компанией «Elswick Ordinance Co», и традиционная японская сталь. Клинки были изготовлены разными мастерами, и всего на коротких клинках насчитывается более 12 вариантов надписей. Данный танто изготовлен кузнецом Хории Хидэаки (1886-1943 гг.) на оборудовании японской сталелитейной компании в городе Муроран. На клинке нанесено изречение адмирала Хэйхатиро Того перед Цусимским сражением: «Судьба Империи зависит от этого сражения».',
        images: EXHIBIT_IMAGES.E62,
        track: EXHIBIT_TRACKS.E62,
    },
    {
        exhibit_number: 63,
        category: ExhibitCategory.CULTURE,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Тобигути рода Мацуи',
        type: 'Тобигути',
        time: 'Эпоха Эдо',
        status: [
            {
                text: 'Фамильный предмет',
                icon: tickIcon,
            },
        ],
        description:
            'Данный багор тобигути имеет более сложную и богатую конструкцию, что характеризует его скорее, как боевой багор. Этот тобигути был приобретён у господина Мацуи, потомка рода Мацуи, который проживает на данный момент в доме напротив бывшего владения своих предков, руин замка Яцусиро, построенного в 1622-ом году. Род Мацуи был главными вассалами клана Хосокава. Когда Мацуи получили замок Яцусиро во владение, они приобрели княжеский статус даймё.',
        images: EXHIBIT_IMAGES.E63,
        track: EXHIBIT_TRACKS.E63,
    },
    {
        exhibit_number: 64,
        category: ExhibitCategory.BLUNT_WEAPON,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Кусари-тигирики',
        type: 'Цепное оружие',
        time: 'Эпоха Эдо',
        description:
            'Кусари-тигирики одно из излюбленных предметов синоби. Цепью с прикреплённым грузом можно было легко блокировать любое оружие, а также при закидывании обматывать конечности противника для сдерживания или опрокидывании на землю. Данный вариант имеет интересную конструкцию, когда цепь убирается внутрь рукояти.',
        images: EXHIBIT_IMAGES.E64,
        track: EXHIBIT_TRACKS.E64,
    },
    {
        exhibit_number: 65,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Сайхай',
        type: 'Жезлы',
        time: 'Эпоха Эдо',
        description:
            'Сайхай - один из видов сигнальных жезлов. При его помощи командиры отдавали распоряжения и подавали сигналы. Также он символ военачальника. Обычно при изготовлении использовался волос яка или медведя.',
        images: EXHIBIT_IMAGES.E65,
        track: EXHIBIT_TRACKS.E65,
    },
    {
        exhibit_number: 66,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Макибиси',
        type: 'Травмирующие предметы',
        time: 'Эпоха Эдо',
        description:
            'Когда синоби попадали врасплох и им приходилось убегать от врагов, они бросали на землю или пол – макибиси. При погоне преследователи на всей скорости наступали на разбросанные по плоскости макибиси, что сильно травмировало ступни и выводило человека из передвижения.',
        images: EXHIBIT_IMAGES.E66,
        track: EXHIBIT_TRACKS.E66,
    },
    {
        exhibit_number: 67,
        category: ExhibitCategory.BLADE_WEAPON,
        subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Танто в костяной оправе',
        subtitle: '(с обезьянами)',
        type: 'Танто',
        blacksmith_name: 'Неизвестен',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Эпоха Мэйдзи, вторая половина XIX в.',
        description:
            'После революции Мэйдзи в 1868-ом году, Япония открыла границы для торговли с миром. Из Европы стали приезжать купцы, привозить множество новых европейских товаров. В свою очередь, в Европу они увозили японские товары и предметы искусства. Европейцы не понимали тонкостей ценности тех или иных предметов и мечей. Они покупали то что на их взгляд было красочным и красивым. Подобные танто с красивой резьбой весьма были привлекательны, и японцы с охотностью для них стали изготавливать множество таких танто.',
        images: EXHIBIT_IMAGES.E67,
        track: EXHIBIT_TRACKS.E67,
    },
    {
        exhibit_number: 68,
        category: ExhibitCategory.CULTURE,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Гравюра «Сражение Таданобу и Какухана в горах Ёсино»',
        type: 'Укиё-э, цветная ксилография',
        blacksmith_name: 'Художник: Огата Гэкко',
        school: 'Неизвестна',
        province: 'Неизвестна',
        time: 'Около 1898 года.',
        description:
            'Талантливый Нагами Масаносукэ родился в богатой купеческой семье, но в 16 лет осиротел. Его приняла семья Огата, потомки основателя школы Римпа – знаменитого Огаты Корина. Он принял фамилию новой семьи, а за имя взял псевдоним Гэкко («лунный свет»). На Гэкко очень повлияли работы Кацусика Хокусая, а его стиль очень похож на Кикути Ёсая. На триптихе изображена битва Сато Таданобу и монаха Какухана. Сюжет взят из средневекового романа «Сказания о Ёсицунэ». Таданобу был верным соратником Минамото Ёсицунэ, и на свитке изображен момент, когда воинствующие монахи хотели захватить Ёсицунэ, и Таданобу встал на его защиту.',
        images: EXHIBIT_IMAGES.E68,
        track: EXHIBIT_TRACKS.E68,
    },
    {
        exhibit_number: 69,
        category: ExhibitCategory.TOOLS,
        // subcategory: EXHIBIT_WEAPONS_SAMURAI_BLADE_SUBCATEGORY.TANTO,
        title: 'Цуки-яри',
        type: 'Инструменты для задержания',
        time: 'Эпоха Эдо, вторая половина, XVIII-XIX в.в.',
        description:
            'Захват и одновременно оружие, используемый самурайской полицией Эдо. На древке, также как и на прочих полицейских инструментах, установлены железные полосы с шипами, которые позволяли зацепляться за одежду при задержании преступников.',
        images: EXHIBIT_IMAGES.E69,
        // TODO - need to add 69 track.
        // track: EXHIBIT_TRACKS.E69,
    },
] as IExhibit[];
