const getBordersOfCountry = (countryList, countryCode) => {
  const { name } = countryList.find(
    (country) => country.alpha3Code === countryCode
  );

  return {
    alpha3Code: countryCode,
    name,
  };
};

export const getAllCountries = async () => {
  const response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );
  const data = await response.json();

  const countryList = data.map((country) => ({
    _id: country._id,
    flag: "https://flagpedia.net/data/flags/icon/72x54/" + country.alpha2Code.toLowerCase() + ".png",
    name: country.name.official,
    area: country.area,
    capital: country.capital[0],
    alpha2Code: country.alpha2Code,
    alpha3Code: country.alpha3Code,
    borders: country.borders,
  }));

  const enrichedCountries = countryList.map(country => ({
    ...country,
    borders: country.borders.map(code => getBordersOfCountry(countryList, code))
  })).sort((a, b) => a.name.localeCompare(b.name));
  
  return enrichedCountries;
  
};

/*async function getAllCountries() {
  const results = [];

  const data = await fetch('https://ih-countries-api.herokuapp.com/countries');
  results.push(await data.json());


  return results;
}

export { getAllCountries };*/