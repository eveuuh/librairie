/*const form = document.getElementById('searchbar');*/

/* on creer un tableau associatif de clés valeurs*/
const books = [{ 
    'title': 'harry potter à l\'ecole des sorciers',
    'author': 'jk rowling',
    'price': 15,
    'image': "assets/hp1.jpg", 
    'resume':'superbe histoire de sorcelerie'
    }, 
    {
    'title': 'harry potter2',
    'author': 'jk rowling',
    'price': 17,
    'image': '',
    'resume':'superbe histoire de sorcelerie'
    }, 
    {
    'title': 'harry potter3',
    'author': 'jk rowling',
    'price': 22,
    'image': '',
    'resume':'superbe histoire de sorcelerie' 
    },
    {
    'title': 'harry potter4',
    'author': 'jk rowling',
    'price': 20,
    'image': '',
    'resume':'superbe histoire de sorcelerie'
    },
];


/* Afficher 3 livres au hasard*/

function afficheRecommandation(){ 
    let hasard = [0,1,2,3];
    hasard.sort(() => Math.random() - 0.5);
    let results = [];
    for (i=0; i<3;i ++) {
        results.push(books[hasard[i]]);
    }
    return results; 

}
afficheRecommandation();

/* afficher les livres inferieurs a 20€ */

function afficheLivres(prixMax){
   const result = books.filter(books => books.price < prixMax);
   console.log(result);

};

afficheLivres(18);

   