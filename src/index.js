import './styles/style.css'
import createMain from './scripts/main.js' 
import createMenu from './scripts/menu.js'
import createAbout from './scripts/about.js'
import createNav from "./scripts/nav.js";


createNav()
createMain()


const home = document.getElementById('home')
const menu = document.getElementById('menu')
const about = document.getElementById('about')
const page = document.getElementById('content')


home.addEventListener('click',function(e) {
    const main = document.querySelector('main')
    page.removeChild(main)
    createMain()
    home.classList.add('nav-active')
    menu.classList.remove('nav-active')
    about.classList.remove('nav-active')
    
})

menu.addEventListener('click',function(e) {
    const main = document.querySelector('main')
    page.removeChild(main)
    createMenu()
    home.classList.remove('nav-active')
    menu.classList.add('nav-active')
    about.classList.remove('nav-active')
    
})

about.addEventListener('click',function(e) {
    const main = document.querySelector('main')
    page.removeChild(main)
    createAbout()
    home.classList.remove('nav-active')
    menu.classList.remove('nav-active')
    about.classList.add('nav-active')
    
})

