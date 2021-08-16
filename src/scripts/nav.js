export default function () {
  const page = document.querySelector("#content");

  const nav = document.createElement("nav");
  page.appendChild(nav);

  const logo = document.createElement('h1')
  logo.innerHTML = 'Pizzareli'
  logo.classList.add('logo')
  nav.appendChild(logo)

  const ul = document.createElement("ul");
  nav.appendChild(ul);

  const home = document.createElement("li");
  const homeBtn = document.createElement('button')
  homeBtn.innerHTML = "Home";
  homeBtn.classList.add('navBtn')
  homeBtn.id = 'home'
  home.appendChild(homeBtn)

  const menu = document.createElement("li");
  const menuBtn = document.createElement('button')
  menuBtn.innerHTML = "Menu";
  menuBtn.classList.add('navBtn')
  menuBtn.id = 'menu'
  menu.appendChild(menuBtn)

  const about = document.createElement("li");
  const aboutBtn = document.createElement('button')
  aboutBtn.innerHTML = "About";
  aboutBtn.classList.add('navBtn')
  aboutBtn.id = 'about'
  about.appendChild(aboutBtn)

  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(about);
}
