const baseURL = "https://api.openbrewerydb.org/breweries?by_city=";
const form = document.querySelector(".cta__form");

const submitHandler = (input) => {
  let formattedRequest;
  if (!input.includes(" ")) {
    formattedRequest = baseURL + input;
    console.log(formattedRequest);
  } else {
    formattedRequest = baseURL + input.replace(/\s+/g, "_");
    console.log(formattedRequest);
  }

  axios
    .get(formattedRequest)
    .then((el) => {
      console.log(el.data[3].name);
    })
    .catch((err) => {
      console.log(err);
    });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.querySelector(".cta__input").value;
  submitHandler(userInput);
});
