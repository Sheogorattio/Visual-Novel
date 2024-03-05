export const Act1 = [
    {
        author: " ",
        say: "Придя в себя Шики отправился в ванную чтобы умыться.",
        background: "Bathroom"
    },
    {
        author: " ",
        say: "Набрав холодной воды Шики облил им свое лицо."
    },
    {
        author: "Шики",
        say: "Так надо попробовать другой подход.",
        spawn : "Шики",
        final : ""
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
                nextIndex : 0
            },
            {
                say : "Спасибо съем с превеликим удовольствием.",
                nextIndex : 1
            },
            {
                say : "Сама дура, а я в школу.",
                nextIndex : 1
            },
            {
                say : "Чтобы я без тебя делал.",
                nextIndex : 1
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
        say: "TEST +1 INDEX",
        spawn : "Шики"
    },
    {
        author: "Мидзу",
        say: " ",
        nextIndex : ""
    },
    //option 2
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
    //option 3
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
    {
        author: " ",
        say: " "
    },
]

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
        say: "А.. да.. Привет, как ты это сделал? "
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
                nextIndex : 2
            },
            {
                say : "...",
                nextIndex : 3
            }
        ]
    },
    //option 1
    {
        author: "Шики",
        say: "Первый раунд за мной!"
    },
    {
        author: "Мику",
        say: "Давай дальше 2 раунд.",// Мику поставит ножницы
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
                nextIndex : 2
            },
            {
                say : "...",
                nextIndex : 3
            }
        ]
    },
    //option 1.1
    {
        author: "Шики",
        say: "Вот блин не повезло ничья.",
        spawn: "Шики"
    },
    {
        author: "Мику",
        say: "И 3 раунд", // Мику поставит ножницы 
        spawn : "Мику",
        chioses : [
        {
            say : "Камень",
            nextIndex : 0
        },
        {
            say : "Ножницы",
            nextIndex : 1
        },
        {
            say : "Бумага",
            nextIndex : 2
        },
        {
            say : "...",
                nextIndex : 3
            }
        ]
    },
    //option 1.1
    {
        author: "Шики",
        say: "И в 3 райнде победа моя ",
        spawn: "Шики"
    },
    {
        author: "Мику",
        say: "Было весело стобой поигарть ",
        spawn: "Мику"
    },
    {
        author: "Шики",
        say: "Да с тобой было приятно поиграть ",
        spawn: "Шики"
    },
    {
        author: "Шики",
        say: "День будет долгим ",
        spawn: "Шики"

    },
    //option 2
    {
        author: "Шики ",
        say: "У нас ничью. "
    },
    {
        author: "Мику",
        say: "Давай только до трех побед.",
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
            nextIndex : 2
        },
        {
            say : "...",
                nextIndex : 3
            }
        ]
    },
    //option 3
    {
        author: "Шики",
        say: "Вот блин проиграл."
    },
    {
    author: "Мику",
    say: "Давай только до трех побед.",
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
        nextIndex : 2
    },
    {
        say : "...",
            nextIndex : 3
        }
    ]
    },
]

export const Act3 = [];
export const Act4 = [];
export const Act5 = [];