console.log("Scricpt is loaded");
const hambergure = document.getElementById("hambergure");
const header = document.querySelector("header")
function open() {
    hambergure.classList.toggle("change");
    header.classList.toggle("open")
}
hambergure.addEventListener("click", open)

const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", open)
})