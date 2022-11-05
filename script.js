function createGames(firstTeam, hour, secondTeam) {
  return `   
           <li>
              <img src="./assets/icon-${firstTeam}.svg" alt="Bandeira ${firstTeam}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${secondTeam}.svg" alt="Bandeira ${secondTeam}" />
            </li>
            `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
          <div class="card" style="animation-delay=: .${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGames("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda", createGames("brazil", "13:00", "suiça")) +
  createCard("02/12", "sexta", createGames("camarões", "16:00", "brazil"))
