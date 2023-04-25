/**SNACK 6*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console.
BONUS
Stampare in pagina oltre che in console!
*/
const Premiere = [
    {
        squad: "Arsenal ",
        pointsMade : 0,
        sufferedFouls: 0
    },
    {
        squad: "Man. City ",
        pointsMade : 0,
        sufferedFouls: 0
    },
    {
        squad: "Newcastle",
        pointsMade : 0,
        sufferedFouls: 0
    },
    {
        squad: "Man. Utd ",
        pointsMade : 0,
        sufferedFouls: 0
    },
    {
        squad: "Aston Villa",
        pointsMade : 0,
        sufferedFouls: 0
    },
    {
        squad: "Tottenham",
        pointsMade : 0,
        sufferedFouls: 0
    },
    {
        squad: "Liverpool",
        pointsMade : 0,
        sufferedFouls: 0
    },
    {
        squad: "Brighton",
        pointsMade : 0,
        sufferedFouls: 0
    },
    {
        squad: "Fulham",
        pointsMade : 0,
        sufferedFouls: 0
    },
    {
        squad: "Wolves",
        pointsMade : 0,
        sufferedFouls: 0
    },
]

const getRandomNumbers = (min,max) =>Math.floor(Math.random()* (max - min + 1) + min) 
const ul = document.querySelector("ul");


Premiere.forEach(squad => {
    squad.pointsMade = getRandomNumbers(0,80);
    squad.sufferedFouls = getRandomNumbers(0,30);
});
console.log(Premiere)

const premiereFouls = Premiere.map((object)=> {
    const {squad,sufferedFouls} = object
    object = 
    {
        squad,
        sufferedFouls,
    }
    return object
})

premiereFouls.sort((a,b)=>b.sufferedFouls-a.sufferedFouls);


for (const object of premiereFouls) {
  const {squad,sufferedFouls} = object
  const li = document.createElement("li")
  li.className ="list-group-item"
  li.innerHTML = `
  <div class="row">
  <div class="col-7 d-flex align-items-center "><span class="fw-bolder text-uppercase fs-3">${squad}</span></div>
  <div class="col-2 d-flex align-items-center"><span class="fw-bolder text-uppercase fs-5">${sufferedFouls}</span></div>
  </div>
  `
  ul.appendChild(li)
}
