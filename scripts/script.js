const baseURL = "https://api.openbrewerydb.org/breweries?per_page=10&by_city=";
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
      console.log(el.data.length);
      for (i = 0; i < el.data.length; i++) {
        const arr = [];

        const name = el.data[i].name;
        const address = el.data[i].address;
        const phone = el.data[i].phone;
        const website = el.data[i].website_url;

        arr.push(name, address, phone, website);
        console.log(arr);

        const listEl = document.createElement("ul");

        function checkEmpty(array) {
          for (i = 0; i < array.length; i++) {
            if (array[i]) {
              const listItem = document.createElement("li");
              listItem.innerText = array[i];
              listEl.appendChild(listItem);
            }
          }

          // const nameEl = document.createElement("li");
          // const addressEl = document.createElement("li");
          // const phoneEl = document.createElement("li");
          // const websiteEl = document.createElement("li");

          // nameEl.innerText = name;
          // addressEl.innerText = address;
          // phoneEl.innerText = phone;
          // websiteEl.innerText = website;

          // listEl.appendChild(nameEl);
          // listEl.appendChild(addressEl);
          // listEl.appendChild(phoneEl);
          // listEl.appendChild(websiteEl);

          const cardContainer = document.querySelector(".card-container");
          cardContainer.appendChild(listEl);
        }
      }
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
