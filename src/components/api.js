//renderAllPlayers
// render all players

const playerContainer = document.getElementById("all-players-container");
const newPlayerFormContainer = document.getElementById("new-player-form");

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2302-ACC-ET-WEB-PT-B";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/${players}`);
        const players = await response.json();
        console.log(players);
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
  }
};

const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch (`${APIURL}/${playerId}`);
        const singlePlayer = await response.json(); 
        console.log(singlePlayer); 
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch (`${APIURL}`, {
      method:"POST",
      body: JSON.stringify(playerObj),
  });
  const newPlayer = await response.json();
  console.log(newPlayer);
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "DELETE",
  
  });
  const result = await response.json();
  console.log(result);
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players.
 *
 * Then it takes that larger string of HTML and adds it to the DOM.
 *
 * It also adds event listeners to the buttons in each player card.
 *
 * The event listeners are for the "See details" and "Remove from roster" buttons.
 *
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player.
 *
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster.
 *
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */

const renderAllPlayers = (playerList) => {
  if (!playerList || playerList.length === 0) {
    playerContainer.innerHTML = "<h3>No recipes found</h3>";
    return;
  }

  playerContainer.innerHTML = "";

  playerList.forEach((player) => {
    const playerElement = document.createElement("div");
    playerElement.classList.add("players");
    playerElement.innerHTML = `
      <h4>${player.name}</h4>
      <p> ${player.breed}</p>
      <p> ${player.imageUrl}</p>
      <p> ${player.teamId}</p>
      <button class ="delete-button" data-id="${player.id}">Remove</button>
      <button class ="detail-button" data-id="${player.id}">See Details/button>
      `;
  });

  playerContainer.appendChild(playerElement);

  let deleteButton = playerElement.querySelector(".delete-button");
  deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
    removePlayer(player.id);
  });

  let detailButton = playerElement.querySelector(".detail-button");
  detailButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderSinglePlayer(player.id);
  });
};
/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */

init();