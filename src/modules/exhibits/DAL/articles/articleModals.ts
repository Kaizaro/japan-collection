import {ARTICLE_IDS} from './articleIds';

import {IArticleModal} from '@src/modules/exhibits/entities/articleModal';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articleModalIds';

export const ARTICLE_MODALS = [
    // Naginata
    {
        id: ARTICLE_MODAL_IDS.NAGINATA,
        title: 'Нагината',
        text: 'Древковое оружие с клинком средней длины, зачастую немного расширяющимся к концу.',
    },

    // Gunto
    {
        id: ARTICLE_MODAL_IDS.GUNTO,
        title: 'Гунто',
        text: 'Армейские мечи Императорской армии Японии, появившиеся после исчезновения самурайского сословия. Армейские мечи называются «син-гунто», военно-морские «кай-гунто».',
    },

    // Kosigatana
    {
        id: ARTICLE_MODAL_IDS.KOSIGATANA,
        title: 'Косигатана',
        text: 'Раннее название малого меча сёто, носящегося при доспехах.',
    },

    // Sword rating period
    {
        id: ARTICLE_MODAL_IDS.SWORD_RATING_PERIOD,
        title: 'Классификация мечей по временным периодам',
        text:
            'По времени мечи сейчас принято делить на несколько групп:\n' +
            '1. Дзёкото – «древние» мечи до 900-го года.\n' +
            '2. Кото – «старые» мечи 900-1596 годов.\n' +
            '3. Синто – «новые» мечи 1596-1780 годов.\n' +
            '4. Син-синто – «самые новые» мечи 1782-1876 годы.\n' +
            '5. Гэндайто – мечи после 1868-го года и до наших дней.\n',
    },

    // Sword rating Fujisiro
    {
        id: ARTICLE_MODAL_IDS.SWORD_RATING_FUJISIRO,
        title: 'Рейтинги мечей по Фудзисиро',
        text:
            'Ёсио Фудзисиро был братом полировщика Мацуо Фудзисиро, который имел звание «Живое Национальное Сокровище». После смерти брата, в 1935 году он выпустил книгу «Нихон Токо Дзитэн», некую энциклопедию по японским кузнецам, охватив около 1500 мастеров. В книге он создал систему оценки кузнечного мастерства: \n' +
            '1. Тю-саку – среднее качество.\n' +
            '2. Тю-дзё-саку – качество выше среднего.\n' +
            '3. Дзё-саку – высокое качество.\n' +
            '4. Дзё-дзё-саку – высочайшее качество.\n' +
            '5. Сай-дзё-саку – наивысшее качество.\n',
    },

    // Wakizashi
    {
        id: ARTICLE_MODAL_IDS.WAKIZASHI,
        title: 'Вакидзаси',
        text: 'Малый меч из пары с катаной, именуемыми «дайсё» (ссылка-модалка «дайсё-госираэ»), которые носили в эпоху Эдо (1603-1868 гг.)',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.DAISE_GOSIHARAE,
                text: '«дайсё»',
            },
        ],
    },

    // Daise gosiharae
    {
        id: ARTICLE_MODAL_IDS.DAISE_GOSIHARAE,
        title: 'Дайсё-госираэ',
        text: 'Название большого и малого меча при ношении в паре.',
    },

    // Hamon
    {
        id: ARTICLE_MODAL_IDS.HAMON,
        title: 'Хамон',
        text: 'Рисунок линии закалки.',
    },

    // Tati
    {
        id: ARTICLE_MODAL_IDS.TATI,
        title: 'Тати',
        text: 'Название основного меча, когда клинок помещен в оправу «итомаки-но-тати» со специальным подвесным креплением, при котором лезвие смотрит вниз. До эпохи Эдо практически все длинные мечи имели именно такие оправы.',
    },

    // Tanto
    {
        id: ARTICLE_MODAL_IDS.TANTO,
        title: 'Танто',
        text: 'Короткий меч. Иногда носился вместо вакидзаси в паре «дайсё-госираэ» (ссылка-модалка). Был основным предметом женщин самурайского сословия. Клинком танто вынутым из оправы производился ритуал «сэппуку» (ссылка-модалка).',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.DAISE_GOSIHARAE,
                text: '«дайсё-госираэ»',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SEPPUKU,
                text: '«сэппуку»',
            },
        ],
    },

    // Katana
    {
        id: ARTICLE_MODAL_IDS.KATANA,
        title: 'Катана',
        text: 'Название основного меча, когда клинок помещен в оправу для ношения за поясом, лезвием вверх. Подобное ношение было более удобным вариантом при обычной одежде, и стало распространяться с эпохи Эдо, когда из-за окончания войн перестали носить доспехи без необходимости.',
    },

    // Naginata
    {
        id: ARTICLE_MODAL_IDS.NAGINATA,
        title: 'Нагината',
        text: 'Японское древковое оружие, похожее на европейскую «глефу» или русскую «совню».',
    },

    // Sasimono
    {
        id: ARTICLE_MODAL_IDS.SASIMONO,
        title: 'Сасимоно',
        text: 'Флаг-вымпел укрепленный на задней части доспеха для опознания принадлежности война к определенной армии или подразделению. Могло быть не только в виде флага «сасимоно-бата», а также в виде какой-либо фигуры, перьев или украшения. Сасимоно вставляется в специальное крепление для доспеха «укэдзуцу».',
    },

    // Hinawadzu
    {
        id: ARTICLE_MODAL_IDS.HINAWADZU,
        title: 'Хинавадзю',
        text: 'Огнестрельное оружие, японский аналог аркебузы. В просторечии иногда называют «танэгасима», в честь острова где Ода Нобунага (ссылка-статья) познакомился с европейскими аркебузами во время крушения португальского корабля.',
        links: [
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Ода Нобунага',
            },
        ],
    },

    // Yari
    {
        id: ARTICLE_MODAL_IDS.YARI,
        title: 'Яри',
        text: 'Японское копьё. Имело много разных форм.',
    },

    // Kabutowari
    {
        id: ARTICLE_MODAL_IDS.KABUTOWARI,
        title: 'Кабутовари',
        text: '«Разрушитель шлемов» («кабуто» - шлем, «хати» - чаша шлема). В основном кабутовари были двух типов, в виде кинжала с крючком и в виде дубинки. До эпохи Эдо, кабутовари-кинжалом пользовались для проникновения в тело между щелями в доспехах, в те времена считается, что кончик был острым. В эпоху Эдо кабутовари полюбились полиции, в основном помощникам «окаппики». В этот исторический период функция поменялась, их носили за место «дзиттэ». Кабутовари, не имеющие режущего лезвия, удачно подходили для функции травмирования и обезвреживания преступников, при этом позволяя не наносить смертельные раны.',
    },

    // Tekkan
    {
        id: ARTICLE_MODAL_IDS.TEKKAN,
        title: 'Тэккан',
        text: 'Ударное одноручное железное тупое оружие, схожее с кабутовари, выполняющие те же функции, но имеющее форму меча. Дословный перевод: «Тэккан» - «железная труба», «тэцу-кэн», «тэтто» - «железный меч».',
    },

    // Masakari
    {
        id: ARTICLE_MODAL_IDS.MASAKARI,
        title: 'Масакари',
        text: 'Боевой топор. Наряду с самураями, масакари можно было встретить у войнов-монахов «сохэй» (ссылка-модалка).',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.SOHEY,
                text: '«сохэй»',
            },
        ],
    },

    // Otuchi
    {
        id: ARTICLE_MODAL_IDS.OTUCHI,
        title: 'Оцучи',
        text: 'Боевой молот. Использовался в для разрушения ворот и других оборонительных конструкций.',
    },

    // Tate
    {
        id: ARTICLE_MODAL_IDS.TATE,
        title: 'Татэ',
        text: 'Японский стационарный переносной щит. Рассчитан для защиты от стрел и пуль. Выстроенные в ряды щиты были основной зоной расположения стрелков.',
    },

    // Gunbai Utiwa
    {
        id: ARTICLE_MODAL_IDS.GUNBAI_UTIWA,
        title: 'Гунбай утива',
        text: 'Сигнальный жезл в виде веера.',
    },

    // Saihai
    {
        id: ARTICLE_MODAL_IDS.SAIHAI,
        title: 'Сайхай',
        text: 'Сигнальный жезл.',
    },

    // Tessen
    {
        id: ARTICLE_MODAL_IDS.TESSEN,
        title: 'Тэссэн',
        text: 'Сигнальные веера с железными, иногда частично деревянными или бамбуковыми рёбрами, которые одновременно были и боевым оружием.',
    },

    // Sasimono
    {
        id: ARTICLE_MODAL_IDS.SASIMONO,
        title: 'Сасимоно',
        text: 'Флаг-вымпел укрепленный на задней части доспеха для опознания принадлежности война к определенной армии или подразделению. Могло быть не только в виде флага «сасимоно-бата», а также в виде какой-либо фигуры, перьев или украшения. Сасимоно вставляется в специальное крепление для доспеха «укэдзуцу».',
    },

    // Sasimono
    {
        id: ARTICLE_MODAL_IDS.SASIMONO,
        title: 'Сасимоно',
        text: 'Флаг-вымпел укрепленный на задней части доспеха для опознания принадлежности война к определенной армии или подразделению. Могло быть не только в виде флага «сасимоно-бата», а также в виде какой-либо фигуры, перьев или украшения. Сасимоно вставляется в специальное крепление для доспеха «укэдзуцу».',
    },

    // Sasimono
    {
        id: ARTICLE_MODAL_IDS.SASIMONO,
        title: 'Сасимоно',
        text: 'Флаг-вымпел укрепленный на задней части доспеха для опознания принадлежности война к определенной армии или подразделению. Могло быть не только в виде флага «сасимоно-бата», а также в виде какой-либо фигуры, перьев или украшения. Сасимоно вставляется в специальное крепление для доспеха «укэдзуцу».',
    },

    // Sasimono
    {
        id: ARTICLE_MODAL_IDS.SASIMONO,
        title: 'Сасимоно',
        text: 'Флаг-вымпел укрепленный на задней части доспеха для опознания принадлежности война к определенной армии или подразделению. Могло быть не только в виде флага «сасимоно-бата», а также в виде какой-либо фигуры, перьев или украшения. Сасимоно вставляется в специальное крепление для доспеха «укэдзуцу».',
    },
] as IArticleModal[];
