import { fetchData } from "../utils/fetchData.js";

const api = "https://rickandmortyapi.com/api/character/";

fetchData(api)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${api}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    console.log(data.origin.url);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
  })
  .catch((err) => console.log(err));
