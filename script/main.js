'use strict'

import * as Page from './basic_visual.js'
import * as Dialogue from './dialogue.js'
import * as File from './dialogue_operatoins.js'

let MainItems ={
  lunchbox : false,//
  keychain : false,//
  talisman : false,
  chocolate : false,//
  bracelet : false,//
}
let Health = 1;


const textdiv = Page.CreateTextHolder();
const optionsBar = Page.CreateOptionsBar();
const characterDiv = Page.CreatePerson();


document.body.appendChild(characterDiv);
document.body.appendChild(optionsBar);
document.body.appendChild(textdiv);

const TEXT_HOLDER = textdiv.querySelector('p'), AUTHOR_HOLDER = textdiv.querySelector('.speaker-name');
const CONTROL_NEXT = document.querySelector('.next'), CONTROL_PREV = document.querySelector('.prev');
const SAVE = document.querySelector('.save');

TEXT_HOLDER.textContent = "Нажмите кнопку ДАЛЕЕ, чтобы продолжить";

let ACT_SEQ_COUNT = 0;
let ActArr = [Dialogue.GetAct1(),Dialogue.GetAct2(),Dialogue.GetAct3(),Dialogue.GetAct4(),Dialogue.GetAct5()]
let Act = ActArr[ACT_SEQ_COUNT];

SAVE.addEventListener('click', ()=>{
  localStorage.setItem('bracelet', MainItems.bracelet);
  localStorage.setItem('chocolate', MainItems.chocolate);
  localStorage.setItem('keychain', MainItems.keychain);
  localStorage.setItem('lunchbox', MainItems.lunchbox);
  localStorage.setItem('talisman', MainItems.talisman);
  localStorage.setItem('health', Health);
  localStorage.setItem('dialogue_number', ACT_SEQ_COUNT);
  localStorage.setItem('line_index', Act.counter);
})
SAVE.click();

CONTROL_NEXT.addEventListener('click', ()=>{
  Page.CleanFields(AUTHOR_HOLDER,TEXT_HOLDER);
  Page.ClearOptions(optionsBar);
  let line = Act.getNextLine();
  HandleLine(line);
})

CONTROL_PREV.addEventListener('click', ()=>{
  Page.CleanFields(AUTHOR_HOLDER,TEXT_HOLDER);
  Page.ClearOptions(optionsBar);
  let line =Act.getPrevLine();
  HandleLine(line);
})

function HandleLine(line){
  if(line.hasOwnProperty('getItem')){
    MainItems = File.CommandCreator.create('getItem',line.getItem, MainItems).execute();
    console.log(MainItems);
  }
  if(line.hasOwnProperty('background')){
    console.log(Page.Background.get(line.background));
    File.CommandCreator.create('loadImage', Page.Background.get(line.background), null, null).execute();
  }
  if(line.hasOwnProperty('spawn')){
    //console.log('spawn');
    File.CommandCreator.create('loadImage', null, Page.Characters.get(line.spawn), characterDiv.querySelector('img')).execute();
  }
  if(line.hasOwnProperty('chioses')){
    Act.min_counter = Act.counter;
    File.CommandCreator.create('choose', line.chioses,optionsBar).execute();
  }
  if(line.hasOwnProperty('nextIndex')){
    console.log(Dialogue.Dialogue.counter)
    Act = File.CommandCreator.create('changeIndex', line.nextIndex, Act).execute();
    console.log(Dialogue.Dialogue.counter)
  }
  if(line.hasOwnProperty('damage')){
    if(Health>1){
      Health--;
    }
    else{
      ACT_SEQ_COUNT=0;
      Act = ActArr[ACT_SEQ_COUNT];
      Dialogue.Dialogue.counter = -1;
      Dialogue.Dialogue.min_counter =0;
      CONTROL_NEXT.click();
    }
  }
  File.CommandCreator.create('say', line.author,line.say,AUTHOR_HOLDER,TEXT_HOLDER).execute();
  if(line.hasOwnProperty('final')){
    if(ACT_SEQ_COUNT === ActArr) ACT_SEQ_COUNT = 0;
    else Act = ActArr[++ACT_SEQ_COUNT];
    Dialogue.Dialogue.counter = -1;
    Dialogue.Dialogue.min_counter =0;
  }
}