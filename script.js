const footballTeam = {
  team: "Manchester City",
  year: 2025,
  headCoach: "Pep Guardiola",
  players: [
    {
  name: "Erling Haaland",
  position: "forward",
  isCaptain: false
  },

   {
  name: "Rayan Cherki",
  position: "midfielder",
  isCaptain: false
  },

   {
  name: "Phil Foden",
  position: "midfielder",
  isCaptain: false
  },

   {
  name: "Bernado Silva",
  position: "midfielder",
  isCaptain: true
  },

   {
  name: "Jeremy Doku",
  position: "forward",
  isCaptain: false
  },

   {
  name: "Oscar Bob",
  position: "forward",
  isCaptain: false
  },

   {
  name: "Abdulkodir Khusanov",
  position: "defender",
  isCaptain: false
  },

   {
  name: "John Stones",
  position: "defender",
  isCaptain: false
  },

   {
  name: "Gianluigi Donnarumma",
  position: "goalkeeper",
  isCaptain: false
  },

   {
  name: "Nico O'reily",
  position: "defender",
  isCaptain: false
  },

   {
  name: "Tijani Reinjders",
  position: "midfielder",
  isCaptain: false
  },

   {
  name: "Omar Marmoush",
  position: "forward",
  isCaptain: false
  },

   {
  name: "Ait Nouri",
  position: "defender",
  isCaptain: false
  },

   {
  name: "Nico Williams",
  position: "midfielder",
  isCaptain: false
  },

   {
  name: "Rodrigo Hernandez",
  position: "midfielder",
  isCaptain: false
  },
  ]

}

document.getElementById("head-coach").textContent = footballTeam.headCoach;

document.getElementById("team").textContent = footballTeam.team;

document.getElementById("year").textContent = footballTeam.year;

const playersCard = document.getElementById("player-cards");
function displayPlayers(players) {
playersCard.innerHTML = players
  .map(player => `
    <div class="player-card">
      <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
      <p>Position: ${player.position}</p>
    </div>
  `)
  .join("");
}

displayPlayers(footballTeam.players)

  const players = document.getElementById("players");

  players.addEventListener("change", (event) => {
  const selectedPosition = event.target.value;


    if (selectedPosition === "all") {
      return displayPlayers(footballTeam.players);
    }

    else {
      const filteredPlayers = footballTeam.players.filter(player => {
   return player.position === selectedPosition
      });
      displayPlayers(filteredPlayers);
    };
      });