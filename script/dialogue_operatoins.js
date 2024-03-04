import {CreateOption} from './basic_visual.js'

class Command{
    constructor(){

    }
    execute(){

    }
}

export class CommandSay extends Command{
    constructor(author, line, authorHolder, textHolder){
        super();
        this.author = author;
        this.line = line;
        this.authorHolder = authorHolder;
        this.textHolder = textHolder;
    }
    execute(){ 
        this.authorHolder.textContent = this.author;
        this.textHolder.textContent = this.line;
    }
}

export class CommandChoise extends Command{
    constructor(chiosesArr,optionsBar){
        super();
        this.chiosesArr = chiosesArr;
        this.optionsBar = optionsBar;
    }
    execute(){
        for(let i=0; i< this.chiosesArr.length; i++){
            this.optionsBar.appendChild(CreateOption(this.optionsBar ,this.chiosesArr[i].say, this.chiosesArr[i].nextIndex));
        }
    }
}

export class CommandCreator{
    static create(commandType){
        switch (commandType){
            case 'say':{
                return new CommandSay(arguments[1],arguments[2],arguments[3],arguments[4]);//author, line, authorHolder, textHolder
            }
            case 'choose':{
                return new CommandChoise(Array.from(arguments[1]),arguments[2]);//array of options on arguments[1], optionsBar
            }
        }
    }
}