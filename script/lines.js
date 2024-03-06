export const Act1 = [
    {
        author: " ",
        say: "Придя в себя Шики отправился в ванную чтобы умыться.",
        background: "Bathroom",
        spawn: "none",
        health_recover: ""
    },
    {
        author: " ",
        say: "Набрав холодной воды Шики облил им свое лицо.",
    },
    {
        author: "Шики",
        say: "Так надо попробовать другой подход.",
        spawn : "Шики",
    },
    {
        author: "Шики",
        say: "Для начало пойду покушаю и пойду в школу"
    },
    {
        author: " ",
        say: "Придя на кухню он встречает Мидзу",
        background : "Kitchen",
        spawn : "Мидзу"
    },
    {
        author: "Шики",
        say: "Мидзу почему ты улыбаешься?",
        spawn : "Шики",
        hide : "choise" 
    },
    {
        author: "Мидзу",
        say: "Просто мой братик самый лучший и для братика я приготовила вкусный и сытный завтрак.",
        spawn : "Мидзу",
        chioses : [
            {
                say : "Но все же тебе не стоит так рано вставать.",
                nextIndex : 0//+1   +0
            },
            {
                say : "Спасибо съем с превеликим удовольствием.",
                nextIndex : 4//+1   +4
            },
            {
                say : "Сама дура, а я в школу.",
                nextIndex : 9//+1   +9
            },
            {
                say : "Чтобы я без тебя делал.",
                nextIndex : 12
            }
        ]
    },
    //option 1
    {
        author: "Мидзу",
        say: "Братик будешь много говорить и еда остынет",
        spawn : "Мидзу"
    },
    {
        author: "Шики",
        say: "Прости прости конечно я все съем спасибо за еду",
        spawn : "Шики"
    },
    {
        author: "Мидзу",
        say: "Тогда я тебе еще сделаю чтобы было что покушать в школе и ты не ходил голодный",
        spawn : "Мидзу"
    },
    {
        author: " ",
        say: "*Шики получает еду*",
        nextIndex : 12,
        getItem: "lunchbox"
    },
    //option 2
    {
        author: "Мидзу",
        say: "Так бы сразу кстати братик когда ты придешь домой",
        spawn : "Мидзу"
    },
    {
        author: "Шики",
        say: "Не знаю наверное сегодня поздно",
        spawn : "Шики"
    },
    {
        author: "Мидзу",
        say: "*Насторожено*\nТы же не с девочками будешь гулять? ",
        spawn : "Мидзу"
    },
    {
        author: "Шики",
        say: "Ахаха какие девочки я наверное пойду на дополнительные по математике",
        spawn : "Шики"
    },
    {
        author: "Мидзу",
        say: "Тогда я сейчас сделаю тебе еще еды.",
        getItem: "lunchbox",
        spawn : "Мидзу",
        nextIndex : 7
    },
    //option 3
    {
        author: "Мидзу",
        say: "Братик дурак дурак дурак ",
        spawn : "Мидзу",
        damage : ""
    },
    {
        author: "Шики",
        say: "Стой…",
        spawn : "Шики"
    },
    {
        author: "Шики",
        say: "*про себя*\nHу и ладно, а я пойду в школу",
        spawn : "Шики",
        nextIndex : 4
    },
    //option 4
    {
        author: "Мидзу",
        say: "Вот вот тебе бы жену как я, заботилась бы о тебе",
        spawn : "Мидзу"
    },
    {
        author: "Шики",
        say: "Хаха",
        spawn : "Шики"
    },
    {
        author: "Мидзу",
        say: "Братик дурак\n*убегает*",
        spawn : "Мидзу"
    },
    {
        author: "Шики",
        say: "Я что-то не так сказал ну ладно пойду в школу.",
        spawn : "Шики"
    },
    {
        author: " ",
        say: "*Шики уходит в школу*",
        spawn : "Шики",
        final : ""
    }
];

export const Act2 = [
    {
        author: " ",
        say: "Когда Шики подходил к школе он знал что вот-вот его ударит по спине Мику. И прежде чем она это сделает он хотел схватит ее за руку. От удивленя Мику покраснела",
        background: "Street"
    },
    {
        author: "Шики",
        say: "Привет.",
        spawn : "Шики"
    },
    {
        author: "Шики",
        say: "Так надо попробовать другой подход."
    },
    {
        author: "Мику",
        say: "А.. да.. Привет, как ты это сделал? ",
        spawn: "Мику"
    },
    {
        author: "Шики ",
        say: "А тебя было слышно за километр.",
        spawn : "Шики"
    },
    {
        author: "Мику",
        say: "Шики ты дурак !!!",
        spawn : "Мику"
    },
    {
        author: "Шики ",
        say: "Прости просто почувствовал.",
        spawn : "Шики"
    },
    {
        author: "Мику ",
        say: "Чего ты так рано пришел ?",
        spawn : "Мику"
    },
    {
        author: "Шики ",
        say: "Да само как-то получилось, а ты как обычно раньше всех пришла.",
        spawn : "Шики"
    },
    {
        author: "Мику",
        say: "Да, может раз мы пришли так рано тогда поиграем во что-то ? ",
        spawn : "Мику"
    },
    {
        author: "Шики ",
        say: "Да давай, как насчет камень, ножницы, бумага ?",
        spawn : "Шики"
    },
    {
        author: "Мику",
        say: "Давай только до трех побед.",// поставит (бумагу)
        spawn : "Мику",
        chioses : [
            {
                say : "Ножницы",
                nextIndex : 0
            },
            {
                say : "Бумага",
                nextIndex : 1
            },
            {
                say : "Камень",
                nextIndex : 1
            },
            {
                say : "...",
                nextIndex : 3
            }
        ]
    },
    //option 1
    {
        author: "Шики ",
        say: "Я победил 1:0",
        spawn : "Шики",
        nextIndex: 2
    },
     //option 2
     {
        author: "Шики ",
        say: "Не повезло",
        spawn : "Шики",
        nextIndex: 1
     },
    //option 1
    {
        author: "Шики ",
        say: "Не знаю что-то",
        spawn : "Шики"
    },
    {
        author: "Мику",
        say: "Еще раз.",// поставит ножницы второй раунд
        spawn : "Мику",
        chioses : [
            {
                say : "Ножницы",
                nextIndex : 1
            },
            {
                say : "Бумага",
                nextIndex : 1 
            },
            {
                say : "Камень",
                nextIndex : 0
            },
            {
                say : "...",
                nextIndex : 2
            }
        ]
    },
    //option 1
    {
        author: "Шики ",
        say: "Победа!",
        spawn : "Шики",
        nextIndex: 2
    },
     //option 2
     {
        author: "Шики ",
        say: "Эх жаль...",
        spawn : "Шики",
        nextIndex: 1
     },
    //option 1
    {
        author: "Шики ",
        say: "Настроение что-то пропало",
        spawn : "Шики"
    },
    {
        author: "Мику",
        say: "Еще раз.",// поставит ножницы третий раунд
        spawn : "Мику",
        chioses : [
            {
                say : "Камень",
                nextIndex : 0
            },
            {
                say : "Бумага",
                nextIndex : 1 
            },
            {
                say : "Ножницы",
                nextIndex : 1
            },
            {
                say : "...",
                nextIndex : 2
            }
        ]
    },
    //option 1
    {
        author: "Шики ",
        say: "Победа!", 
        spawn : "Шики",
        nextIndex: 3
    },
     //option 2
     {
        author: "Шики ",
        say: "Не смог в последнем раунде тебя выйграть", // теряет здоровье 
        spawn : "Шики",
        damage: "",
        nextIndex: 2
     },
    //option 1
    {
        author: "Шики ",
        say: "Плохо себя чувствую",
        spawn : "Шики",
        nextIndex: 0
    },
    {
    author: "Мику ",
    say: "Выздоравливай", // дает предмет талисман на удачу.
    spawn : "Мику",
    getItem: "talisman"
    },
    {
        author: "Мику ",
        say: "Спасибо что поиграл со мной", 
        spawn : "Мику"
    },
    {
        author: "Шики ",
        say: "И тебе", 
        spawn : "Шики"
    },
    {
        author: "Мику ",
        say: "Я иногда думала что ты читаешь мои мысли", 
        spawn : "Мику"
    },
    {
        author: "Шики ",
        say: "Тебе показалось", 
        spawn : "Шики"
    },
    {
        author: "Шики ",
        say: "Как думаешь меня ждет длинный день?", 
        spawn : "Шики"
    },
    {
        author: "Мику ",
        say: "Не знаю", 
        spawn : "Мику"
    },
    {
        author: "Шики ",
        say: "Я думаю день будет длинный", 
        spawn : "Шики",
        final : ""
    },
];

export const Act3 = [
    {
        author: " ",
        say: "К Шики подходит Ютори с маленькой просьбой.",
        background: "Classroom"
    },
    {
        author: "Ютори",
        say: "Привет можешь помочь с математикой?",
        spawn: "Ютори"
    },
    {
        author: "Шики",
        say: "Привет не часто ты Ютори просишь меня помочь тебе с чем-то.",
        spawn : "Шики"
    },
    {
        author: "Шики",
        say: "Давай помогу чем смогу"
    },
    {
        author: "Ютори",
        say: "Вот я не понимаю как решить этот пример: (x+2=6)",
        spawn: "Ютори",
        chioses: [
            {
                say: "Тут ответ х=4",
                nextIndex: 0
            },
            {
                say: "Я не знаю!",
                nextIndex: 13,
                damage: ""
            }
        ]
    },
    // option 1
    {
        author: "Ютори",
        say: "А как ты это узнал?"
    },
    {
        author: "Шики",
        say: "Объясняет…",
        spawn: "Шики"
    },
    {
        author: "Ютори",
        say: "А поняла спасибо тогда (х+6=4) тут ответ: х = -2",
        spawn: "Ютори"
    },
    {
        author: "Шики",
        say: "Да, ты молодец если будет что-то еще не понятно обращайся.",
        spawn: "Шики"
    },
    {
        author: "Рика",
        say: "Привет Шики и Ютори смотрю ты опять помогаешь, тогда не мог ты помочь мне с одним маленьким советом.",
        spawn: "Рика"
    },
    {
        author: "Ютори",
        say: "Привет Рика!",
        spawn: "Ютори"
    },
    {
        author: "Ютори",
        say: "Подожди Рика, Шики мне помогает!",
    },
    {
        author: "Рика",
        say: "Но у меня совсем маленько дельце на пару минут.",
        spawn: "Рика"
    },
    {
        author: "Ютори",
        say: "Но мы заканчивали с математикой!",
        spawn: "Ютори"
    },
    {
        author: "Рика",
        say: "А у тебя проблемы с математикой, тогда смотри… (очень быстро все объяснила)",
        spawn: "Рика"
    },
    {
        author: "Рика",
        say: "Теперь Шики свободен и мне нужна его помощь так что давай выйдем.",
    },
    {
        author: "Шики",
        say: "Хорошо пошли выйдем.",
        spawn: "Шики"
    },
    {
        author: "Ютори",
        say: "Спасибо за помощь с математикой Шики!",
        spawn: "Ютори",
        getItem: "bracelet",
        nextIndex: 1
    },
    {
        author: "Ютори",
        say: "Очень жаль..."
    },
    // option 2
    {
        author: "Рика",
        say: "Прости что так отвлекаю тебя но дело серьезное. Что ты делаешь после уроков?",
        spawn: "Рика"
    },
    {
        author: "Шики",
        say: "И это твое серьезное дело, я иду в клубную комнату, а что?",
        spawn: "Шики"
    },
    {
        author: "Рика",
        say: "Мне нужна твоя помощь если ты не против тогда не мог бы после уроков зайти в свой класс и помочь мне кое с чем?",
        spawn: "Рика",
        chioses: [
            {
                say: "Согласиться",
                nextIndex: 0
            },
            {
                say: "Согласиться ",
                nextIndex: 0
            },
            {
                say: "Согласиться ",
                nextIndex: 0
            },
            {
                say: "Согласиться ",
                nextIndex: 0
            }
        ]
    },
    // option 2.1
    {
        author: "Шики",
        say: "Хорошо приду помогу чем смогу.",
        spawn: "Шики"
    },
    {
        author: "Рика",
        say: "Спасибо шики хорошего дня.",
        spawn: "Рика",
        final : ""
    },
]

export const Act4 = [
    {
        author: " ",
        say: "Шики приходит в клубную комнату чтобы обсудить новую недавно вышедшею игру Хулф Мульф 3.",
        background: "Club",
        spawn: "Шики"
    },
    {
        author: "Шики",
        say: "Привет Шидзу ты уже видела новую игру ? .",
        spawn : "Шики"
    },
    {
        author: "Шидзу",
        say: "Привет, глупошики, да видела. И уже успела поиграть.",
        spawn : "Шидзу"
    },
    {
        author: "Шики",
        say: "Ого что требовалось ожидать от вас глава, я вами восхищаюсь",
        spawn : "Шики"
    },
    {
        author: "Шидзу",
        say: "Вхахаха, да на то я и глава клуба. Если ты хочешь тогда я так и быть дам тебе ее.",
        spawn : "Шидзу"
    },
    {
        author: "Шики",
        say: "Спасибо, великая глава!",
        spawn : "Шики"
    },
    {
        author: "Шидзу",
        say: "Хахахаха… обращайся глупошики.",
        spawn : "Шидзу"
    },
    {
        author: "Шики ",
        say: "Как вам геймплей? ",
        spawn : "Шики"
    },
    {
        author: "Шидзу ",
        say: "Все сделано в лучшем виде локации атмосферные и физика приближенная к реальной.",
        spawn : "Шидзу"
    },
    {
        author: "Шики",
        say: "Ухты, а как стрельба ?",
        spawn : "Шики"
    },
    {
        author: "Шидзу ",
        say: "На самом деле сложнее так как оружие имеет свойство перегрева и может ломаться в самый не подходящий момент.",
        spawn : "Шидзу"
    },
    {
        author: "Шики",
        say: "Интересно.",
        spawn : "Шики"
    },
    {
        author: "Шики",
        say: "Глава, а что вы делаете вечером ?",
        spawn : "Шики"
    },
    {
        author: "Шидзу",
        say: "А тебе то что глупошики ?",
        spawn : "Шидзу"
    },
    {
        author: "Шики",
        say: "Я просто нашел интересную игру для двоих, так что решил предложить тебе.",
        spawn : "Шики"
    },
    {
        author: "Шидзу",
        say: "Я посмотрю если будет время тогда может и сможем. А в чем сюжет ?",
        spawn : "Шидзу"
    },
    {
        author: "Шики",
        say: "Это Castle Demons игра завязана на кооперативной помощи друг другу. ",
        spawn : "Шики"
    },
    {
        author: "Шики",
        say: "Мы два рыцаря которые должны помочь друг другу достичь одной цели, а именно захватит замок демонов. ",
        spawn : "Шики"
    },
    {
        author: "Шидзу",
        say: "Звучит интересно, я напишу тебе. ",
        spawn : "Шидзу"
    },
    {
        author: "Шики",
        say: "Хорошо, буду ждать. ",
        spawn : "Шики"
    },
    {
        author: "Шидзу",
        say: "Кстати Шики если ответишь на мой вопросы получишь какой-то подарок. ",
        spawn : "Шидзу"
    },
    {
        author: "Шики",
        say: "Ух ты глава не часто вы устраиваете викторины. Давайте сыграем.",
        spawn : "Шики"
    },
    {
        author: "Шики",
        say: "Тогда тема: игры, готов? ",
        spawn : "Шики"
    },
    {
        author: "Шидзу",
        say: "Первый вопрос. Сколько существует частей Хулф Мульф?",// ответ 3 
        spawn : "Шидзу",
        chioses : [
            {
                say : "1",
                nextIndex : 1
            },
            {
                say : "2",
                nextIndex : 1
            },
            {
                say : "3",
                nextIndex : 0
            },
            {
                say : "Не знаю",
                nextIndex : 1
            }
        ]
    },
    //option 1
    {
        author: "Шидзу",
        say: "Молодец!",
        nextIndex : 1
    },
    //option 2
    {
        author: "Шидзу",
        damage: "",
        say: "Глупошики не правильно!"
        
    },
    //option Вопрос 2 
    {
        author: "Шидзу",
        say: "Второй вопрос. Как называется игра про двух рыцарей ?", //Castle Demons
        spawn : "Шидзу",
        chioses : [
            {
                say : "Как достать соседа ?",
                nextIndex : 1
            },
            {
                say : "Dark Souls",
                nextIndex : 1
            },
            {
                say : "Castle Demons",
                nextIndex : 0
            },
            {
                say : "Не знаю",
                nextIndex : 1
            }
        ]
    },
     //option 1
     {
        author: "Шидзу",
        say: "Молодец так держать!",
        nextIndex : 1
    },
    //option 2
    {
        author: "Шидзу",
        damage: "",
        say: "Глупошики не правильно соберись!"
    },
    //option Вопрос 3
    {
        author: "Шидзу",
        say: "Третий вопрос. Какая у игры цель ?", //Захватить замок демонов
        spawn : "Шидзу",
        chioses : [
            {
                say : "Захватить замок демонов",
                nextIndex : 0
               },
            {
                say : "Захватить мир",
                nextIndex : 1
            },
            {
                say : "Захватить короля демнов",
                   nextIndex : 1
               },
               {
                   say : "Не знаю",
                nextIndex : 1
            }
           ]
       },
        //option 1
     {
        author: "Шидзу",
        say: "Молодец, а ты хорошо все запомнил!",
        nextIndex : 1
    },
    //option 2
    {
        author: "Шидзу",
        damage: "",
        say: "Глупошики не правильно соберись, ты безнадежен!"
    },
            //option Вопрос 4
            {
                author: "Шидзу",
                say: "Четвертый вопрос. Какая физика в игру Хулф Мульф 3?", //Приближенная к реальной //pravilno
                spawn : "Шидзу",
                chioses : [
                    {
                        say : "Ужасная ",
                        nextIndex : 1
                       },
                    {
                        say : "Там можно парить",
                        nextIndex : 1
                    },
                    {
                        say : "Приближенная к реальной",
                           nextIndex : 0
                       },
                       {
                           say : "Я не знаю",
                        nextIndex : 1
                    }
                   ]
               },
                //option 1
             {
                author: "Шидзу",
                say: "Молодец, а ты хорошо все запомнил и последний вопрос очень сложный!",
                //+Дасть вещь(Браслет)
                getItem: "chocolate",
                nextIndex : 1
            },
            //option 2
            {
                author: "Шидзу",
                damage: "",
                say: "Глупошики не правильно соберись, ты безнадежен, я не знаю что и сказать..."
            },

            {
                author: "Шидзу",
                say: "Пятый вопрос. На сколько ты оценил игру ? ",
                spawn : "Шидзу",
                chioses : [
                    {
                        say : "1-3 ", //тут теряем хп
                        nextIndex : 1,
                        damage : ""
                       },
                    {
                        say : "3-6",
                        nextIndex : 1
                    },
                    {
                        say : "6-10",
                           nextIndex : 0
                       },
                       {
                           say : "Она неоценима",
                        nextIndex : 1
                    }
                   ]
               },
            //option 1
            {
                author: "Шидзу",
                say: "Да ну ладно спасибо за отзыв дурак",
                damage: "",
                nextIndex : 3
            },
            //option 2
            {
                author: "Шидзу",
                say: "Справедливая оценка моему уму!",
                nextIndex : 2
            },
            //option 3
            {
                author: "Шидзу",
                say: "Неплохоя оценка думала ты меньше поставишь",
                nextIndex : 1
            },
            //option 4
            {
                author: "Шидзу",
                say: "Да брось ты, спасибо!"
            },

            {
                author: "Шики",
                say: "Ладно спасибо за интересную игру!",
                spawn: "Шики",
                chioses : [
                    {
                        say : "Пойти помочь Рике",
                        nextIndex : 1
                    },
                    {
                        say : "Не помогать Рике",
                        nextIndex : 0
                    }
                ]
            },
            {
                author: "Шики",
                say: "Мне надо идти",
                spawn: "Шики",
                final : ""
            },
            
            //Пошел помогать РИКЕ или конец главы
            {
                author: "",
                say: "Пошел помогать Рике",
                spawn: "Шики"
            },
            {
                author: "Шики",
                say: "Привет Рика с чем тебе надо помочь ?",
                spawn: "Шики"
            },
            {
                author: "Рика",
                say: "Привет еще раз, не мог бы помочь отнести мне это коробки в кабинет учителей ?",
                spawn: "Рика"
            },
            {
                author: "Шики",
                say: "Да хорошо, а что в них?",
                spawn: "Шики"
            },
            {
                author: "Рика",
                say: "Спортивный инвентарь, скоро состоится спортивный фестиваль, и вот учителя хотели все проверить.",
                spawn: "Рика"
            },
            {
                author: "Шики",
                say: "Понял, а чего тебе поручили эту работу ? ",
                spawn: "Шики"
            },
            {
                author: "Рика",
                say: "Потому что сейчас практически все занята осмотром помещений и составлением игр на фестиваль. Просто если отвлекла от чего-то важного. ",
                spawn: "Рика"
            },
            {
                author: "Шики",
                say: "Да ничего все хорошо я рад помочь.",
                spawn: "Шики"
            },
            {
                author: "",
                say: "*коробки отнесли в учительскую и идут обратно за парой коробок*",
                spawn: ""
            },
            {
                author: "Шики",
                say: "Да ничего все хорошо я рад помочь.",
                spawn: "Шики"
            },
            {
                author: "Шики",
                say: "Мы почти закончили если еще нужна помощь то обращайся.",
                spawn: "Шики"
            },
            {
                author: "",
                say: "*неловко повернувшись к шики она хотела сказать*",
                spawn: "Рика"
            },
            {
                author: "Рика",
                say: "Да есть одно дело с которым можешь помочь ",
                spawn: "Рика"
            },
            {
                author: "Шики",
                say: "Какое?",
                spawn: "Шики"
            },
            {
                author: "Шики",
                say: "Какое?",
                spawn: "Шики"
            },
            {
                author: "",
                say: "*Покраснев она хотела сказать*",
                spawn: "Рика"
            },
            {
                author: "Рика",
                say: "Не мог бы ты сходить со ….",
                spawn: "Рика"
            },
            {
                author: "",
                say: "*В этот момент ее прервал учитель который был в школе и увидел их.*",
                spawn: "Учитель"
            },
            {
                author: "Учитель",
                say: "А что вы тут делаете ? ",
                spawn: "Учитель"
            },
            {
                author: "Шики",
                say: "Мы относили коробки в учительскую.",
                spawn: "Шики"
            },
            {
                author: "Рика",
                say: "*от того что сбили настрой Рика покраснела и дала Шики брелок который сама сделал и убежала*",
                spawn: "Рика"
            },
            {
                author: "Рика",
                say: "Простите мне надо срочно идти ",
                spawn: "Рика"
            },
            {
                author: "",
                say: "*Шики не успел понять что произошло забрал брелок думая что потом отдаст*", //получаем предмет брелок
                spawn: "Шики",
                getItem : "keychain"
            },
            {
                author: "Учитель",
                say: "Шики мы можем поговорить в учительской тебе как раз по пути.",
                spawn: "Учитель",
                final : ""
            }
];

export const Act5 = [
    {
        author: "Шики",
        say: "Да о чем вы хотели поговорить?",
        background: "Hallway",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Шики как у тебя идут дела с девочками?",
        spawn: "Хроно"
    },
    {
        author: "Шики",
        say: "В каком плане вас это интересует?",
        spawn : "Шики"
    },
    {
        author: "Хроно",
        say: "Да так замечала странное поведение.",
        spawn: "Хроно"
    },
    {
        author: "Шики",
        say: "Все хорошо мы ладим.",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Это хорошо",
        spawn: "Хроно"
    },
    {
        author: "Шики",
        say: "Тогда если я свободен, можно пойду?",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Шики ты наверное забыл но это не первый наш с тобой разговор.",
        spawn: "Хроно"
    },
    {
        author: "Шики",
        say: "Вы о чем?",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Наверное опять забыл.",
        spawn: "Хроно"
    },
    {
        author: "Хроно",
        say: "Ты проживешь один и тот же день но постоянно забываешь важные моменты из этого дня, особенно тот что я не твой учитель, а Хронос."        },
    {
        author: "Шики",
        say: "Как вы узнали и что это значит? ",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Я закрыла тебя в петле времени.",
        spawn: "Хроно"
    },
    {
        author: "Шики",
        say: "Зачем?",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Если я скажу тебе все сразу ты ничего не поймешь.",
        spawn: "Хроно"
    },
    {
        author: "Шики",
        say: "А как я могу что-то понять если вы ничего не говорите.",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Хорошо, ты прав, но тогда давай посмотрим на твои поступки в твоей сегодняшней попытке",
        spawn: "Хроно"
    },
    {
        author: "Шики",
        say: "Вы о чем ?",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Ты должен был получать вещи от девочек.",
        spawn: "Хроно"
    },
    {
        author: "Шики",
        say: "Да но откуда вы знаете?",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Это артефакты симпатии!",
        spawn: "Хроно",
    },
    {
        author: "Хроно",
        say: "И если ты их получил то сможешь порвать петлю но для его выполнения нужны все предметы пропитанные искренними чувствами девочек."
    },
    {
        author: "Хроно",
        say: "Давай все предметы которые у тебя есть.",
        checkAvailability: ""
    },
    // 0 artifacts
    {
        author: "Хроно",
        say: "Ты не можешь понять чувства девушек так что тебе нужно постараться еще раз удачи Шики.",
        nextIndex : 3
    },
    // 1-2 artifacts
    {
        author: "Хроно",
        say: "Шики этого мало хоть это уже лучше чем в прошлых твоих попытках но все еще недостаточно",
        nextIndex : 2
    },
    // 3-4 artifacts
    {
        author: "Хроно",
        say: "Я вижу ты хорошо понимаешь чувства девушек но этого мало тебе надо постараться для того чтобы порвать круг",
        nextIndex : 1
    },
    // 5 artifacts
    {
        author: "Хроно",
        say: "Ого ты постарался на славу спасибо."
    },
    {
        author: "Шики",
        say: "А зачем я этим занимался?",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Ну что-же можно сказать, все таки ты постарался на славу!",
        spawn: "Хроно",
    },
    {
        author: "Хроно",
        say: "Ты собирал все эти предметы для того чтобы ……"
    },
    {
        author: "Шики",
        say: "Я не понял, что вы сказали?",
        spawn: "Шики"
    },
    {
        author: "Хроно",
        say: "Оно и понятно, смертному не понять моя божественный замысел.",
        spawn: "Хроно",
    },
    {
        author: "Хроно",
        say: "Но скажу так чтобы ты понял, это моя еда, вещи пропитанные сильными чувствами лучшее средство для того чтобы утолить мой голод. Так что не растрой меня и в другой раз."
    },
    {
        author: " ",
        say: "*Шелк*",
        background: "Dark",
        spawn: "Шики"
    },
    {
        author: " ",
        say: "Стоп что опять…",
        final: ""
    }
];