var storyContent = ﻿{"inkVersion":19,"root":[["ev","str","^Начать","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["^ ",{"->":"Start"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"Start":["ev",{"CNT?":"Garage.Garage_opts.0.c-0"},"/ev",{"VAR=":"msg1_seen","re":true},"ev",{"CNT?":"Dark_alley.Dark_alley_opts.0.c-0"},"/ev",{"VAR=":"msg2_seen","re":true},{"->":"Garage"},{"#f":1}],"Garage":[{"#":"CLEAR"},"ev",{"CNT?":".^"},"out","/ev","\n","^Пустой гараж. ","<>","\n",["ev",{"CNT?":".^.^"},5,"<","/ev",{"->":".^.b","c":true},{"b":["\n",["ev",{"CNT?":"Garage"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Ноябрь отряхивает локти от пыли и подходит к воротам. Через узкие верхние окна внутрь падает яркий свет солнечного дня.",{"#":"CLASS: foo"},"\n",{"->":".^.^.^.6"},null]}],["ev",{"CNT?":"Garage"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Ноябрь хмурится, отряхивает локти от пыли и подходит к воротам. Через узкие верхние окна внутрь падает яркий свет солнечного дня.","\n",{"->":".^.^.^.6"},null]}],["ev",{"CNT?":"Garage"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Ноябрь хмуро оглядывается, пару секунд медлит. Подходит к воротам, задумчиво смотрит на них. Через узкие верхние окна внутрь падает яркий свет солнечного дня.","\n",{"->":".^.^.^.6"},null]}],["ev",{"CNT?":"Garage"},4,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Ноябрь закрывает лицо руками и стоит так пару минут.","\n",{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["\n","^ERROR","\n",{"->":".^.^.^.6"},null]}],"nop","\n","<>","^</br></br>Из кармана доносится звяканье телефона — пришло новое сообщение.","\n",{"->":"Garage.Garage_opts"},{"->":"Garage.13"},null]}],["ev",{"CNT?":".^.^"},5,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^<br><br>— Это ведь не кончится, да? — Ноябрь отряхивает локти от пыли. — Что бы я ни делал, я всё равно оказываюсь в этом чёртовом гараже. Может, тебе перестать играть? Избавь меня от этого всего.","\n",{"->":"Garage.Garage_argument_opts"},{"->":"Garage.13"},null]}],["ev",{"CNT?":".^.^"},6,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^<br><br>— Аргх! Как же это больно! Надо выбираться из этого гаража, — Ноябрь отряхивает локти от пыли и подходит к двери наружу.","\n","^Из кармана доносится звяканье телефона.","\n",{"->":"Garage.Garage_opts"},{"->":"Garage.13"},null]}],["ev",{"CNT?":".^.^"},7,">=","/ev",{"->":".^.b","c":true},{"b":["\n","^<br><br>— Аргх! Мать твою! — Ноябрь подскакивает к двери наружу и хватается за ручку.","\n","^Из кармана доносится звяканье телефона.","\n",{"->":"Garage.Garage_opts"},{"->":"Garage.13"},null]}],"nop","\n",{"Garage_opts":[["ev","str","^Прочти сообщение","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.8"},null]}],"nop","/str",{"VAR?":"msg1_seen"},{"CNT?":".^.c-0"},"==","/ev",{"*":".^.c-0","flg":5},"ev","str","^Выходи на улицу","ev",{"CNT?":".^.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.23"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.23"},null]}],"nop","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","ev",{"CNT?":"Garage"},4,"==","/ev",[{"->":".^.b","c":true},{"b":["^ ","ev","str","^Прочти сообщение","/str","/ev",{"->":"Garage.Garage_argument"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"CNT?":"Garage"},7,">=","/ev",[{"->":".^.b","c":true},{"b":["^ — Да не буду я читать чёртово сообщение! ",{"->":".^.^.^.^.^"},{"->":".^.^.^.15"},null]}],"nop","\n","ev",{"CNT?":"Garage"},4,"<","/ev",[{"->":".^.b","c":true},{"b":["\n",["ev",{"CNT?":".^.^.^.^"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Он вынимает телефон из кармана.","\n",{"->":".^.^.^.3"},null]}],["ev",{"CNT?":".^.^.^.^"},1,">","/ev",{"->":".^.b","c":true},{"b":["\n","^Он вынимает телефон из кармана, долго на него смотрит, потом снимает блокировку.","\n",{"->":".^.^.^.3"},null]}],"nop","\n",{"->":".^.^.^.23"},null]}],"nop","\n","^«Че:","\n","^Посылка слишком болтливая! Её сейчас слышат все свиньи города! Поспеши встретиться с Гаспаром, у него есть всё необходимое, чтобы её заткнуть. И не вздумай сунуться на точку, пока она отсвечивает по всему эфиру! Наведёшь свиней — я тебя живьём закопаю.","\n","^Гаспар встретит тебя у Монумента. Быстрее!»","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","ev",{"CNT?":"Garage"},4,"==","/ev",[{"->":".^.b","c":true},{"b":["^ ","ev","str","^Выходи на улицу","/str","/ev",{"->":"Garage.Garage_argument"},{"->":".^.^.^.7"},null]}],"nop","\n","^Ноябрь подтягивает лямки рюкзака и выходит в боковую дверь.","\n",{"->":"Near_garage"},{"#f":5}]}],{"#f":1}],"Garage_argument":[{"temp=":"ch"},["^Ноябрь отнимает руки от лица и, глядя на гаражные ворота, произносит:","\n","^— Нет.","\n","ev","str","^Какого чёрта…","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Он проходится по помещению, осматривает стены, потолок. Ощупывает себя, долго смотрит на свои ладони. Качает головой:","\n","^— Это просто грешно.","\n",["ev","str","ev",{"VAR?":"ch"},"out","/ev","^!","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^— Я сказал нет. Это что, какой-то эксперимент? Я вроде подопытного кролика?","\n",["ev","str","^Нет","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Не знаю","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^— А что тогда? Почему я постоянно оказываюсь в этом гараже?","\n",{"->":".^.^.^.^.^.^.g-0"},{"#f":5}],"c-1":["\n","^— То есть, ты не знаешь? Ты заставляешь меня постоянно умирать и не знаешь, что происходит?","\n",{"->":".^.^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"g-0":["ev","str","^Это игра. Компьютерная программа","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n","^— Что? Что, чёрт возьми? Игра? Я персонаж в какой-то идиотской игре?","\n",["ev","str","^Вроде того","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^— И ты мной управляешь? Прыгаешь через бочки, собираешь монетки? — он фыркает. — Боже, я, похоже, чокнулся. «Господин судья, я не виноват, мне приказывал голос в моей голове».","\n",["ev","str","^Я не в твоей голове","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Я не управляю тобой напрямую","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":".^.^.^.^.^.^.^.g-1"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.^.^.^.^.g-1"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"#f":5}],"g-1":["^— Помолчи, мне надо подумать.","\n","^За дверью вдруг слышится какая-то возня и через секунду она с грохотом проваливается внутрь.","\n","^Сквозь пыль и дым в помещение стремительно проникают несколько человек в чёрной экипировке и оружием наизготовку, слышится крик: «Мордой в пол, быстро!»","\n","^Пригнувшийся было Ноябрь распрямляется и показывает средний палец. Ближайший к нему спецназовец делает два шага и с ходу бьёт его прикладом в голову.","\n","^Вспышка.","\n","ev","str","^Заново","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["^ ",{"->":"Start"},"\n",{"#f":5}],"#f":5}]}],{"#f":1}],"Garage_argument_opts":[["ev","str","^Будут и другие игроки","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Можно пройти игру до конца","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^— Боже… — Ноябрь трёт глаза. — Я узнал, что такое ад. Ладно, будь по твоему. Что мне делать?","\n",{"->":".^.^.a"},{"#f":5}],"c-1":["\n","^— А что там в конце? Принцесса в замке? Финальный босс? Чудесное освобождение? Бред, — Ноябрь трёт глаза. — Ладно, как будто у меня есть выбор. Что мне делать?","\n",{"->":".^.^.a"},{"#f":5}],"a":["ev","str","^Проверь рюкзак","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Проверь карманы","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Кто такие ","ev",{"CNT?":".^.c-3"},"/ev",[{"->":".^.b","c":true},{"b":["^ Че, Гаспар и Найма",{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["^Че и Гаспар",{"->":".^.^.^.20"},null]}],"nop","^?","/str","/ev",{"*":".^.c-4","flg":20},"ev","choiceCnt",0,"==","/ev",{"*":".^.c-5","flg":25},{"c-2":["\n","^Он стряхивает рюкзак с плеч, аккуратно расстёгивает молнию замка и отворачивает клапан. Его лицо освещается жёлтым светом, исходящим от содержимого рюкзака. Он поджимает губы.","\n",["ev","str","^Что там?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Вздрогнув, он выходит из оцепенения, резко застёгивает рюкзак и набрасывает за спину:","\n","^— Доведёшь меня до конца — узнаешь.","\n",["ev","str","^Серьёзно? Вот так?","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^— Видишь, ты не единственный, кто здесь играет. Что дальше?","ev",{"CNT?":".^.^.^.^.^.^.c-3"},{"CNT?":".^.^.^.^.^.^.c-4"},"&&","/ev",[{"->":".^.b","c":true},{"b":["^ — он вдруг спохватывается. — Я здесь слишком долго!",{"->":".^.^.^.8"},null]}],"nop","\n",{"->":".^.^.^.^.^.^"},{"->":".^.^.^.^.^.^.^.b"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-3":["\n","^Он хлопает себя по карманам штанов, куртки и, расстёгнув молнию кармана на рукаве, вынимает из него записку, разворачивает её:","\n","^«Ноябрь, ищи по городу графитти со свиньями — они значат, что рядом можно укрыться и перевести дух. Целую, Найма».","\n","^— Хм, Найма? — он прячет записку назад в карман на рукаве","ev",{"CNT?":".^.^.c-2"},{"CNT?":".^.^.c-4"},"&&","/ev",[{"->":".^.b","c":true},{"b":["^ и вдруг спохватывается. — Я здесь слишком долго!",{"->":".^.^.^.13"},null]}],[{"->":".^.b"},{"b":["^.",{"->":".^.^.^.13"},null]}],"nop","\n",{"->":".^.^"},{"->":".^.^.^.b"},{"#f":5}],"c-4":["\n","^— Я знаю не больше твоего. Очевидно, они не те, кто пытается меня убить. Кто бы они ни были, без их помощи мне до финала, похоже, не добраться","ev",{"CNT?":".^.^.c-2"},{"CNT?":".^.^.c-3"},"&&","/ev",[{"->":".^.b","c":true},{"b":["^, — он вдруг спохватывается. — Я здесь слишком долго!",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["^.",{"->":".^.^.^.9"},null]}],"nop","\n",{"->":".^.^"},{"->":".^.^.^.b"},{"#f":5}],"c-5":[{"->":".^.^.^.b"},"\n",{"->":".^.^.^.b"},{"#f":5}],"#f":5}],"b":["^За дверью слышится какая-то возня и через секунду она с грохотом проваливается внутрь.","\n","^Сквозь пыль и дым в помещение стремительно проникают несколько человек в чёрной экипировке и оружием наизготовку, слышится всё тот же крик: «Мордой в пол, быстро!»","\n","^Ноябрь бросается на ближайшего спецназовца, подныривает под приклад, нацеленный ему в голову, и подножкой сваливает бойца на пол.","\n","^Тесное пространство озаряют частые вспышки выстрелов.","\n","ev","str","^Заново","/str","/ev",{"*":".^.c-6","flg":20},{"c-6":["^ ",{"->":"Start"},"\n",{"#f":5}],"#f":5}]}],{"#f":1}],"#f":1}],"Near_garage":["^Улица, залитая солнечным светом. Жаркие блики от припаркованных с обеих сторон машин. Прогорклый запах фастфуда.","\n","^Истошная трель велосипедного звонка совсем рядом.","\n",{"->":".^.Near_garage_opts"},{"Near_garage_opts":[["ev","str","^Отскочи в сторону","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ (!)",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.8"},null]}],"nop","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Оглянись на звонок","ev",{"CNT?":".^.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.20"},null]}],"nop","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",["ev",{"CNT?":"Garage"},6,">=",{"CNT?":".^.^"},1,">","&&","/ev",{"->":".^.b","c":true},{"b":["\n","^— Тебе нравится, когда я умираю, да? Нет уж, я лучше сделаю по-другому.","\n",{"->":".^.^.^.^.c-1"},{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["\n","^Ноябрь отпрыгивает в промежуток между стоящими у обочины машинами и оказывется на проезжей части. Белый фургон не успевает затормозить и на полном ходу сбивает его.","\n","^Вспышка.","\n","ev","str","^Заново","/str","/ev",{"*":".^.c-0","flg":4},{"->":".^.^.^.3"},{"c-0":["^ ",{"->":"Start"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":5}],"c-1":["\n",["ev",{"CNT?":"Garage"},6,"<","/ev",{"->":".^.b","c":true},{"b":["\n","^Не двигаясь с места, Ноябрь поворачивается в сторону звонка. Велосипедист, визжа тормозами, виляет в сторону и, процарапав несколько машин у обочины, врезается в столб, падает.","\n","^«Ты что творишь, придурок!» — восклицает он, сев на асфальте.","\n","ev","str","^Покажи ему средний палец и уходи","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.13"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.13"},null]}],"nop","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Просто беги на другую сторону улицы","ev",{"CNT?":".^.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.25"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.25"},null]}],"nop","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.5"},{"c-0":["\n","^Не обернувшись, Ноябрь отмахивается от велосипедиста недвусмысленным жестом и, пропустив белый фургон, перебегает проезжую часть, где юркает в тёмный проулок. ",{"->":"Dark_alley"},"\n",{"#f":5}],"c-1":["\n","^«Эй, стой, я с тобой говорю!» — раздаётся за спиной, когда Ноябрь, пропустив белый фургон, перебегает проезжую часть и юркает в тёмный проулок. ",{"->":"Dark_alley"},"\n",{"#f":5}]}]}],["ev",{"CNT?":"Garage"},6,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Ноябрь поворачивается в сторону звонка и делает шаг назад. Велосипедист, едва не задев его, проносится мимо и бросает за спину: «Придурок!»","\n","^К проезжей части. Пропустить белый фургон. На другую сторону в тёмный проулок. ",{"->":"Dark_alley"},"\n",{"->":".^.^.^.5"},null]}],["ev",{"CNT?":"Garage"},7,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Ноябрь отступает на шаг, заносит ногу и, когда велосипедист проносится мимо, с силой толкает его. Тот виляет в сторону, врезается в машину у обочины и перелетает через капот на проезжую часть. Прямо под колёса белого фургона.","\n","^«Сам придурок», — бормочет Ноябрь, перебегая на другую сторону и ныряя в тёмный проулок. ",{"->":"Dark_alley"},"\n",{"->":".^.^.^.5"},null]}],["ev",{"CNT?":"Garage"},7,">","/ev",{"->":".^.b","c":true},{"b":["\n","^Ноябрь равнодушно наблюдает падение велосипедиста, затем подходит к проезжей части, пропускает белый фургон, перебегает на другую сторону и юркает в тёмный проулок. ",{"->":"Dark_alley"},"\n",{"->":".^.^.^.5"},null]}],"nop","\n",{"#f":5}]}],{"#f":1}],"#f":1}],"Dark_alley":["^После яркого солнца глаза не сразу привыкают к тени. Лавируя между мусорными баками и строительными лесами, он бежит по проулку к другому выходу. Где-то воет сирена.","\n","^Из кармана опять доносится звяканье.","\n",{"->":".^.Dark_alley_opts"},{"Dark_alley_opts":[["ev","str","^Прочти сообщение","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.8"},null]}],"nop","/str",{"VAR?":"msg2_seen"},{"CNT?":".^.c-0"},"==","/ev",{"*":".^.c-0","flg":5},"ev","str","^Беги дальше","ev",{"CNT?":".^.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.23"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.23"},null]}],"nop","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^«Гаспар:","\n","^Чувак, уходи с улиц! Если даже я вижу, где ты сейчас находишься, то свиньи и подавно тебя пасут. Давай под землю — рядом станция Северной ветки. Проедешь по ней до Кольцевой и там уже до Монумента. Я встречу».","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^Между кирпичных стен уже видно людную улицу.","\n","^Но перед выездом с визгом останавливается чёрная машина. В проулок брызжет синий свет проблесковых маячков, затихает вой сирены.","\n","^Человек в форме выскакивает из машины, быстро приближается, в руках — жёлтое рыло тазера. В глазах — азартный блеск. Для него это спорт.","\n","^— Упал на землю! Живо!","\n",["ev","str","^Подчинись","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ (!)",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.8"},null]}],"nop","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Сопротивляйся","ev",{"CNT?":".^.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.20"},null]}],"nop","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",["ev",{"CNT?":"Garage"},6,">=",{"CNT?":".^.^"},1,">","&&","/ev",{"->":".^.b","c":true},{"b":["\n",["ev",{"VAR?":"resist_to_surrender"},"!","/ev",{"->":".^.b","c":true},{"b":["\n","^— То есть, «подчинись»!? Я же уже это проходил, это не тот вариант!","\n","^— Живее! Мордой в землю!","\n","^— Пошёл на хер! Я не с тобой разговариваю!","\n","^Треск тазера. Вспышка.","\n","ev",1,"/ev",{"VAR=":"resist_to_surrender","re":true},"ev","str","^Заново","/str","/ev",{"*":".^.c-0","flg":4},{"->":".^.^.^.3"},{"c-0":["^ ",{"->":"Start"},"\n",{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n","^— Это не тот вариант, — шипит Ноябрь, поднимая руки и обращаясь к полицейскому:","\n",{"->":".^.^.^.^.^.^.c-1"},{"->":".^.^.^.3"},null]}],"nop","\n",{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["\n","^— Хорошо-хорошо, офицер, — Ноябрь медленно опускается на корточки.","\n","^— Живее! Мордой в землю!","\n","^— Да иди ты. Сам ложись в эту гря…","\n","^Треск тазера. Вспышка.","\n","ev","str","^Заново","/str","/ev",{"*":".^.c-0","flg":4},{"->":".^.^.^.3"},{"c-0":["^ ",{"->":"Start"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":5}],"c-1":["\n","^— Офицер, это какая-то ошибка.","\n","^— Ты что, глухой? Я сказал на землю!","\n","^Ноябрь опускается, делает вид, что подчиняется и с низкого старта бросается вперёд. Над головой проносится стрёкот тазерных проводов. Мимо.","\n","^Полицейский сгибается пополам от удара в солнечное сплетение, пытается вдохнуть. Следующий удар — с размаху в челюсть. Готов.","\n",["ev",{"CNT?":"Garage"},6,">=",{"CNT?":".^.b.c-0"},"!","&&","/ev",{"->":".^.b","c":true},{"b":["\n","^Ноябрь кивает на бесчуственного копа:","\n","^— Его тазер. Может пригодиться.","\n","ev","str","^Подбери тазер*","/str","/ev",{"*":".^.c-0","flg":4},{"->":".^.^.^.11"},{"c-0":["\n","^Он переворачивает полицейского, расжимает ему пальцы и забирает чёрный с жёлтыми полосами тазер. Отстёгивает использованный картридж с бахромой проводов, оголяя контакты, пару раз стрекочет и, удовлетворённый, прячет оружие в карман.","\n",["ev","str","^Уходи из проулка","ev",{"CNT?":".^.^.^.^.^.13.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.8"},null]}],"nop","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"Crowded_street"},"\n",{"#f":5}]}],{"#f":5}]}]}],["ev",{"CNT?":".^.^.9.b.c-0"},"/ev",{"->":".^.b","c":true},{"b":["\n","^Ноябрь переворачивает копа, забирает его тазер и, отстегнув картридж, прячет в карман.","\n",{"->":".^.^.^.11"},null]}],"nop","\n",["ev","str","^Уходи из проулка","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.8"},null]}],"nop","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"Crowded_street"},"\n",{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"#f":1}],"Crowded_street":["^Ноябрь выскакивает из проулка на круглую площадь, запруженную автомобилями. В центре площади возвышается колоннада с большой красной «М» над ней и единственный путь туда — подземный переход под проезжей частью.","\n","^Однако, на стоянке рядом он замечает полицейского мотоциклиста с рацией в руках.","\n",{"->":".^.Round_plaza_opts"},{"Round_plaza_opts":[["ev","str","^Беги к переходу","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.8"},null]}],"nop","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Давай через проезжую часть","ev",{"CNT?":".^.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ (!)",{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.20"},null]}],"nop","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Рывок к гранитной лестнице, мимо прохожих и уличных торговцев. Полицейский замечает его в толпе и бросается наперерез, на ходу вынимая дубинку.","\n",["ev","str","^Не останавливайся","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^(!)",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.8"},null]}],"nop","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Выруби его как и прошлого","ev",{"CNT?":".^.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^(!)",{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.20"},null]}],"nop","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Выруби его шокером","ev",{"CNT?":".^.c-2"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.32"},null]}],[{"->":".^.b"},{"b":["^*",{"->":".^.^.^.32"},null]}],"nop","/str",{"CNT?":"Dark_alley.Dark_alley_opts.0.c-1.9.c-1.9.b.c-0"},"/ev",{"*":".^.c-2","flg":5},{"c-0":["\n","^Ускорившись, Ноябрь пробегает сквозь группу заголосивших туристов и собирается перепрыгнуть через лоток продавца сувениров, когда сбоку мелькает что-то чёрное, и в следующее мгновение полицейский сбивает его с ног.","\n","^Падение очень болезненное и травмирующее. С трудом дыша, Ноябрь переворачивается на спину, видит своё отражение в зеркальных очках и занесённую дубинку.","\n","^Вспышка.","\n",["ev","str","^Заново","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"Start"},"\n",{"#f":5}]}],{"#f":5}],"c-1":["\n","^Не останавливаясь, Ноябрь сворачивает, бежит навстречу полицейскому, ныряет под его занесённую дубинку и бьёт в корпус.","\n","^Однако, мотоциклетная защита полностью гасит удар и реакция следует незамедлительно.","\n","^Вспышка.","\n",["ev","str","^Заново","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"Start"},"\n",{"#f":5}]}],{"#f":5}],"c-2":["\n","^Не останавливаясь, Ноябрь сворачивает, бежит навстречу полицейскому, ныряет под его занесённую дубинку и прижимает стрекочущий тазер к незащищённой шее. Полицейский дёргается,","\n",{"#f":5}]}],{"#f":5}],"c-1":["\n","^Он перемахивает через ограждение, отделяющее троутар от проезжей части, и бежит поперёк полос, уворачиваясь от проносящихся машин. Ему сигналят сзади, сбоку, спереди.","\n","^Когда он уже преодолевает две трети пути клаксоны вдруг заглушает слишком громкий и слишком близкий визг тормозов.","\n","^Вспышка.","\n",["ev","str","^Заново","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"Start"},"\n","end",{"#f":5}]}],{"#f":5}]}],{"#f":1}],"#f":1}],"global decl":["ev",0,{"VAR=":"msg1_seen"},0,{"VAR=":"msg2_seen"},0,{"VAR=":"resist_to_surrender"},"/ev","end",null],"#f":1}],"listDefs":{}};
