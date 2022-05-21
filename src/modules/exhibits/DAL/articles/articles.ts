import {IArticle} from '@src/modules/exhibits/entities/article';
import {ARTICLE_MODAL_IDS} from '@src/modules/exhibits/DAL/articles/articleModalIds';
import {ARTICLE_IMAGES} from '@src/modules/exhibits/DAL/articles/articleImages';
import {ARTICLE_IDS} from '@src/modules/exhibits/DAL/articles/articleIds';

export const ARTICLES = [
    // Nobunaga Oda
    {
        id: ARTICLE_IDS.NOBUNAGA_ODA,
        title: 'ОДА НОБУНАГА (1534-1582)',
        description:
            'Первый из «трёх объединителей Японии». Родился в семье Ода, даймё провинции Овари. Потомок древнего рода Тайра. Был женат на дочери самого коварного даймё Японии Сайто Досана. В 1560-ом году в Битве при Окэхадзаме, в молодом возрасте разгромил армию крупнейшего феодала Имагаву Ёсимото. 25-тысячная аримя Имагавы вторглась в провинцию Овари против 3-х тысяч воинов клана Ода. Нобунага совершил молниеносную неожиданную вылазку прямо в штаб врага, где один из воинов поразил Ёсимото и отрубил ему голову. После этого войска Имагава потеряли боевой дух и отступили. Нобунага стал расширять свои владения, и с каждым разом стал захватывать всё больше земель. Япония начала становиться единой. Победил флот кланов Мори и Симадзу. Одним из важных моментов в кампании по завоеванию, стал разгром военного религиозного буддийского формирования Икко-икки под предводительством Рэннё, настоятеля монастыря Хонган-дзи. В те годы буддийское духовенство приобрело большое влияние и власть, и имело в своих рядах множество монахов-войнов «сохэй» (ссылка-модалка), представлявших большую военную силу. Финалом их поражения стал захват буддийского центра Японии, комплекса монастырей и храмов на горе Хиэй. Нобунага послал 30 000 войнов под предводительством Акэти Мицухидэ, которые разрушили и сожгли дотла около 300 построек и без пощады убили 20 000 человек. Победы Ода Нобунага были следствием его необычайного таланта военачальника, жесткости и его очень нестандартного мышления. Он был первый кто не побоялся использовать достижения западно-европейского мира. Недалеко от его владений у острова Танэгасима, потерпело крушение португальское судно, на котором оказались коробки с аркебузами. Нобунага изучил их и понял огромные преимущества огнестрельного оружия, к которому до этого японцы относились с большим сомнением. Он стал скупать европейское оружие, продававшееся в Японии и стал поддерживать производство его японских аналогов, именуемых «хинавадзю» (ссылка-модалка) в Японии. Это сыграло ключевую роль в ещё одном знаменательном событии, победой над непобедимым ранее кланом Такэда в 1575-ом году в Битве при Нагасино. Такэда Кацуёри, сын покойного великого военачальника Такэды Сингэна (ссылка-статья), атаковал войска Ода и Токугава (ссылка-статья) своей легендарной кавалерией, но стрелки Нобунаги, вооруженные хинавадзю, уничтожили вражескую кавалерию, что привело в последствии к полному исчезновению клана Такэда.Из достижений и преобразований Оды Нобунаги следует отметить несколько фактов. Он один из первых стал набирать в армию простолюдинов, что значительно увеличило численность его войск. Ценил людей за заслуги, а не за происхождение. Отменил налоги на перевозку товаров, на недвижимость у горожан, разрешил свободно открывать рынки при городах. Смерть его наступила в храме Хонно-дзи в Киото от предавшего и убившего его вассала Акэти Мицухидэ, который вскоре погибает от случайного нападения.',
        images: ARTICLE_IMAGES.ODA_NOBUNAGA,
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.THREE_UNIFIERS_JAPAN,
                text: '«трёх',
            },
            {
                route_id: ARTICLE_MODAL_IDS.THREE_UNIFIERS_JAPAN,
                text: 'объединителей',
            },
            {
                route_id: ARTICLE_MODAL_IDS.THREE_UNIFIERS_JAPAN,
                text: 'Японии»',
            },
            {
                route_id: ARTICLE_MODAL_IDS.DAIME,
                text: 'даймё',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SOHEY,
                text: '«сохэй»',
            },
            {
                route_id: ARTICLE_MODAL_IDS.HINAWADZU,
                text: '«хинавадзю»',
            },
            {
                route_id: ARTICLE_IDS.TAKEDA_SINGEN,
                text: 'Такэды Сингэна',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугава',
            },
        ],
    },

    // Toetomi Hideosi
    {
        id: ARTICLE_IDS.TOETOMI_HIDEOSI,
        title: 'ТОЁТОМИ ХИДЭЁСИ (1537-1598)',
        description:
            'Военный правитель Японии, один из «трёх объединителей Японии» в период Сэнгоку (XV-XVI в.в.). При жизни и после смерти, вплоть до наших дней почитался среди простого народа, поскольку родился в крестьянской семье у пехотинца «асигару». Обладая уникальным умом, он быстро продвинулся по службе у Оды Нобунага, начиная от носителя сандалий своего господина до даймё, и одного из главных военачальников Нобунаги. А в последствии и правителя Японии. Это неповторимый случай подобного карьерного роста за всю историю Японии. Он находил решения в самых невозможных ситуациях. Когда закончились ресурсы на постройку укреплений, он вынудил самураев жечь в помещениях по одному светильнику, собрал оставшееся сэкономленное масло и продал его купцам, тем самым собрав необходимую суммы для завершения строительства. За всего несколько дней отстроил деревянный форт, который на деле оказался всего лишь внешней декорацией, но поскольку враги этого не знали, у них отпало желание нападать на границы клана Ода. В 1582-ом году после двухмесячной осады замка Такамацу клана Мори, Хидэёси предпринял очередное нестандартное решение, пригласив для этого известного стратега Куроду Канбэя. Они построили дамбу, повернув близлежащую реку в другое русло и затопили замок, что привело к его сдаче. После смерти своего господина, Хидэёси захватил власть и получил от Императора титул Кампаку. Он продолжил дело Нобунаги по объединению Японии, и провёл несколько успешных войн по завоеванию противостоящих кланов. В 1583 году в Осака, он построил самый большой замок во всей Азии. Одним из его самых серьёзных противников был клан Ходзё, с центром в замке Одавара. В 1589 году он захватил его измором. С 1592-го года он попытался захватить Корею, но обе его военные кампании оказались в итоге неудачными. Одним из значительных его достижений был впервые созданный кадастр всех японских земель. Умер своей смертью в 1598-ом году.',
        images: ARTICLE_IMAGES.TOETOMI_HIDEOSI,
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.THREE_UNIFIERS_JAPAN,
                text: '«трёх',
            },
            {
                route_id: ARTICLE_MODAL_IDS.THREE_UNIFIERS_JAPAN,
                text: 'объединителей',
            },
            {
                route_id: ARTICLE_MODAL_IDS.THREE_UNIFIERS_JAPAN,
                text: 'Японии»',
            },
            {
                route_id: ARTICLE_MODAL_IDS.ASIGARU,
                text: '«асигару»',
            },
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Оды',
            },
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Нобунага',
            },
            {
                route_id: ARTICLE_MODAL_IDS.DAIME,
                text: 'даймё',
            },
        ],
    },

    // Tokugawa Ieyasu
    {
        id: ARTICLE_IDS.TOKUGAWA_IEYASU,
        title: 'ТОКУГАВА ИЭЯСУ (1543-1616)',
        description:
            'Родился в семье Мацудайра, правителей провинции Микава, потомок аристократического старинного рода Минамото. Его семья была под контролем рода Имагава, поэтому, когда Ода Нобунага, разгромил армию Имагава, Иэясу присоединился к Ода в единой войне. Он удачно воевал вместе с Ода, параллельно восстанавливая экономику своей провинции. В 1569-ом году на земли Токугавы вторгнулся клан Такэда. Первые годы Токугава отбивался, но постепенно армия во главе с Такэдой Сингэном стала теснить защитников Микавы, пока Сингэн неожиданно не заболел и умер. Далее Иэясу совместно с Одой Набунагой уничтожили клан Такэда. В 1582-ом году Нобунага погибает от предательства его вассала Акэти Мицухидэ, и Токугава с небольшим войском оказывается отрезанным от дороги в свою провинцию. Но командир его синоби Хаттори Хандзо тайно, удачно проводит отряд Токугавы через горы провинции Ига, одним из двух центров подготовки «воинов-теней». Акэти вскоре погибает, и Иэясу дальше уже воюет под начальством получившего власть Тоётоми Хидэёси. После смерти Хидэёси, Токугава делает попытку захватить власть, и это у него получается после важнейшей битвы в самурайской истории Японии, Битве при Сэкигахара. Военные кланы разделились на две фракции, одни на стороне Токугава, другие на стороне тех, кто продолжал быть на стороне семьи Тоётоми, под предводительством Исида Мицунари. В итоге после проигрыша, Мицунари был казнён. Однако в реальности это была борьба между Токугавой и коварным родом Мори, где голова Мицунари была отдана на откуп. Современные японские историки всячески пытаются снизить роль Мори, поскольку после революции Мэйдзи в 1868-ом году и по сей день, в правительстве Японии часто преобладают потомки именно этого рода. Страна встаёт под контроль Токугава, и Иэясу, дабы никто не претендовал на его место, постепенно уничтожает потомков, родственников и соратников Хидэёси. После успешной очередной осады замка Осака в 1615-ом году наследник Хидэёси – Тоётоми Хидэёри вместе с матерью кончает жизнь самоубийством. В 1614-ом году Иэясу издаёт указ о запрете христианства, и изгоняет всех европейцев из Японии, оставив для необходимых контактов лишь небольшую голландскую контору в порту Нагасаки. Князья, которые выступали на стороне Токугава в Битве при Сэкигахара получили доверительный статус Фудай-даймё («исконные»), а остальные – Тодзама-даймё («посторонние»).',
        images: ARTICLE_IMAGES.TOKUGAWA_IEYASU,
        linkWords: [
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Ода',
            },
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Нобунага',
            },
            {
                route_id: ARTICLE_IDS.TAKEDA_SINGEN,
                text: 'Такэдой',
            },
            {
                route_id: ARTICLE_IDS.TAKEDA_SINGEN,
                text: 'Сингэном',
            },
            {
                route_id: ARTICLE_IDS.HATORI_HANDZO,
                text: 'Хаттори',
            },
            {
                route_id: ARTICLE_IDS.HATORI_HANDZO,
                text: 'Хандзо',
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
                route_id: ARTICLE_MODAL_IDS.HAN,
                text: 'Фудай-даймё',
            },
            {
                route_id: ARTICLE_MODAL_IDS.HAN,
                text: 'Тодзама-даймё',
            },
        ],
    },

    // Sakai Clan
    {
        id: ARTICLE_IDS.SAKAI_CLAN,
        title: 'РОД САКАИ',
        description:
            'Род Сакаи возник в XIV веке в провинции Микава от потомков рода Минамото, и был вассалами рода Мацудайра (предки Токугава Иэясу). Самый известный представитель рода - 5-ый глава Сакаи, Сакаи Тадацугу (1527-1596), генерал Иэясу, который входил в «Четыре Небесных Государя» Токугава. В Битве при Митагахаре в 1573-ем году он смог отбить атаки клана Такэда. А в Битве при Нагасино в 1575-ом году он превосходно провёл ночную атаку на лагерь самого Такэда Сингэна. Есть легенда, что в 1560-ом году Сакаи Тадацугу убил кабана своим мечом, выкованным Масадзанэ из кузнечной школы Тэгай в Нара. Этот меч назвали «Иносиси-гири» или «Инокири» («Убийца Кабанов»). После установления сёгуната Токугава, передал правление сыну Сакаи Иэцугу (1564—1618), а сам принял монашество. За верную службу владения рода Сакаи постоянно увеличивались. В 1622-ом году они сформировались в Княжество Цуруока. В конце периода Эдо, потомки рода Сакаи оставили в истории след, как командиры ополчения Синсэнгуми. В 1868-ом году 11-ый глава, Сакаи Тададзуми, сражался вместе с «Северным Союзом» против правительства Мэйдзи.',
        images: ARTICLE_IMAGES.SAKAI_CLAN,
        linkWords: [
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугава',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Иэясу)',
            },
            {
                route_id: ARTICLE_MODAL_IDS.FOUR_HEAVEN_RULERS,
                text: '«Четыре',
            },
            {
                route_id: ARTICLE_MODAL_IDS.FOUR_HEAVEN_RULERS,
                text: 'Небесных',
            },
            {
                route_id: ARTICLE_MODAL_IDS.FOUR_HEAVEN_RULERS,
                text: 'Государя»',
            },
            {
                route_id: ARTICLE_IDS.TAKEDA_SINGEN,
                text: 'Такэда',
            },
            {
                route_id: ARTICLE_IDS.TAKEDA_SINGEN,
                text: 'Сингэна',
            },
            {
                route_id: ARTICLE_IDS.THREE_GREAT_SPEARS,
                text: 'Масадзанэ',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SHINSENGUMI,
                text: 'Синсэнгуми',
            },
        ],
    },

    // Hattori Handzo
    {
        id: ARTICLE_IDS.HATORI_HANDZO,
        title: 'Хаттори Хандзо (1542-1596)',
        description:
            'Хаттори Хандзо, по прозвищу «Они-но Хандзо» (Демон Хандзо), происходил из семьи синоби Хаттори, относящегося к провинции Ига, но родился в провинции Микава. О его подвигах известно благодаря генеалогии главных самураев клана Токугава «Кансэй Тёсю Сёкафу», составленной в 1812-ом году. Первой его битвой была ночная атака во время осады замка Удо в 1557 году. Ему было 16 лет, но он уже командовал семьюдесятью синоби из Ига. Хандзо служил Токугаве Иэясу. В 1562-ом году он спас жену и сына Токугавы из плена в замке Каминого, где Имагава Удзидзанэ держал их в заложниках. В 1569-ом осаждал замок Имагавы Какэгава. Доблестно сражался в битвах при Анэгаве в 1570-ом году и Митагахаре в 1572-ом. К тому времени он командовал уже 150-ю человеками. После смерти Оды Нобунаги в 1582-ом году, его господин Токугава Иэясу оказался в опасном положении, но Хандзо собрал 300 синоби из окрестностей провинций Ига и Кока, и горными тропами безопасно провёл своего господина до его родной провинции Микава. В 1584-ом году участвовал в битве при Комаки и Нагакутэ, в 1590-ом принимал участие в Третьей Осаде Одавара. Последние годы жизни он прожил монахом под именем Сайнэн, и построил буддийский храм Сайнэн-дзи в Эдо (совр. Токио), где и похоронен. В храме сейчас хранится его копьё и шлем. Его сын Масанари вместе со своими синоби продолжали охранять замок Эдо, и сейчас юго-западные ворота замка так и носят название «Ворота Хандзо».',
        images: ARTICLE_IMAGES.HATORI_HANZO,
        linkWords: [
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугаве',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Иэясу',
            },
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Оды',
            },
            {
                route_id: ARTICLE_IDS.NOBUNAGA_ODA,
                text: 'Нобунаги',
            },
        ],
    },

    // Tadakatsu Honda
    {
        id: ARTICLE_IDS.TADAKATSU_HONDA,
        title: 'Хонда Тадакацу (1548-1610)',
        description:
            'Генерал Токугавы Иэясу, и легендарный воин. Входил в число «Четырех Небесных Государей» Иэясу, и участвовал почти во всех его битвах. В Сражении при Нагасино командовал аркебузерами, которые разгромили войско клана Такэда. Тадакацу за всю свою жизнь не получил ни одного ранения. Был владельцем копья «Тонбокири».',
        images: ARTICLE_IMAGES.HONDA_TADAKATSU,
        linkWords: [
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугавы',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Иэясу',
            },
            {
                route_id: ARTICLE_MODAL_IDS.FOUR_HEAVEN_RULERS,
                text: '«Четырех',
            },
            {
                route_id: ARTICLE_MODAL_IDS.FOUR_HEAVEN_RULERS,
                text: 'Небесных',
            },
            {
                route_id: ARTICLE_MODAL_IDS.FOUR_HEAVEN_RULERS,
                text: 'Государей»',
            },
            {
                route_id: ARTICLE_IDS.THREE_GREAT_SPEARS,
                text: '«Тонбокири»',
            },
        ],
    },

    // Three great spears
    {
        id: ARTICLE_IDS.THREE_GREAT_SPEARS,
        title: 'Три Великих Копья',
        description:
            '«Тэнка-сан-мэйсо» - это три легендарных копья яри, изготовленные величайшими кузнецами Японии. «Тонбокири» («разрезатель стрекоз») был выкован кузнецом Фудзивара Масадзанэ, учеником Мурамасы. Владел копьём великий воин и полководец, Хонда Тадакацу. Копьё хранится в Музее Сидзуока в Токио. «Нихонго» («Лучшее Копьё Японии»), выкованно предположительно в Эпоху Муромати (1336–1573 г.г.). Первым владельцем считается 106-й император Огимати (1517–1593 г.г.), и изначально оно хранилось в Императорском дворце. Имя ему дал Тоётоми Хидэёси, когда оно попало к нему. Сейчас копьё хранится в Городском музее префектуры Фукуока. «Отэгинэ» («Сужающийся молоток»), его выковал в XVI веке Годзё Гисукэ из провинции Суруга, по заказу князя Юки Харусаки, правителя замка Юки в Симоса, вассала клана Ходзё. Копьё было утрачено во время бомбардировки Токио в 1945-ом году.',
        images: [ARTICLE_IMAGES.GORO_NUDO_MASAMUNE],
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.YARI,
                text: 'яри',
            },
            {
                route_id: ARTICLE_IDS.SENGO_MURAMASA_SCHOOL,
                text: 'Мурамасы',
            },
            {
                route_id: ARTICLE_IDS.TADAKATSU_HONDA,
                text: 'Хонда',
            },
            {
                route_id: ARTICLE_IDS.TADAKATSU_HONDA,
                text: 'Тадакацу',
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

    // Takeda Singen
    {
        id: ARTICLE_IDS.TAKEDA_SINGEN,
        title: 'Такэда Сингэн (1521-1573)',
        description:
            'Один из самых великих полководцев Японии, правитель провинции Каи. Победил множество соперников и значительно увеличил размер своих владений. В своей стратегии использовал наработки из китайских исторических трактатов о войне, в частности Сунь-цзы. Первоначально это ему сильно помогало, но с появлением огнестрельного оружия условия ведения войн поменялись, и подобная стратегия становилась не такой эффективной. Умер неожиданно от болезни во время военного похода. Его сын Кацуёри не обладал такими выдающимися качествами как у его отца, что в итоге привело к полному исчезновению клана Такэда.',
        images: ARTICLE_IMAGES.TAKEDA_SINGEN,
    },

    // Goro Nudo Masamune
    {
        id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
        title: 'Горо Нюдо Масамунэ',
        subtitle: '(1264-1343)',
        description:
            'Масамунэ считается самым величайшим кузнецом в Японии, работавшим в эпоху Камакура в провинции Сагами. Принадлежал к школе Сосю. Разработал неповторимую сложную технику ковки из разных по плотности сортов стали, которая делала клинок одновременно прочным и гибким. Характерной чертой клинков Масамунэ является рисунок «ниэ» («кипение»), при рассмотрении которого частицы мартенсита выглядят как «мерцающие звёзды». Большинство клинков Масамунэ не подписывал, зная, что их не возможно подделать. Многие из дошедших клинков были укорочены в эпоху Эдо, начиная с XVII века. Мечи Масамунэ были излюбленными клинками правящего рода Токугава, а меч "Хондзё Масамунэ" стал символом сёгуната Токугава, который передавали по наследству как символ власти. Традиции школы Масамунэ продолжил его сын Хикосиро Садамуне, десять учеников «Дзютэцу», а также его ученики Хиромицу и Акихиро.',
        images: ARTICLE_IMAGES.GORO_NUDO_MASAMUNE,
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.BLADE_SHORTENING,
                text: 'укорочены',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугава',
            },
            {
                route_id: ARTICLE_MODAL_IDS.HONDZE_MASAMUNE,
                text: 'Хондзё',
            },
            {
                route_id: ARTICLE_MODAL_IDS.HONDZE_MASAMUNE,
                text: 'Масамунэ',
            },
            {
                route_id: ARTICLE_IDS.HIKOSIRO_SADAMUNE,
                text: 'Хикосиро',
            },
            {
                route_id: ARTICLE_IDS.HIKOSIRO_SADAMUNE,
                text: 'Садамуне',
            },
            {
                route_id: ARTICLE_MODAL_IDS.JUTETSU,
                text: '«Дзютэцу»',
            },
        ],
    },

    // Sengo Maramasa school
    {
        id: ARTICLE_IDS.SENGO_MURAMASA_SCHOOL,
        title: 'Школа Сэнго Мурамаса',
        description:
            'Основателем школы Сэнго был Сэнго (Сэндзи) Мурамаса, родившийся предположительно в 1460-ых годах. Активный же период был в 1501-1521 годах, если судить по сохранившимся клинкам с его подписями. Всего насчитывается около восьми поколений этой школы, но значительными считаются только первые три. Основателя Сэнго называют Мурамаса Сёдай («первый»). Его сына также звали Сэнго, и его принято называть Мурамаса Нидай, работал в 1521-1555 годы. Кузнеца третьего поколения называют Сандай («третий»), период деятельности 1532-1592 годы. Японский эксперт Ёсио Фудзисиро оценил мечи первых двух поколений как Сайдзё-саку («наивысший»), а Сандай Мурамасу он оценил чуть ниже, как Тюдзё-саку («выше среднего»). Клинки Мурамаса обладают великолепными качествами, а техника ковки в школе Сэнго была новаторской для своего времени. Отличительной чертой при создании хамона зачастую было зеркальное отображение обеих сторон лезвия. Существует много легенд вокруг коллективного образа Мурамаса, часть из которых вымышлена, а часть имеет исторические подтверждения.',
        images: ARTICLE_IMAGES.GORO_NUDO_MASAMUNE,
        linkWords: [
            {
                route_id: ARTICLE_MODAL_IDS.SWORD_RATING_FUJISIRO,
                text: 'Сайдзё-саку',
            },
            {
                route_id: ARTICLE_MODAL_IDS.HAMON,
                text: 'хамона',
            },
        ],
    },

    // Hikosiro Masamune
    {
        id: ARTICLE_IDS.HIKOSIRO_SADAMUNE,
        title: 'Хикосиро Садамунэ (1298-1349 гг.)',
        description:
            'Садамунэ был родным или приёмным сыном великого кузнеца Масамунэ и не менее выдающимся кузнецом, продолжившим традиции школы Сосю в провинции Сагами. Работы Садамунэ отличаются своим особенным узором россыпи кристаллов мартенсита «ниэ» («звездное небо»), что делает его клинки различимыми с Масамунэ. Он, также как его отец, не оставлял подписи на своих клинках, поскольку их было невозможно подделать.',
        images: ARTICLE_IMAGES.GORO_NUDO_MASAMUNE,
        linkWords: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
        ],
    },

    // Legends
    // Masamune vs Muramasa
    {
        id: ARTICLE_IDS.LEGEND_MURAMASA_MASAMUNE,
        title: 'Легенда о противостоянии Масамунэ и Мурамаса',
        description:
            'Существует легенда о том, что когда кузнец Масамунэ создавал свои мечи, он читал молитвы о мире и гармонии, чтобы его клинки служили только для защиты, а не для убийства. Зачастую владелец меча Масамунэ одерживал победу, даже не вынимая его из ножен. А Мурамаса, напротив, заковывал в свои клинки проклятья и злых духов, поэтому его мечи не могут вернуться в ножны не пролив крови. Эта же легенда говорит о соревновании двух великих Мастеров, когда они воткнули в дно ручья свои мечи. Меч Мурамасы всё рассекал в набегавшем потоке воды: листья, водоросли, рыб и казалось сам солнечный свет. Клинок Масамунэ напротив, пощадил все живое. Но это не более чем красивая легенда, поскольку Масамунэ и Мурамаса создавали свои клинки в разные века.',
        images: ARTICLE_IMAGES.GORO_NUDO_MASAMUNE,
        linkWords: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ',
            },
            {
                route_id: ARTICLE_IDS.SENGO_MURAMASA_SCHOOL,
                text: 'Мурамаса,',
            },
        ],
    },

    // Demon Sword Clan Tokugawa
    {
        id: ARTICLE_IDS.LEGEND_DEMON_SWORD_CLAN_TOKUGAWA,
        title: 'Легенда о демонических клинках и проклятии рода Токугава',
        description:
            'В хрониках правящего рода Токугава «Токугава Дзикки» написано, что Токугава Иэясу считал мечи Мурамаса проклятыми. Эти заключения имеют место, потому что основаны на исторически существовавших событиях. Члены семьи Токугава не раз повреждались этими клинками, а первый его сын, Нобуясу в момент, когда был вынужден совершить сэппуку, был обезглавлен своим ассистентом мечом Мурамаса. Из-за этого возникла легенда, что Мурамаса при изготовлении своих клинков, заковывает в них демонов.',
        images: ARTICLE_IMAGES.GORO_NUDO_MASAMUNE,
        linkWords: [
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Токугава',
            },
            {
                route_id: ARTICLE_IDS.TOKUGAWA_IEYASU,
                text: 'Иэясу',
            },
            {
                route_id: ARTICLE_MODAL_IDS.SEPPUKU,
                text: 'сэппуку',
            },
        ],
    },

    // Legend about Sadamune
    {
        id: ARTICLE_IDS.LEGEND_SADAMUNE,
        title: 'Легенда о Садамунэ',
        description:
            'Масамунэ, увидев, как его сын Садамунэ, украдкой попробовал рукой температуру воды, приготовленную для закалки клинка, немедленно отсек ему кисть руки, оберегая секреты производства.',
        images: ARTICLE_IMAGES.GORO_NUDO_MASAMUNE,
        linkWords: [
            {
                route_id: ARTICLE_IDS.GORO_NUDO_MASAMUNE,
                text: 'Масамунэ,',
            },
        ],
    },
] as IArticle[];
