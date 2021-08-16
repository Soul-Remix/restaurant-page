import icon from "../images/pizza-main.jpeg"

export default function () {
  const page = document.querySelector('#content')
  const main = document.createElement('main')
  main.classList.add('main')

  page.appendChild(main)

  const card = document.createElement('div')
  card.classList.add('main-card')
  main.appendChild(card)

  const para1 = document.createElement('p')
  const para2 = document.createElement('p')
  const img = new Image()
  const para3 = document.createElement('p')

  para1.innerHTML = 'Best pizza in the country'
  para2.innerHTML = 'Made with love since 1940'
  para3.innerHTML = 'order online or visit us'

  img.src = icon
  img.classList.add('main-img')
  
  card.appendChild(para1)
  card.appendChild(para2)
  card.appendChild(img)
  card.appendChild(para3)
}
