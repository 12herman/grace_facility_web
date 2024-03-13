const NavContainer = document.querySelector(".nav-sec");
let Links = document.querySelectorAll(".nav-sec li");
let contents = document.querySelectorAll(".content-sec span");

NavContainer.addEventListener("click", ClickNav);

function ClickNav(e) {
  if (e.target.localName === "img" || e.target.localName === "li") {
    if (e.target.localName === "img") {
      Links.forEach((link) => link.classList.remove("active"));
      e.target.parentNode.classList.add("active");

      let DataSet = e.target.attributes[0].value;
      let contentElement = document.getElementsByClassName(`${DataSet}`)[0];
      contents.forEach((content) => content.classList.remove("active"));
      contentElement.classList.add("active");
    } else {
      Links.forEach((link) => link.classList.remove("active"));
      e.target.classList.add("active");

      let DataSet = e.target.attributes[0].value;
      let contentElement = document.getElementsByClassName(`${DataSet}`)[0];
      contents.forEach((content) => content.classList.remove("active"));
      contentElement.classList.add("active");
    }
  }
}
