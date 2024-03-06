import {CreateOption} from './basic_visual.js'
import { Dialogue } from './dialogue.js';

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

export class CommandChangeIndex extends Command{
    constructor(indexPlus, Dialogue){
        super();
        this.indexPlus = indexPlus;
        this.Dialogue = Dialogue;
    }
    execute(){
        Dialogue.counter+=this.indexPlus;
        return this.Dialogue;
    }
}

export class CommandChangeItemState extends Command{
    constructor(itemName, items){
        super();
        this.itemName = itemName;
        this.items = items;
    }
    execute(){
        switch(this.itemName){
            case 'lunchbox':{
                this.items.lunchbox = true;
                return this.items;
            }
            case 'keychain':{
                this.items.bracelet = true;
                return this.items;
            }
            case 'talisman':{
                this.items.bracelet = true;
                return this.items;
            }
            case 'chocolate':{
                this.items.bracelet = true;
                return this.items;
            }
            case 'bracelet':{
                this.items.bracelet = true;
                return this.items;
            }
        }
    }
}

export class CommandCreator{
    static create(commandType){//'say', arg1, arg2, ...
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
            case 'changeIndex' :{
                return new CommandChangeIndex(arguments[1], arguments[2]);
            }
            case 'getItem' :{
                return new CommandChangeItemState(arguments[1], arguments[2]);//itemName, items
            }
        }
    }
}