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
        console.log(i);

        const name = el.data[i].name;
        const address = el.data[i].address;
        const phone = el.data[i].phone;
        const website = el.data[i].website_url;

        arr.push(name, address, phone, website);
        console.log(arr);

        const listEl = document.createElement("ul");

        function checkEmpty(array) {
          for (j = 0; j < array.length; j++) {
            console.log("woooooooooooooo");
            if (array[j]) {
              const listItem = document.createElement("li");
              console.log(array[j]);
              listItem.innerText = array[j];
              listEl.appendChild(listItem);
              const cardContainer = document.querySelector(".card-container");
              cardContainer.appendChild(listEl);
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
        }

        checkEmpty(arr);
        console.dir(checkEmpty);
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
