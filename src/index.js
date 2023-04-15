import './style.css';
import { broadcast, populate } from './broadcast.js';

// Update scores when refresh button is pressed

const refreshBtn = document.getElementById('refresh');
const loadScores = async () => {
  const ulContainer = document.querySelector('.scoreList');
  ulContainer.replaceChildren();
  const superHeroes = await populate();
  for (let i = 0; i < superHeroes.result.length; i += 1) {
    const li = document.createElement('li');
    const sparator = ': ';
    li.textContent = superHeroes.result[i].user + sparator + superHeroes.result[i].score;
    ulContainer.appendChild(li);
  }
};
refreshBtn.addEventListener('click', loadScores);

// Submit and Update scores when submit button is pressed

const submitBtn = document.getElementById('submit');
const broadcastNewScore = async () => {
  const name = document.querySelector('#name');
  const nameValue = name.value;
  const score = document.querySelector('#score');
  const scoreValue = score.value;
  const raw = JSON.stringify({
    user: nameValue,
    score: scoreValue,
  });
  await broadcast(raw);
  name.value = '';
  score.value = '';
  loadScores();
};
submitBtn.addEventListener('click', broadcastNewScore);

// Display scores when page load

loadScores();
