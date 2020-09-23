
/* on creer un tableau associatif de clés valeurs*/
let books = [{ 
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
        let imgadress = results[i].volumeInfo.imageLinks != null ? results[i].volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150"; 
        img.setAttribute('src',imgadress);
        img.setAttribute('alt','book');
        card.appendChild(img);

        let title = document.createElement('p');
        title.innerText= results[i].volumeInfo.title;
        card.appendChild(title);

        let author = document.createElement('p');
        let authorname = results[i].volumeInfo.author != null ? results[i].volumeInfo.author : "pas de nom d'auteur";
        author.innerText = authorname; 
        card.appendChild(author);

        let price = document.createElement('p');
        price.innerText = results[i].saleInfo.listPrice != null ? results[i].saleInfo.listPrice.amount +"€" : "pas de prix"; 
        card.appendChild(price);
        cards.appendChild(card);
    };
 
}
//afficheRecommandation();

/* afficher les livres inferieurs a 20€ */

function afficheLivres(prixMax){

    let bookprice = [];
        for(i=0; i<books.length ;i++){
        books[i].saleInfo.listPrice != null ? bookprice.push(books[i]) : '';
    }
    const result = bookprice.filter(bookprice => bookprice.saleInfo.listPrice.amount < prixMax);
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
       let imgadress = result[i].volumeInfo.imageLinks != null ? result[i].volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150"; 
       img.setAttribute('src',imgadress);
        img.setAttribute('alt','book');
       cardProduct.appendChild(img);

       let title = document.createElement('h2');
       title.innerText= result[i].volumeInfo.title;
       cardProductInfo.appendChild(title);

       let author = document.createElement('p');
       author.innerText=result[i].volumeInfo.authors[0];
       cardProductInfo.appendChild(author);

       let description = document.createElement('p');
       description.innerText=result[i].volumeInfo.description;
       cardProductInfo.appendChild(description);

       cardProduct.appendChild(cardProductInfo);

       let price = document.createElement('p');
       price.innerText = result[i].saleInfo.listPrice != null ? result[i].saleInfo.listPrice.amount +"€" : "pas de prix"; 
       cardProduct.appendChild(price);
       
      listitems.appendChild(cardProduct);
   };
};

//afficheLivres(18);







/* integration de l'API GOOGLE BOOKS */
function RechercheLivres(recherche){
 
    let url= ("https://www.googleapis.com/books/v1/volumes?q="+recherche);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
        let noBooks=JSON.parse(xhr.responseText); // .items pour recuperer que les books 
        books= noBooks.items;
        console.log(books);  
        afficheLivres(20);
        afficheRecommandation();         
    }
    };
    
    xhr.open("GET", url, true);
    xhr.send();
}
RechercheLivres("ecmascript");


/* rendre la barre de recherche fonctionnelle*/   

function searchByName(){ /*nom de la fonction */
    let submitButton=document.getElementById("search"); 
    submitButton.addEventListener("click", (ev) =>{
    ev.preventDefault();
        let searchName = document.getElementById("name").value; /* je creer une variable qui stocke ce que l'utilisateur a rentré*/
        RechercheLivres(searchName); /* j'appel la fonction avec comme parametre, le parametre de recherche */
    });
}
searchByName();    

