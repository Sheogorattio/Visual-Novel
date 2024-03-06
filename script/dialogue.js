import * as Lines from './lines.js'
export class Dialogue{
    constructor(lines){
        this.lines = lines;

    }
    static counter = -1;
    static min_counter = 0;
    getLines(){
        return JSON.stringify(this.lines);
    }
    getNextLine(){
        return this.lines[++Dialogue.counter];
    }
    getPrevLine(){
        if(Dialogue.counter >Dialogue.min_counter) return this.lines[--Dialogue.counter];
        else return this.lines[Dialogue.counter];
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
