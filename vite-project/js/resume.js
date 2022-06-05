import "../styles/resume.css";
import { experience } from "./array";

const DOMSelectors = {
  exp: document.querySelector(".exp"),
  displayCard: document.querySelector("#display-card"),
};
function displayCard(experience) {
  return `
    <div class = "organization">
    <div class = "images">
    <img src="${experience.img}">
    </div>
    <div class = "texts">
    <h2>${experience.name}</h2>
    <p>${experience.description}</p>
    </div>
    </div>;`;
}
/*Cards on Landing Page*/
function newCard() {
  experience.forEach((experience) => {
    console.log(experience);
    DOMSelectors.exp.insertAdjacentHTML("afterbegin", displayCard(experience));
  });
}
newCard();
