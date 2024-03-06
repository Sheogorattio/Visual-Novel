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

    let save = document.createElement('div');
    save.classList.add('save');
    save.textContent = 'Сохранить';

    let next = document.createElement('div');
    next.classList.add('next');
    next.textContent = 'Далее';
    navigation.appendChild(prev);
    navigation.appendChild(save);
    navigation.appendChild(next);

    return holder;
}

export function CreatePerson(path){
    let person = document.createElement('div');
    person.classList.add('person');

    let image = document.createElement('img');
    //image.src = path;

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

let audio = new Audio();


export function CreateOption(optionsBar, text, nextLineIndex){
    let element = document.createElement('div'); 
    element.classList.add('option');
    element.textContent = text;
    element.addEventListener('mouseenter', ()=>{
        audio.src='ACT_1/click.wav';
        audio.play();
    })
    element.addEventListener('mousedown', ()=>{
        Dialogue.counter+=nextLineIndex;
        document.body.querySelector('.next').classList.remove('hide');
        document.body.querySelector('.next').click();
        ClearOptions(optionsBar);
        audio.src='ACT_1/click2.wav';
        audio.play();
    })
    return element;
}

export function ClearOptions(optionsBar){
    let options = optionsBar.querySelectorAll('.option');
    for(let i=0; i < options.length ; i++){
        optionsBar.removeChild(options[i]);
    }
}

export let Characters = new Map([
        ['none',' '],
        ['Шики','ACT_1/MainCharacter.png'],
        ['Мидзу','gif-girl/1g.gif'],
        //ACT2
        ['Мику', 'gif-girl/2g.gif'],
        //ACT3
        ['Рика', 'gif-girl/rika.gif'],
        ['Ютори', 'gif-girl/ytori.gif'],
        //ACT4
        ['Шидзу', 'gif-girl/shidzu.gif'],
        //ACT5
        ['Хроно', 'gif-girl/hrono.gif']
    ]
)

export let Background = new Map([
    ['Bathroom','ACT_1/Bathroom.png'],
    ['Bedroom','ACT_1/Bedroom_Evening.png'],
    ['Kitchen','ACT_1/Kitchen_Day.png'],
    //ACT 2 
    ['Street', 'ACT_2/street.png'],
    //ACT3
    ['Classroom', 'ACT_3/smp_classroom1_evening1.png'],
    //ACT4
    ['Club', 'ACT_4/club_room.png'],
    //ACT5
    ['Hallway', 'ACT_5/smp_hallway_evening1.png'],
    ['Dark', 'ACT_5/dark_smoke_background.jpg']
])