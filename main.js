// 1-getElementById
const bolt=document.getElementById('bolt1');
const shrift=document.getElementById('shrift1');
const title1=document.getElementById('title1');
const card1=document.getElementById('card1');
const small1=document.getElementById('small1');
const vidio1=document.getElementById('vidio1');
const list1=document.getElementById('list1');
const item1=document.getElementById('item1');
const text1=document.getElementById('text1');
const matn1=document.getElementById('matn1');
// 2-getElementsByClassName
let bolt2=document.getElementsByClassName('bolt2');
let shrift2=document.getElementsByClassName('shrift2');
let title2=document.getElementsByClassName('title2');
let card2=document.getElementsByClassName('card2');
let small2=document.getElementsByClassName('small2');
let vidio2=document.getElementsByClassName('vidio2');
let list2=document.getElementsByClassName('list2');
let item2=document.getElementsByClassName('item2');
let text2=document.getElementsByClassName('text2');
let matn2=document.getElementsByClassName('matn2');
// 3-querySelector
const b=document.querySelector('p');
const i=document.querySelector('i');
const title3=document.querySelector('#title3');
const card3=document.querySelector('#card3');
const small3=document.querySelector('.small3');
const video3=document.querySelector('.video3');
// 4-getElementsByTagName
const list4=document.getElementsByTagName('ul')
const item4=document.getElementsByTagName('li')
const text4=document.getElementsByTagName('p')
const matn4=document.getElementsByTagName('q')
// 5-onclick
const container=document.getElementsByClassName('container');
const title=document.getElementById('title');
const img=document.querySelector('.img');
const text=document.querySelector('p');
let btn=document.getElementById('btn');
const knopka=document.getElementById('knopka');
function h1(){
    title.style.fontSize='50px';
    title.style.color='red';
}
function p(){
    text.style.color='green';
    text.style.fontSize='20px';
}
function button(){
    btn.style.backgroundColor='green';
    btn.style.color='white';
    btn.style.width='150px';
    btn.style.height='50px';
    btn.style.fontSize='25px';
    btn.style.borderRadius='8px';
}
function btn1(){
    knopka.style.backgroundColor='red';
    knopka.style.color='white';
    knopka.style.width='150px';
    knopka.style.height='50px';
    knopka.style.fontSize='25px';
    knopka.style.borderRadius='8px';
}