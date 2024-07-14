let countries = [];

function renderCountries() {
  contentArea.innerHTML = countries.map(countries => `<div class="content" id="content"><a href="#"><img src="${countries.flags.svg}"></a>
          <h2 class="">${countries.name.common}</h2>
          <h3 class="population" id="population">Population: ${countries.population}</h3>
          <h3>Region: ${countries.region}</h3>
          <h3>Capital: ${countries.capital}</h3></div>`).join('');
}

function init() {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => {
      countries = res;
      renderCountries();
    })
}

init();