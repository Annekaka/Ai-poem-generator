function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Some text",
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
