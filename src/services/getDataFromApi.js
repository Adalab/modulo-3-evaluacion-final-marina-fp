const getDataFromApi = () => {
  return fetch("//rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
          origin: character.origin.name,
          location: character.location.name,
          status: character.status,
          episodes: character.episode.length,
        };
      });
    });
};
export default getDataFromApi;
