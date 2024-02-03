function showPoem(response) {
  console.log(response.data.answer);
  let newPoem = response.data.answer;

  new Typewriter("#poem", {
    strings: newPoem,
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let key = "019add0a90bedf4acb7o19723ceat3f3";
  let context =
    "User instructions are: You are a romantiv Poem expert and love to write short poems. Your mission is to generate a 4 line poem. Make sure to follow the user instructions.";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let poemText = document.querySelector("#poem");
  poemText.innerHTML = "Processing...";

  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
