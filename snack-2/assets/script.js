/*Abbiamo un elenco degli studenti di una facoltà
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti.
Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti
*** BONUS
Aggiungere la foto o l’avatar dello studente e stampare tutti gli studenti con delle card HTML in ordine alfabetico per cognome
buon lavoro!
*/
const users = [
  {
    firstname: 'Andres',
    lastname:  'Cayambe',
    idcode:    getRandomNumber(9999,100000),
    votes: {
      spanish: getRandomNumber(1,10),
      english: getRandomNumber(1,10),
      history: getRandomNumber(1,10),
      math:    getRandomNumber(1,10)
    }
     
  },
  {
    firstname: 'Stefania',
    lastname:  'Scandaglini',
    idcode:    getRandomNumber(9999,100000),
    votes: {
      spanish: getRandomNumber(1,10),
      english: getRandomNumber(1,10),
      history: getRandomNumber(1,10),
      math:    getRandomNumber(1,10)
    }
  },
  {
    firstname: 'Jacqueline',
    lastname:  'Brogi',
    idcode:    getRandomNumber(9999,100000),
    votes: {
      spanish: getRandomNumber(1,10),
      english: getRandomNumber(1,10),
      history: getRandomNumber(1,10),
      math:    getRandomNumber(1,10)
    }
  },
  {
    firstname: 'Rosa',
    lastname:  'Pilicita',
    idcode:    getRandomNumber(9999,100000),
    votes: {
      spanish: getRandomNumber(1,10),
      english: getRandomNumber(1,10),
      history: getRandomNumber(1,10),
      math:    getRandomNumber(1,10)
    }
  },
  {
    firstname: 'Ramon',
    lastname:  'Ulcuango ',
    idcode:    getRandomNumber(9999,100000), 
    votes: {
      spanish: getRandomNumber(1,10),
      english: getRandomNumber(1,10),
      history: getRandomNumber(1,10),
      math:    getRandomNumber(1,10)
    }
  }
]

function getRandomNumber(min,max) {
 return  Math.floor( Math.random() * ( max - min + 1 ) + min )
}   

console.log(users);