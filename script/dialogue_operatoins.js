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

export class CommandLoadImage extends Command{
    constructor(background, character, characterPlace){
        super();
        this.background = background;
        this.character = character;
        this.characterPlace = characterPlace;
    }
    execute(){
       if(this.background != null || undefined) document.body.style.backgroundImage = `url(${this.background})`;
       if(this.character != null || undefined) this.characterPlace.src = this.character;
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
            case 'loadImage':{
                return new CommandLoadImage(arguments[1], arguments[2], arguments[3]);//background, character, characterPlace
            }
        }
    }
}