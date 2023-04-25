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
    votes: [
      {
        subject: 'spanish',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'english',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'history',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'math',
        vote: getRandomNumber(1,10)
      }
  
    ]
  },
  {
    firstname: 'Stefania',
    lastname:  'Scandaglini',
    idcode:    getRandomNumber(9999,100000),
    votes: [
      {
        subject: 'spanish',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'english',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'history',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'math',
        vote: getRandomNumber(1,10)
      }
  
    ]
  },
  {
    firstname: 'Jacqueline',
    lastname:  'Brogi',
    idcode:    getRandomNumber(9999,100000),
    votes: [
      {
        subject: 'spanish',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'english',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'history',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'math',
        vote: getRandomNumber(1,10)
      }
  
    ]
  },
  {
    firstname: 'Rosa',
    lastname:  'Pilicita',
    idcode:    getRandomNumber(9999,100000),
    votes: [
      {
        subject: 'spanish',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'english',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'history',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'math',
        vote: getRandomNumber(1,10)
      }
  
    ]
  },
  {
    firstname: 'Ramon',
    lastname:  'Ulcuango ',
    idcode:    getRandomNumber(9999,100000), 
    votes: [
      {
        subject: 'spanish',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'english',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'history',
        vote: getRandomNumber(1,10)
      },
      {
        subject: 'math',
        vote: getRandomNumber(1,10)
      }
  
    ]
  }
]

const usersAverage = users.map (user =>{

  const { firstname , lastname , idcode, votes } = user; 
  console.log(averageVotes(votes));
  const userAverage = {
    firstname: `${firstname}`,
    lastname : `${lastname}`,
    idcode   : `${idcode}`,
    votes    : `${averageVotes(votes)}`,
 
  }
   return userAverage;
})

function averageVotes(votes) {
  let sum = 0;
  votes.forEach(exam => {
    sum += exam.vote
  });
  return Math.round( sum / votes.length );
}


function getRandomNumber(min,max) {
 return  Math.floor( Math.random() * ( max - min + 1 ) + min )
}   

console.log(usersAverage);