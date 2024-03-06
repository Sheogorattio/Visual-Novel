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
                document.getElementById("img_item_1").src = "item-for-menu/lunch.png";
                return this.items;
            }
            case 'keychain':{
                this.items.keychain = true;
                document.getElementById("img_item_2").src = "item-for-menu/brelock.png";
                return this.items;
            }
            case 'talisman':{
                this.items.bracelet = true;
                document.getElementById("img_item_3").src = "item-for-menu/braslet.png";
                return this.items;
            }
            case 'chocolate':{
                this.items.chocolate = true;
                document.getElementById("img_item_4").src = "item-for-menu/milk.png";
                return this.items;
            }
            case 'bracelet':{
                this.items.talisman = true;
                document.getElementById("img_item_5").src = "item-for-menu/talisman.png";
                return this.items;
            }
        }
    }
}

export class CommandSetHearts extends Command{
    constructor(health, heart){
        super();
        this.health = health;
        this.heart = heart;
        console.log(health);
    }
    execute(){
        // if(this.health <= 1){
        //     document.getElementById("txt").innerHTML = "Вы проиграли";
        // }
        for(let i = 0; i < 3; i++){
            this.heart[i].querySelector("img").src = "ACT_1/red_heart.png";
        }
    }
}

export class CommandCheckAvailability extends Command{
    constructor(Items){
        super();
        this.items = Items;     
    }
    execute(){
        let counter =0;
        console.log(this.items);
        if(this.items.chocolate === true) counter++;
        if(this.items.talisman === true) counter++;
        if(this.items.bracelet === true) counter++;
        if(this.items.chocolate === true) counter++;
        if(this.items.chocolate === true) counter++;
        let addIndex =0;
        if(counter === 0 ) return addIndex;
        else if(counter < 3) addIndex = 1 ;
        else if(counter < 5) addIndex = 2;
        else if(counter === 5) addIndex = 3;
        return addIndex;
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
            case 'setHearts': {
                return new CommandSetHearts(arguments[1], arguments[2]);
            }
            case 'checkAvailability' :{
                return new CommandCheckAvailability(arguments[1]);//Items
            }
        }
    }
}