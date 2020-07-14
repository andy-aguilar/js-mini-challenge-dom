/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function(){
    const header = document.querySelector('#header')
    console.log("Here's your header:", header)
    /***** Deliverable 2 *****/
    header.style.color = "red";
})





/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
// iterate through players to make divs
document.addEventListener("DOMContentLoaded", function(){
    function formatPlayers(players) {
        let parent = document.querySelector('.player-container')
        for (let i = 0; i < players.length; i++) {
            let element = document.createElement('div')
            element.className = "player"
            element.dataset.number = `${players[i]["number"]}`
            element.innerHTML = `<h3>
                ${players[i]["name"]} <em>${players[i]["nickname"]}</em>
                </h3>
                <img src="${players[i]["photo"]}" alt="${players[i]["name"]}">`
                parent.appendChild(element)
        }   
    }
    formatPlayers(PLAYERS)
})


/***** Deliverable 4 *****/

document.addEventListener("DOMContentLoaded", function(){
    const rival = document.querySelector('[data-number="7"]');
    rival.remove()
})