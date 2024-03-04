import {Dialogue} from './dialogue.js';
import * as File from './dialogue_operatoins.js'

export function CreateTextHolder(){

    let holder = document.createElement('div');
    holder.classList.add('dialogue-words');

    let speaker = document.createElement('div');
    speaker.classList.add('speaker-name');

    holder.appendChild(speaker);

    let text = document.createElement('p');

    holder.appendChild(text);

    let navigation = document.createElement('div');
    navigation.classList.add('nav');

    holder.appendChild(navigation);

    let prev = document.createElement('div');
    prev.classList.add('prev');
    prev.textContent = 'Назад';
    let next = document.createElement('div');
    next.classList.add('next');
    next.textContent = 'Далее';
    navigation.appendChild(prev);
    navigation.appendChild(next);

    return holder;
}

export function CreatePerson(path){
    let person = document.createElement('div');
    person.classList.add('person');

    let image = document.createElement('img');
    image.src = path;

    person.appendChild(image);

    return person;
}

export function HideText(text_holder){
    if(text_holder instanceof HTMLElement){
        text_holder.style.display = 'none';
    }
}

export function PrintText(text, textHolder, i=0){
    if(i === text.length-1){
        return;
    }
    textHolder.textContent += text[i++];
    setTimeout(PrintText(text, textHolder, i), 200);
}

export function PrintName (text, nameHolder){
    nameHolder.textContent = text;
}

export function CleanFields(){
    let elements = Array.from(arguments);
    for(let i=0; i< elements.length; i++){
        elements[i].innerHTML = ' ';
    }
}

export function CreateOptionsBar(){
    let element = document.createElement('div');
    element.classList.add('options');
    return element;
}

export function CreateOption(optionsBar, text, nextLineIndex){
    let element = document.createElement('div');
    element.classList.add('option');
    element.textContent = text;
    element.addEventListener('mousedown', ()=>{
        Dialogue.counter+=nextLineIndex;
        let line =Dialogue.getNextLine();
        File.CommandCreator.create('say', line.author,line.say,document.querySelector('.speaker-name'),document.querySelector('.speaker-name+p')).execute();
        ClearOptions(optionsBar);
    })
    return element;
}

function ClearOptions(optionsBar){
    let options = optionsBar.querySelectorAll('.option');
    for(let i=0; i < options.length ; i++){
        optionsBar.removeChild(options[i]);
    }
}