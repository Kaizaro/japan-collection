import {ARTICLE_IDS} from './articleIds';

import {IArticleModal} from '@src/modules/exhibits/entities/articleModal';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articles/articleModalIds';

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
        text: 'Малый меч из пары с катаной, именуемыми «дайсё», которые носили в эпоху Эдо (1603-1868 гг.)',
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
        text: 'Короткий меч. Иногда носился вместо вакидзаси в паре «дайсё-госираэ». Был основным предметом женщин самурайского сословия. Клинком танто вынутым из оправы производился ритуал «сэппуку».',
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

    // TODO Blade Shortening (maybe article)
    {
        id: ARTICLE_MODAL_IDS.BLADE_SHORTENING,
        title: 'Укорачивание клинков',
        text: 'Укорачивание клинков большого (основного меча) стало происходить после объединения Японии Токугава Иэясу. Полевые сражения в доспехах закончились. И если мечи в оправах «тати» были немного длиннее, для возможности достать до противника в случае нахождения на лошади, то в наступившую мирную эпоху Эдо в начале XVII века, такая длина меча, обрамленного в оправу «катана», заткнутого за пояс, стала неудобной в ношении с тканевой одеждой мирного времени. Укорачивание клинков осуществлялось подрезанием хвостовика и перенесением места начала рукояти путём стачивания боковых торцов до нужной точки. (по концу вырезанного дола, и обрезанной подписи, видно, где начинался хвостовик изначально).',
        links: [
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугава',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Иэясу',
            },
            {
                route_id: ARTICLE_MODAL_IDS.TATI,
                text: '«тати»',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KATANA,
                text: '«катана»',
            },
        ],
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
        text: 'Огнестрельное оружие, японский аналог аркебузы. В просторечии иногда называют «танэгасима», в честь острова где Ода Нобунага познакомился с европейскими аркебузами во время крушения португальского корабля.',
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
        text: 'Боевой топор. Наряду с самураями, масакари можно было встретить у войнов-монахов «сохэй».',
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

    // Hinawadzu
    {
        id: ARTICLE_MODAL_IDS.HINAWADZU,
        title: 'Хинавадзю',
        text: 'Огнестрельное оружие, японский аналог аркебузы. В просторечии иногда называют «танэгасима», в честь острова где Ода Нобунага познакомился с европейскими аркебузами во время крушения португальского корабля.',
        links: [
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Ода',
            },
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Нобунага',
            },
        ],
    },

    // Yari
    {
        id: ARTICLE_MODAL_IDS.YARI,
        title: 'Яри',
        text: 'Японское копьё. Имело много разных форм. ',
    },

    // Kanabo
    {
        id: ARTICLE_MODAL_IDS.KANABO,
        title: 'Канабо',
        text: 'Двуручная восьмигранная деревянная палица. Бывает разных размеров. Изготовленная из железа называется «тэцубо».',
    },
    {
        id: ARTICLE_MODAL_IDS.TEKKAN,
        title: 'Тэккан',
        text: 'Ударное одноручное железное тупое оружие, схожее с кабутовари, выполняющие те же функции, но имеющее форму меча. Дословный перевод: «Тэккан» - «железная труба», «тэцу-кэн», «тэтто» - «железный меч».',
    },
    {
        id: ARTICLE_MODAL_IDS.MASAKARI,
        title: 'Масакари',
        text: 'Боевой топор. Наряду с самураями, масакари можно было встретить у войнов-монахов «сохэй»',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.SOHEY,
                text: '"сохэй"',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.OTUCHI,
        title: 'Оцути',
        text: 'оевой молот. Использовался в для разрушения ворот и других оборонительных конструкций.',
    },
    {
        id: ARTICLE_MODAL_IDS.TATE,
        title: 'Татэ',
        text: 'Японский стационарный переносной щит. Рассчитан для защиты от стрел и пуль. Выстроенные в ряды щиты были основной зоной расположения стрелков.',
    },
    {
        id: ARTICLE_MODAL_IDS.GUNBAI_UTIWA,
        title: 'Гунбай утива',
        text: 'Сигнальный жезл в виде веера.',
    },
    {
        id: ARTICLE_MODAL_IDS.SAIHAI,
        title: 'Сайхай',
        text: 'Сигнальный жезл.',
    },
    {
        id: ARTICLE_MODAL_IDS.TESSEN,
        title: 'Тэссэн',
        text: 'Сигнальные веера с железными, иногда частично деревянными или бамбуковыми рёбрами, которые одновременно были и боевым оружием.',
    },
    {
        id: ARTICLE_MODAL_IDS.DZINTAIKO,
        title: 'Дзиндайко',
        text: 'Малый боевой барабан.',
    },
    {
        id: ARTICLE_MODAL_IDS.TAIKO,
        title: 'Тайко',
        text: 'Боевой барабан.',
    },
    {
        id: ARTICLE_MODAL_IDS.HORAGAI,
        title: 'Хорагай',
        text: 'Горн из морской раковины.',
    },
    {
        id: ARTICLE_MODAL_IDS.YUMI,
        title: 'Юми',
        text: 'Стандартный японский боевой лук из бамбука, длиной около двух метров.',
    },
    {
        id: ARTICLE_MODAL_IDS.HANKYU,
        title: 'Ханкю',
        text: 'Короткий лук длиной около метра, в примерно половину длины обычного лука. Изначально считался луком для стрельбы из паланкина. Также применялся в разных ситуациях, когда было неудобно использование большого лука, а также в арсенале синоби.',
    },
    {
        id: ARTICLE_MODAL_IDS.KAMA,
        title: 'Кама',
        text: 'Сельскохозяйственный или специально выкованный боевой серп.',
    },
    {
        id: ARTICLE_MODAL_IDS.KUSARIGAMA,
        title: 'Кусаригама',
        text: 'Кусари-кама, серп с цепью. Использовался для специальных техник нападения, блокировки оружия и частей тела, сваливания противника на землю, путем обматывания за ноги и пр.',
    },
    {
        id: ARTICLE_MODAL_IDS.MANRIKI_GUSARI,
        title: 'Манрики-гусари',
        text: 'Цепь с прикрепленными на концах грузами. Им можно блокировать меч или руку, а также наносить весьма травмирующие удары.',
    },
    {
        id: ARTICLE_MODAL_IDS.KUSARI_TIGIRIKI,
        title: 'Кусари-тигирики',
        text: 'Боевой цеп с рукоятью, где иногда цепь убирается внутрь.',
    },
    {
        id: ARTICLE_MODAL_IDS.KARAKURI_JITTE,
        title: 'Каракури-дзиттэ',
        text: 'Складное крестообразное оружие с острым клинком и боковыми блокирующими лопастями.',
    },
    {
        id: ARTICLE_MODAL_IDS.JITTE,
        title: 'Дзиттэ',
        text: '«Дзиттэ» или «дзюттэ», металлический жезл, в эпоху Эдо стал орудием полиции, символ власти.',
    },
    {
        id: ARTICLE_MODAL_IDS.KAIKEN,
        title: 'Кайкен',
        text: 'Небольшой кинжал, немного меньше чем танто. Из-за такого размера и веса, его часто любили носить женщины.',
    },
    {
        id: ARTICLE_MODAL_IDS.TEKKO,
        title: 'Тэкко',
        text: 'Кастет.',
    },
    {
        id: ARTICLE_MODAL_IDS.TEKKO_KAGI,
        title: 'Тэкко-каги',
        text: 'Железные боевые «когти».',
    },
    {
        id: ARTICLE_MODAL_IDS.FUKIA,
        title: 'Фукия',
        text: 'Духовая трубка с отравленными дротиками.',
    },
    {
        id: ARTICLE_MODAL_IDS.KUNAI,
        title: 'Кунай',
        text: 'Универсальный предмет широкого назначения. Можно было использовать как оружие ближнего боя, как метательное оружие, а также как инструмент для копания и в инженерных целях.',
    },
    {
        id: ARTICLE_MODAL_IDS.SURIKEN,
        title: 'Сюрикэн',
        text: 'Метательный железный дротик. Существовало много видов и форм. Сюрикэны с крупными отверстиями заполнялись паклей, и применялись для поджигания зданий.',
    },
    {
        id: ARTICLE_MODAL_IDS.MAKIBISI,
        title: 'Макибиси',
        text: 'Травмирующие шипы для разбрасывания на земле или полу.',
    },
    {
        id: ARTICLE_MODAL_IDS.NEKODE,
        title: 'Нэкодэ',
        text: '«Кошачьи руки (когти)».',
    },
    {
        id: ARTICLE_MODAL_IDS.KEKOZU_SEGE,
        title: 'Кёкэцу-сёгэ',
        text: '«Бегать вокруг полей и гор». Аналог кусаригамы.',
    },
    {
        id: ARTICLE_MODAL_IDS.TEKAGI,
        title: 'Сюко (тэкаги)',
        text: 'Приспособления с шипами для рук. Использовались чтобы залезать на всевозможные поверхности, а также и как оружие.',
    },
    {
        id: ARTICLE_MODAL_IDS.ASIKO,
        title: 'Асико',
        text: 'Приспособления с шипами для ног. Были разных форм для преодоления сложных вертикальных или горизонтальных поверхностей (стены, скалы, деревья, лёд).',
    },
    {
        id: ARTICLE_MODAL_IDS.KAGINAWA,
        title: 'Кагинава',
        text: 'Крюк с верёвкой.',
    },
    {
        id: ARTICLE_MODAL_IDS.SINOBI_SUZOKU,
        title: 'Cиноби-сюдзоку',
        text: 'Облачение и доспехи синоби.',
    },
    {
        id: ARTICLE_MODAL_IDS.SIKOMIZUE,
        title: 'Сикомидзуэ',
        text: 'Скрытый клинок замаскированный под палку.',
    },
    {
        id: ARTICLE_MODAL_IDS.UTINE,
        title: 'Утинэ',
        text: 'Метательный дротик.',
    },
    {
        id: ARTICLE_MODAL_IDS.GANDO,
        title: 'Гандо',
        text: 'Фонарь направленного света.',
    },
    {
        id: ARTICLE_MODAL_IDS.KUBIKIRI,
        title: 'Кубикири',
        text: 'Меч для отрезания головы.',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.KUBI_JIKEN,
                text: 'отрезания',
            },
            {
                route_id: ARTICLE_MODAL_IDS.KUBI_JIKEN,
                text: 'головы',
            },
        ],
    },
    // TODO need to know about form of blades (photo)
    {
        id: ARTICLE_MODAL_IDS.BLADE_SHAPES,
        title: 'Формы клинков',
        text: 'Самыми распространёнными формами клинков в эпоху самураев были: Хира-дзукури – гладкая поверхность без рёбер, применялась в основном на танто и реже на вакидзаси. И самая распространённая классическая форма - Синоги-дзукури, где клинок имеет ребро и заточенный под углом кончик. Также были и нестандартные формы, например, Мороха-дзукури – где от ребра по центру, грани шли на обострение с обоих сторон лезвия; Когарасу-мару, где кончик был заострен с двух сторон, и прочие варианты базовых сечений.',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.TANTO,
                text: 'танто',
            },
            {
                route_id: ARTICLE_MODAL_IDS.WAKIZASHI,
                text: 'вакидзаси',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.FOUR_HEAVEN_RULERS,
        title: 'Четыре небесных государя',
        text: 'Название произошло от параллели с «Четырьмя Небесными Царями» в буддийской иконографии. Четыре выдающихся воина. Самые верные генералы, вассалы Токугавы Иэясу. Хонда Тадакацу, Ии Наомаса, Сакакибара Ясумаса и Сакаи Тадацугу.',
        links: [
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугавы',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Иэясу',
            },
            {
                route_id: ARTICLE_IDS.TADAKATSU_HONDA,
                text: 'Хонда',
            },
            {
                route_id: ARTICLE_IDS.TADAKATSU_HONDA,
                text: 'Такамацу',
            },
            {
                route_id: ARTICLE_IDS.SAKAI_CLAN,
                text: 'Сакаи',
            },
            {
                route_id: ARTICLE_IDS.SAKAI_CLAN,
                text: 'Тадацугу',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.THREE_UNIFIERS_JAPAN,
        title: 'Три Объединителя Японии',
        text: 'Военные правители периода Сэнгоку, которые в XVI-ом веке поочерёдно объединили Японию. Ода Нобунага, Тоётоми Хидэёси, Токугава Иэясу.',
        links: [
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Ода',
            },
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Нобунага',
            },
            {
                route_id: ARTICLE_IDS.TOETOMI_HIDEOSI,
                text: 'Тоётоми',
            },
            {
                route_id: ARTICLE_IDS.TOETOMI_HIDEOSI,
                text: 'Хидэёси',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугава',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Иэясу',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.DAIME,
        title: 'Даймё',
        text: 'Князь, правитель одной или нескольких провинций («Рё» или «Хан»).',
    },
    {
        id: ARTICLE_MODAL_IDS.TEKAGI,
        title: 'Сохэй',
        text: 'Буддийский монах-воин. Чаще всего были вооружены нагинатой.',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.NAGINATA,
                text: 'нагинатой',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.ASIGARU,
        title: 'Асигару',
        text: 'Пехотинцы, сформированные из крестьян, в основном копейщики. Основная численная сила в эпоху Сэнгоку в XVI веке. За боевые заслуги могли быть приняты в класс самураев, что служило серьёзным социальным лифтом. После практически полного объединения Японии, указом Тоётоми Хидэёси, класс асигару был упразднён, а все имеющиеся асигару были автоматически переведены в самураев низшего ранга.',
        links: [
            {
                route_id: ARTICLE_IDS.TOETOMI_HIDEOSI,
                text: 'Тоётоми',
            },
            {
                route_id: ARTICLE_IDS.TOETOMI_HIDEOSI,
                text: 'Хидэёси',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.HAN,
        title: 'Хан',
        text: 'Одно из старинных названий – «Рё». Административное деление Японии эпохи самураев. Аналог современного понятия префектура или провинция. Во главе хана находился его правитель – даймё. Также были маленькие ханы «сихан», подчинявшиеся крупным. Посте установления сёгуната Эдо, ханы были поделены на три типа, в зависимости от приближённости к роду Токугава. Симпан-хан («родной») – близкие и родственные кланы к роду Токугава. Фудай-хан («исконный») - земли, где правители были на стороне Токугава в Битве при Сэкигахара. Тодзама-хан («посторонний») – все остальные владения.',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.DAIME,
                text: 'Даймё',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.JUTETSU,
        title: 'Дзютэцу',
        text: 'Десять учеников великого кузнеца Масамунэ: Тёги, Канэмицу, Сидзу Сабуро Канэудзи, Киндзю, Кунисигэ,  Куницугу, Саэмондзабуро, Саэки Норисигэ, Го Ёсихиро, Наоцуна.',
        links: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.SHINSENGUMI,
        title: 'Синсэнгуми',
        text: 'Синсэнгуми («Новое Ополчение») был специальным подразделением, набранным из самураев для поддержания порядка в конце периода Эдо в 1863-ем году под предводительством Кондо Исами. Власть рода Токугава разваливалась и недовольные кланы объединились чтобы начать войну по свержению существующего режима, что и привело к революции Мэйдзи в 1868-ом году.',
    },
    {
        id: ARTICLE_MODAL_IDS.SEPPUKU,
        title: 'Сэппуку',
        text: 'Ритуал самоубийства, дозволенный только классу самураев. Право на самоубийство было большой честью. Приговоренный к казни за преступление самурай, мог не получить право на сэппуку. Сэппуку производилось путем разрезания живота. При совершении самоубийства, полагался ассистент «кайсякунин», который после разрезания живота отрубал исполнителю голову, дабы облегчить ему страдания. Отрубленные головы помещали в ёмкости для хранения «кубиокэ». Женщины совершали сэппуку путём перерезания себе шеи.',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.KUBIOKE,
                text: '«кубиокэ»',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.KUBIOKE,
        title: 'Кубиокэ',
        text: 'Ёмкость для хранения отрубленной головы. Изготавливались из дерева. На дне в центре иногда находился шип на который насаживалась голова. В случае отсутствия шипа, для более длительного сохранения, в ёмкость насыпали соль. Также в качестве ёмкостей могли использоваться схожие по размеру деревянные ведёрки или ёмкости для ритуальных подношений «хокай». Дорогие кубиокэ покрывали лаком, помещали фамильные гербы.',
    },
    {
        id: ARTICLE_MODAL_IDS.KUBI_JIKEN,
        title: 'Куби-дзикэн',
        text: 'До объединения Японии и прекращения войн, хорошим способом заработать деньги или получить повышение по военной службе, была «охота за головами». При победе в поединке со знатным самураем, победитель отрезал ему голову, помещал в сетку, и нёс либо с собой, либо передавал своим слугам. После битвы происходила церемония «куби-дзикэн». Перед князем демонстрировали трофейные головы, помещенные в специальные ёмкости «кубиокэ», после чего получали награду.',
        links: [
            {
                route_id: ARTICLE_MODAL_IDS.KUBIOKE,
                text: '«кубиокэ»',
            },
        ],
    },
    {
        id: ARTICLE_MODAL_IDS.HONDZE_MASAMUNE,
        title: 'Хондзё Масамунэ',
        text: 'Хондзё Масамунэ – это легендарный меч, созданный кузнецом Масамунэ, символ правящего рода Токугава, передаваемый от одного правителя к другому. Он был объявлен Национальным Достоянием Японии (Кокухо) в 1939 году. Название Хондзё, возможно, произошло из-за связи этого меча с генералом Уэсуги Кэнсина - Хондзё Этидзэн-но ками Сигэнагой, который получил его в бою в XVI веке. Хондзё Сигэнага сражался с Уманосукэ. Ударом меча он расколол шлем Уманосукэ, и забрал его меч в качестве трофея. На лезвии было несколько сколов после битвы, но его все еще можно было использовать. Сигэнага хранил меч, пока его не отправили в замок Фусими, примерно в 1592–1595 годах. Когда у Сигэнаги закончились средства, и он был вынужден продать меч Тоётоми Хидэцугу, племяннику и вассалу Тоётоми Хидэёси. После перехода из рук в руки, он оказался в руках семьи Токугава. Судя по всему, Токугава Иэмаса передал Хондзё Масамунэ и 14 других мечей полицейскому участку в Мэдзиро в декабре 1945 года. Вскоре после этого, в январе 1946 года, полиция Мэдзиро передала эти мечи человеку, идентифицированному как «сержант Колди Бимор», представителя Иностранной комиссии по ликвидации AFWESPAC (армейские силы, Западная часть Тихого океана). Исследователь Джош Гейтс выезжал в Японию в поисках легендарного меча, но выяснил, что не было никаких записей о сержанте Колди Биморе. Хондзё Масамунэ, без сомнения, является самым ценным из пропавших мечей, и его текущее местонахождение остается неизвестным.',
        links: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугава',
            },
            {
                route_id: ARTICLE_IDS.TOETOMI_HIDEOSI,
                text: 'Тоётоми',
            },
            {
                route_id: ARTICLE_IDS.TOETOMI_HIDEOSI,
                text: 'Хидэёси',
            },
        ],
    },
] as IArticleModal[];
