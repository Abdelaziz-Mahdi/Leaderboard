// get scores from API

export default async function populate() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const requestURL =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dV4aWISG7S2Gi5e0alOq/scores';
  const request = new Request(requestURL);
  const response = await fetch(request, requestOptions);
  const superHeroesText = await response.text();
  const superHeroes = JSON.parse(superHeroesText);
  return superHeroes;
}
