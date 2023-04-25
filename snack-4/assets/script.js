/**SNACK 4*
Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120
Questo è l’elenco degli studenti:
Id  Name                             Grades
213 Marco della Rovere    78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini           74
196 Luigi Grimaldello 	    68
102 Piero della Francesca 50
120 Francesca da Polenta  84
(NB: Si inverte l’ordine delle lezioni objects 3 e 2)
*/
const classe = [
  {
   id: 213,
   fullName:'Marco Della Rovere',
   totGrades: 78,
  },
  {
   id: 110,
   fullName:'Paola Cortellessa',
   totGrades: 96,
  },
  {
   id: 250,
   fullName:'Andrea Mantegna',
   totGrades: 48,
  },
  {
   id: 145,
   fullName:'Gaia Borromini',
   totGrades: 74,
  },
  {
   id: 196,
   fullName:'Luigi Grimandello',
   totGrades: 68,
  },
  {
   id: 102,
   fullName:'Piero della Francesca',
   totGrades: 50,
  },
  {
   id: 120,
   fullName:'Francesca da Polenta',
   totGrades: 84,
  },
]

const listName = classe.map(studente => studente.fullName.toUpperCase())
console.log(listName);

const bestGrades = [];
const bestGradesHigherId = [];


classe.forEach(studente => {
  if (studente.totGrades > 70 && studente.id > 120) {
      bestGradesHigherId.push(studente)
  }
  if (studente.totGrades >70) {
      bestGrades.push(studente)
  }
});
console.log(bestGrades);
console.log(bestGradesHigherId);


const ul = document.querySelector("ul");

for(studente of listName){
  const li = document.createElement("li");
  li.innerHTML = studente;
  ul.appendChild(li);
}