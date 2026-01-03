const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const country = document.querySelector('.country');
const scoreInput = document.querySelector('.score');
const details = document.querySelector('.player-details');

const feedback = document.createElement('div');
feedback.className = 'feedback';
document.body.append(feedback);

let players = [];

function addPlayer() {
  if (!firstName.value || !lastName.value || !country.value || scoreInput.value === '')
    {
    feedback.textContent = 'All fields are required';
    return;
  }

  feedback.textContent = '';

  const score = Number(scoreInput.value);

  players.push({
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    score: score
  });

  sortPlayers(players);
  renderPlayers();

  firstName.value = '';
  lastName.value = '';
  country.value = '';
  scoreInput.value = '';
}

function sortPlayers(players) {
  players.sort((a, b) => b.score - a.score);
}

function renderPlayers() {
  details.innerHTML = '';

  players.forEach(player => {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player';

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name'
    const countryDiv = document.createElement('div');
    const scoreDiv = document.createElement('div');
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    nameDiv.textContent = `${player.firstName} ${player.lastName}`;
    countryDiv.textContent = player.country;
    scoreDiv.textContent = player.score;

    const addBtn = document.createElement('button');
    addBtn.textContent = '+5';

    const minusBtn = document.createElement('button');
    minusBtn.textContent = '-5';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';

    addBtn.onclick = () => {
      player.score += 5;
      sortPlayers(players);
      renderPlayers();
    };

    minusBtn.onclick = () => {
      player.score -= 5;
      sortPlayers(players);
      renderPlayers();
    };

    deleteBtn.onclick = () => {
      players = players.filter(p => p.id !== player.id);
      renderPlayers();
    };

    actionsDiv.append(addBtn, minusBtn, deleteBtn);
    playerDiv.append(nameDiv, countryDiv, scoreDiv, actionsDiv);
    details.appendChild(playerDiv);
  });
}
