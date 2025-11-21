let cities = [];
let countries = [];
let cityNames = [];

fetch("../utilities/city.json")
  .then((response) => response.json())
  .then((data) => {
    countries = data.countries;

    countries.forEach((country) => {
      cities.push(...country.cities);
      // console.log(country.cities);
    });

    cityNames = cities.map((city) => city.city_name);

    // console.log(cityNames);
  })
  .catch((error) => console.log(error));

export default cityNames;
