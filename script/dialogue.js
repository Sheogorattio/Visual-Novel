export class Dialogue{
    static lines = [
        {
            author: " ",
            say: "Придя в себя Шики отправился в ванную чтобы умыться."
        },
        {
            author: " ",
            say: "Набрав холодной воды Шики облил им свое лицо."
        },
        {
            author: "Шики",
            say: "Так надо попробовать другой подход."
        },
        {
            author: "Шики",
            say: "Для начало пойду покушаю и пойду в школу"
        },
        {
            author: " ",
            say: "Придя на кухню он встречает Мидзу"
        },
        {
            author: "Шики",
            say: "Мидзу почему ты улыбаешься?"
        },
        {
            author: "Мидзу",
            say: "Просто мой братик самый лучший и для братика я приготовила вкусный и сытный завтрак.",
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
            say: "Братик будешь много говорить и еда остынет"
        },
        {
            author: "Шики",
            say: "TEST +1 INDEX"
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