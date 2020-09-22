/*const form = document.getElementById('searchbar');*/

/* on creer un tableau associatif de clés valeurs*/
const books = [{ 
    'title': 'harry potter à l\'ecole des sorciers',
    'author': 'jk rowling',
    'price': 15,
    'image': "assets/hp1.jpg", 
    'description':'superbe histoire de sorcelerie'
    }, 
    {
    'title': 'harry potter2',
    'author': 'jk rowling',
    'price': 17,
    'image': '',
    'description':'superbe histoire de sorcelerie'
    }, 
    {
    'title': 'harry potter3',
    'author': 'jk rowling',
    'price': 22,
    'image': '',
    'description':'superbe histoire de sorcelerie' 
    },
    {
    'title': 'harry potter4',
    'author': 'jk rowling',
    'price': 20,
    'image': '',
    'description':'superbe histoire de sorcelerie'
    },
];


/* Afficher 3 livres au hasard*+ remplacer dynamiquement le contenu de la partie recommandation*/

function afficheRecommandation(){ 
    let hasard = [0,1,2,3];
    hasard.sort(() => Math.random() - 0.5);
    let results = [];
    for (i=0; i<3;i ++) {
        results.push(books[hasard[i]]);
    }        
    let cards = document.getElementById('cards');
    cards.innerHTML="";
    console.log(cards);
    for(i=0; i<results.length ;i++){
        let card =document.createElement('div');
        card.classList.add('card'); 
        let img = document.createElement('img');
        img.setAttribute('src','https://via.placeholder.com/150');
        img.setAttribute('alt','book');
        card.appendChild(img);
        let title = document.createElement('p');
        title.innerText= results[i].title;
        card.appendChild(title);
        let author = document.createElement('p');
        author.innerText=results[i].author;
        card.appendChild(author);
        let price = document.createElement('p');
        price.innerText = results[i].price + '€';
        card.appendChild(price);
       cards.appendChild(card);
    };
 
}
afficheRecommandation();

/* afficher les livres inferieurs a 20€ */

function afficheLivres(prixMax){
   const result = books.filter(books => books.price < prixMax);
   console.log(result);

   let listitems = document.getElementById('listitems');
   listitems.innerHTML="";
   console.log(listitems);
   for(i=0; i<result.length ;i++){
       let cardProduct =document.createElement('div');
       cardProduct.classList.add('card-product'); 

       let cardProductInfo = document.createElement('div');
       cardProductInfo.classList.add('card-product-info');

       let img = document.createElement('img');
       img.setAttribute('src','https://via.placeholder.com/150');
       img.setAttribute('alt','book');
       cardProduct.appendChild(img);

       let title = document.createElement('h2');
       title.innerText= result[i].title;
       cardProductInfo.appendChild(title);

       let author = document.createElement('p');
       author.innerText=result[i].author;
       cardProductInfo.appendChild(author);

       let description = document.createElement('p');
       description.innerText=result[i].description;
       cardProductInfo.appendChild(description);

       cardProduct.appendChild(cardProductInfo);

       let price = document.createElement('p');
       price.innerText = result[i].price + '€';
       cardProduct.appendChild(price);
       
      listitems.appendChild(cardProduct);
   };
};

afficheLivres(18);


function RechercheLivres(recherche){
    
}
