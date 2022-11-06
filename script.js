function createGames(firstTeam, hour, secondTeam) {
  return `   
           <li>
              <img src="./assets/icon-${firstTeam}.svg" alt="Bandeira ${firstTeam}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${secondTeam}.svg" alt="Bandeira ${secondTeam}" />
            </li>
            `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
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
  createCard(
    "22/11",
    "terça",
    createGames("australia", "16:00", "frança") +
      createGames("argentina", "07:00", "saudiArabia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGames("alemanha", "10:00", "japão") +
      createGames("espanha", "13:00", "costaRica") +
      createGames("belgica", "16:00", "canada")
  ) +
  createCard("24/11", "quinta", createGames("brazil", "16:00", "serbia")) +
  createCard(
    "25/11",
    "sexta",
    createGames("inglaterra", "16:00", "estadosUnidos")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGames("frança", "13:00", "dinamarca") +
      createGames("argentina", "16:00", "mexico")
  ) +
  createCard("27/11", "domingo", createGames("espanha", "16:00", "alemanha")) +
  createCard("28/11", "segunda", createGames("brazil", "13:00", "suiça")) +
  createCard("01/12", "quinta", createGames("japão", "16:00", "espanha")) +
  createCard("02/12", "sexta", createGames("camarões", "16:00", "brazil"))
