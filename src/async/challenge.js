import { fetchData } from "../utils/fetchData.js";

const api = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${api}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction(api);
