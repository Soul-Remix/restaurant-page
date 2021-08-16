import crema from "../images/pizza/crema.png";
import carne from "../images/pizza/carne.png";
import colorato from "../images/pizza/colorato.png"
import pomodoro from "../images/pizza/pomodoro.png"
import pepe from "../images/pizza/pepe.png"
import disgustoso from "../images/pizza/disgustoso.png"

export default function () {
  const page = document.querySelector("#content");
  const main = document.createElement("main");
  main.classList.add("main-menu");
  page.appendChild(main);
  main.appendChild(
    createCard(
      "Crema",
      crema,
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    )
  );
  main.appendChild(
    createCard(
      "Carne",
      carne,
      'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli'
    )
  );
  main.appendChild(
    createCard(
      "Colorato",
      colorato,
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );
  main.appendChild(
    createCard(
      "Pomodoro",
      pomodoro,
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    )
  );
  main.appendChild(
    createCard(
      "Pepe",
      pepe,
      "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    )
  );
  main.appendChild(
    createCard(
      "Disgustoso",
      disgustoso,
      "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    )
  );
}

function createCard(id, image, text) {
  const card = document.createElement("div");
  card.id = id;
  card.classList.add("menu-card");

  const img = new Image();
  img.src = image;
  img.alt = "";
  img.classList.add('menu-img')

  const h2 = document.createElement("h2");
  h2.innerHTML = id;

  const para = document.createElement("p");
  para.innerHTML = text;

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(para);

  return card;
}
