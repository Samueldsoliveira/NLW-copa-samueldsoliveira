function createGame(player1, hour, player2){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Icon ${player1}">
         <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Icon ${player2}">
    </li>
    `
}


let delay = -0.4; //Variavel inicial para fazer transição dos cards
function createCard(date, day, games){
    delay = delay + 0.4; //Variavel sendo repetida dentro da função para os cards aparecerem um de cada vez
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span> ${day}</span></h2> 

    <ul>
        ${games}
    </ul>
</div>
    `
}

 document.querySelector('#cards').innerHTML = 

  createCard("21", "Segunda",
      createGame('england', '10:00', 'iran') + createGame('usa', '16:00', 'wales') + createGame('senegal', '13:00', 'netherlands') 
  ) +
  createCard("24", "Quinta",
      createGame('brazil', '16:00', 'serbia') + createGame('switzerland', '07:00', 'cameroon') + createGame('uruguay', '10:00', 'southkorea') + createGame('portugal', '13:00', 'ghana')  
  ) +
  createCard("26", "Sábado",
      createGame('argentina', '16:00', 'mexico') + createGame('tunisia', '07:00', 'australia') + createGame('poland', '10:00', 'saudiArabia') + createGame('france', '13:00', 'denmark')
  )
