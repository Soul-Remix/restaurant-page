export default function () {
  const page = document.querySelector("#content");
  const main = document.createElement("main");
  main.classList.add("about-main");
  page.appendChild(main);

  const paraNum = document.createElement("p");
  paraNum.classList.add("about-p");
  paraNum.innerHTML = "Phone: 123 456 789";

  const paraAdd = document.createElement("p");
  paraAdd.innerHTML = "Addres: 8735 Essex St. Auburn, NY";

  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9841290040367!2d-73.99048918469468!3d40.71836587933125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25980d9e5e40b%3A0x6c9bcbd159926676!2sEssex%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2s!4v1625150797463!5m2!1sen!2s"
  );
  iframe.setAttribute("width", "500");
  iframe.setAttribute("height", "400");
  iframe.setAttribute("style", "border:0;");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("loading", "lazy");

  main.appendChild(paraNum)
  main.appendChild(paraAdd)
  main.appendChild(iframe)
}
