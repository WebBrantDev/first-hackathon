const baseURL = "https://api.openbrewerydb.org/breweries?by_city=";
// const geoIpUrl = "https://api.freegeoip.app/json/?apikey=" + geoApiKey;
// const baseZipURL = "https://api.openbrewerydb.org/breweries?by_postal=";
const form = document.querySelector(".cta__form");

// axios
//   .get(geoIpUrl)
//   .then((el) => {
//     const currentZip = el.data.zip_code;
//     axios
//       .get(baseZipURL + currentZip)
//       .then((el) => {
//         let biggerArray = [];
//         const cardContainer = document.querySelector(".card-container");

//         console.log(el.data.length);
//         for (i = 0; i < el.data.length; i++) {
//           const arr = [];
//           console.log(i);

//           cardContainer.innerText = "";

//           const name = el.data[i].name;
//           const breweryType = el.data[i].brewery_type;
//           const capitalizeFirstLetter = (string) =>
//             string.charAt(0).toUpperCase() + string.slice(1);
//           const breweryFinal = capitalizeFirstLetter(breweryType);
//           const phone = el.data[i].phone;
//           const website = el.data[i].website_url;

//           if (name && breweryFinal && phone && website) {
//             arr.push(name, breweryFinal, phone, website);
//             biggerArray.push(arr);
//             console.log(biggerArray);
//           }

//           // function checkEmpty(array) {
//           //   for (j = 0; j < array.length; j++) {
//           //     // console.log("woooooo");
//           //     if (array[j]) {

//           //     }
//           //   }

//           //   // const nameEl = document.createElement("li");
//           //   // const addressEl = document.createElement("li");
//           //   // const phoneEl = document.createElement("li");
//           //   // const websiteEl = document.createElement("li");

//           //   // nameEl.innerText = name;
//           //   // addressEl.innerText = address;
//           //   // phoneEl.innerText = phone;
//           //   // websiteEl.innerText = website;

//           //   // listEl.appendChild(nameEl);
//           //   // listEl.appendChild(addressEl);
//           //   // listEl.appendChild(phoneEl);
//           //   // listEl.appendChild(websiteEl);
//           // }

//           // checkEmpty(arr);
//           // console.dir(checkEmpty);
//         }
//         let randomBrewery =
//           biggerArray[Math.floor(Math.random() * biggerArray.length)];
//         console.log(randomBrewery);
//         const generateBrewery = function (array) {
//           const listEl = document.createElement("ul");

//           const nameEl = document.createElement("li");
//           const breweryEl = document.createElement("li");
//           const phoneEl = document.createElement("li");
//           const websiteEl = document.createElement("li");

//           nameEl.classList.add("card-name");
//           breweryEl.classList.add("card-brewery");
//           phoneEl.classList.add("card-phoneEl");
//           websiteEl.classList.add("card-websiteEl");

//           nameEl.innerText = array[0];
//           breweryEl.innerText = array[1];
//           phoneEl.innerText = array[2];
//           websiteEl.innerText = array[3];

//           listEl.appendChild(nameEl);
//           listEl.appendChild(breweryEl);
//           listEl.appendChild(phoneEl);
//           listEl.appendChild(websiteEl);

//           // const listItem = document.createElement("li");
//           // listItem.innerText = array[j];
//           // listEl.appendChild(listItem);

//           cardContainer.appendChild(listEl);
//         };
//         generateBrewery(randomBrewery);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const submitHandler = (input) => {
  let formattedRequest;
  if (!input.includes(" ")) {
    formattedRequest = baseURL + input;
    // console.log(formattedRequest);
  } else {
    formattedRequest = baseURL + input.replace(/\s+/g, "_");
    // console.log(formattedRequest);
  }

  axios
    .get(formattedRequest)
    .then((el) => {
      let biggerArray = [];
      const cardContainer = document.querySelector(".card-container");

      // console.log(el.data.length);
      for (i = 0; i < el.data.length; i++) {
        const arr = [];
        // console.log(i);

        cardContainer.innerText = "";

        const name = el.data[i].name;
        const breweryType = el.data[i].brewery_type;
        const capitalizeFirstLetter = (string) =>
          string.charAt(0).toUpperCase() + string.slice(1);
        const breweryFinal = capitalizeFirstLetter(breweryType);
        const phone = el.data[i].phone;
        const website = el.data[i].website_url;

        if (name && breweryFinal && phone && website) {
          arr.push(name, breweryFinal, phone, website);
          biggerArray.push(arr);
          // console.log(biggerArray);
        }

        // function checkEmpty(array) {
        //   for (j = 0; j < array.length; j++) {
        //     // console.log("woooooo");
        //     if (array[j]) {

        //     }
        //   }

        //   // const nameEl = document.createElement("li");
        //   // const addressEl = document.createElement("li");
        //   // const phoneEl = document.createElement("li");
        //   // const websiteEl = document.createElement("li");

        //   // nameEl.innerText = name;
        //   // addressEl.innerText = address;
        //   // phoneEl.innerText = phone;
        //   // websiteEl.innerText = website;

        //   // listEl.appendChild(nameEl);
        //   // listEl.appendChild(addressEl);
        //   // listEl.appendChild(phoneEl);
        //   // listEl.appendChild(websiteEl);
        // }

        // checkEmpty(arr);
        // console.dir(checkEmpty);
      }
      let randomBrewery =
        biggerArray[Math.floor(Math.random() * biggerArray.length)];
      // console.log(randomBrewery);
      const generateBrewery = function (array) {
        const listEl = document.createElement("ul");
        const nameLink = document.createElement("a");
        nameLink.setAttribute("href", array[3]);
        const nameEl = document.createElement("li");
        const breweryEl = document.createElement("li");
        const phoneEl = document.createElement("li");
        // const websiteEl = document.createElement("li");

        nameEl.classList.add("card-name");
        breweryEl.classList.add("card-brewery");
        phoneEl.classList.add("card-phoneEl");
        // websiteEl.classList.add("card-websiteEl");

        nameEl.innerText = array[0];
        breweryEl.innerText = array[1];
        phoneEl.innerText = array[2];
        // websiteEl.innerText = array[3];

        listEl.appendChild(nameLink);
        nameLink.appendChild(nameEl);

        // listEl.appendChild(nameEl);
        listEl.appendChild(breweryEl);
        listEl.appendChild(phoneEl);
        // listEl.appendChild(websiteEl);

        // const listItem = document.createElement("li");
        // listItem.innerText = array[j];
        // listEl.appendChild(listItem);

        cardContainer.appendChild(listEl);
      };
      generateBrewery(randomBrewery);
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
