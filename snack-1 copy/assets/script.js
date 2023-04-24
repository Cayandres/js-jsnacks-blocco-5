/*jSnack 1
Abbiamo un elenco utenti (nome, cognome, età).
Trovare i minorenni e gli over 65
*/
const users = [
  {
    firstname: 'Andres',
    lastname:  'Cayambe',
    age:       17
  },
  {
    firstname: 'Stefania',
    lastname:  'Scandaglini',
    age:       26
  },
  {
    firstname: 'Jacqueline',
    lastname:  'Brogi',
    age:       30
  },
  {
    firstname: 'Rosa',
    lastname:  'Pilicita',
    age:       56
  },
  {
    firstname: 'Ramon',
    lastname:  'Ulcuango ',
    age:       66 
  }
]

const underAge = users.filter( user => user.age < 18 )
console.log(underAge);

const senior = users.filter( user => user.age >= 65 )
console.log(senior);