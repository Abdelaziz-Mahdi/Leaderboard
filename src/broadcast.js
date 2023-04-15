// send new score to API

export const broadcast = async (raw) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dV4aWISG7S2Gi5e0alOq/scores';
  const request = new Request(requestURL);
  await fetch(request, requestOptions);
}
