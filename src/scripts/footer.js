export default function() {
    const page = document.querySelector("#content");

    const footer = document.createElement('footer')
    page.appendChild(footer)

    const para = document.createElement('p')
    para.classList.add('footer-p')
    para.innerHTML = 'Copyright © 2021 J.A.Z'
    
    footer.appendChild(para)
}