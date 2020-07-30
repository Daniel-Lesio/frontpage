// import './style.scss';

import './style.scss';
import jump from 'jump.js'
import anime from 'animejs'
import  Vue from 'vue'
import Gallery from './components/Gallery.vue'
new Vue({
    el : "#gallery",
    render : h => h(Gallery)
})


const links  = document.querySelectorAll("a[href]")
links.forEach(link=>{
    link.addEventListener("click" ,(e)=>{
        e.preventDefault();
        let x = e.target.getAttribute('href')
        jump(x)
    })
})

//  650 / 940

/**
 * Scrolling
 */

// const jumpBtn = document.querySelector(".jump")
// jumpBtn.addEventListener("click",()=>{
//     jump("#hero")
// })
const jbtns = document.querySelectorAll('.gohero')
jbtns.forEach(jb => {
    jb.addEventListener("click",()=>{
        jump("#hero")
    })
});

const scrollIndicator = document.querySelector("#scroll-indicator")
 
let last_known_scroll_position = 0;
let ticking = false;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const sections = document.querySelectorAll('section')

const infoSection = document.querySelector("#info")



function doSomething(scroll_pos) {
    let infoY = infoSection.getBoundingClientRect().top
    let sectionInfo = document.querySelector('#info').getBoundingClientRect()
    let scrolled = (scroll_pos / height) * 100;
    scrollIndicator.style.cssText = `width : ${scrolled}%`
    console.log('infoY : ' ,  infoY)
    // console.log("scrolled : " , scrolled)

    


    if(scroll_pos>150){
        anime({
            targets : '.jump',
            translateX : 0
        })
    }
    else{
        anime({
            targets : '.jump',
            translateX : -200
        })
    }
}

console.log(last_known_scroll_position)
window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});


