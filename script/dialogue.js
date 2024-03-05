import * as Lines from './lines.js'
export class Dialogue{
    constructor(lines){
        this.lines = lines;
    }
    counter =-1;
    getLines(){
        return JSON.stringify(this.lines);
    }
    getNextLine(){
        return this.lines[++this.counter];
    }
    getPrevLine(){
        if(this.counter >=0) return this.lines[--this.counter];
        else return this.lines[this.counter];
    }
}

export function GetAct1(){
    return new Dialogue(Lines.Act1);
}
export function GetAct2(){
    return new Dialogue(Lines.Act2);
}
export function GetAct3(){
    return new Dialogue(Lines.Act3);
}
export function GetAct4(){
    return new Dialogue(Lines.Act4);
}
export function GetAct5(){
    return new Dialogue(Lines.Act5);
}
