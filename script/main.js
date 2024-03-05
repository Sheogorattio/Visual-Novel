'use strict'

import * as Page from './basic_visual.js'
import {Dialogue} from './dialogue.js'
import * as File from './dialogue_operatoins.js'

const textdiv = Page.CreateTextHolder();
const optionsBar = Page.CreateOptionsBar();
const characterDiv = Page.CreatePerson();

document.body.appendChild(characterDiv);
document.body.appendChild(optionsBar);
document.body.appendChild(textdiv);



const TEXT_HOLDER = textdiv.querySelector('p'), AUTHOR_HOLDER = textdiv.querySelector('.speaker-name');
const CONTROL_NEXT = document.querySelector('.next'), CONTROL_PREV = document.querySelector('.prev');

TEXT_HOLDER.textContent = "Нажмите кнопку ДАЛЕЕ, чтобы продолжить";

//let line =Dialogue.getNextLine();

// Page.PrintName(line.author, AUTHOR_HOLDER);
// Page.PrintText(line.say, TEXT_HOLDER);

CONTROL_NEXT.addEventListener('click', ()=>{
  Page.CleanFields(AUTHOR_HOLDER,TEXT_HOLDER);
  let line = Dialogue.getNextLine();
  if(line.hasOwnProperty('background')){
    File.CommandCreator.create('loadImage', Page.Background.get(line.background), null, null).execute();
  }
  if(line.hasOwnProperty('spawn')){
    File.CommandCreator.create('loadImage', null, Page.Characters.get(line.spawn), characterDiv.querySelector('img')).execute();
  }
  if(line.hasOwnProperty('chioses')){
    File.CommandCreator.create('choose', line.chioses,optionsBar).execute();
  }
  if(line.hasOwnProperty('nextIndex')){
    File.CommandCreator.create('changeIndex', line.nextIndex).execute();
  }
  File.CommandCreator.create('say', line.author,line.say,AUTHOR_HOLDER,TEXT_HOLDER).execute();
})

CONTROL_PREV.addEventListener('click', ()=>{
  Page.CleanFields(AUTHOR_HOLDER,TEXT_HOLDER);
  let line =Dialogue.getPrevLine();
  if(line.hasOwnProperty('background')){
    File.CommandCreator.create('loadImage', Page.Background.get(line.background), null, null).execute();
  }
  if(line.hasOwnProperty('spawn')){
    File.CommandCreator.create('loadImage', null, Page.Characters.get(line.spawn), characterDiv.querySelector('img')).execute();
  }
  if(line.hasOwnProperty('chioses')){
    File.CommandCreator.create('choose', line.chioses,optionsBar).execute();
  }
  if(line.hasOwnProperty('nextIndex')){
    File.CommandCreator.create('changeIndex', line.nextIndex).execute();
  }
  File.CommandCreator.create('say', line.author,line.say,AUTHOR_HOLDER,TEXT_HOLDER).execute();
})