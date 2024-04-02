async function getAllCountries() {
  const results = [];

  const data = await fetch('https://ih-countries-api.herokuapp.com/countries');
  results.push(await data.json());


  return results;
}

export { getAllCountries };
