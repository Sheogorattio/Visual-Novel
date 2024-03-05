export class Dialogue{
    static lines = [
        {
            author: " ",
            say: "Когда Шики подходил к школе он знал что вот-вот его ударит по спине Мику. И прежде чем она это сделает он хотел схватит ее за руку. От удивленя Мику покраснела",
            background: "street"
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
    static counter =-1;
    static getLines(){
        return JSON.stringify(Dialogue.lines);
    }
    static getNextLine(){
        return Dialogue.lines[++Dialogue.counter];
    }
    static getPrevLine(){
        return Dialogue.lines[--Dialogue.counter];
    }
}