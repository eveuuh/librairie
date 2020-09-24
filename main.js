
/***************************************************/
/* on creer un tableau associatif de clés valeurs, avec les valeurs json que l'on veut pour l'appli*/
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
/***********************************************************/


/***********************************************************************************************/
/* Afficher 3 livres au hasard + remplacer dynamiquement le contenu de la partie recommandation*/

function afficheRecommandation(){  
    let hasard = [0,1,2,3]; /* je defini un tableau de 4 valeurs*/
    hasard.sort(() => Math.random() - 0.5); 
    let results = []; 
    for (i=0; i<3;i ++) {
        results.push(books[hasard[i]]); /* je stock dans un tableau results les valeurs tirées au hasard et j'itére dessus*/
    }        
    let cards = document.getElementById('cards'); 
    cards.innerHTML="";
    console.log(cards); /* je crée une variable cards pour y stocker par la suite les données récupérées dans mon html*/
    for(i=0; i<results.length ;i++){ /* je crée une boucle afin que pour chaque resultat récupéré de mon json;les reponses soient stockées comme voulue par l'architecture de mon html*/
        let card =document.createElement('div');
        card.classList.add('card'); 
/* pour chaque élements que je veux recuperer dans l'item je creer une variable qui sera stocké et rattaché au html*/
        let img = document.createElement('img'); 
        let imgadress = results[i].volumeInfo.imageLinks != null ? results[i].volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150"; /* si dans le fichier json il n'y a pas d'image je gére cette erreur via une image de base qui sera affichée*/
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
        price.innerText = results[i].saleInfo.listPrice != null ? results[i].saleInfo.listPrice.amount +"€" : "pas de prix"; /* si dans le fichier json il n'y a pas de prix,je gére cette erreur via un contenu textuel en dur */
        card.appendChild(price);
        cards.appendChild(card);
    };
 
}
//afficheRecommandation();
/***********************************************************************************************/


/****************************************/
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
/****************************************/



/*************************************/
/* integration de l'API GOOGLE BOOKS */

    /*par methode XHR* 
    /*************/

/*function RechercheLivres(recherche){
 
    let url= ("https://www.googleapis.com/books/v1/volumes?q="+recherche);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
        let noBooks=JSON.parse(xhr.responseText); //
        books= noBooks.items; /*.items pour recuperer que les books /
        console.log(books);  
        afficheLivres(20);
        afficheRecommandation();         
    }
    };
    
    xhr.open("GET", url, true);
    xhr.send();
}
RechercheLivres("ecmascript");*/

/********************/

    /* par fetch*/
    /*************************/

function RechercheLivres(recherche){

    fetch('myapi.php') /* je colle l'url de mon fichier php */
    .then(response => response.json())
    .then(data => {
        books=data.items; /* je recupere l'index items de books pour recuperer les infos qui nous interesse */
    afficheLivres(20); 
    afficheRecommandation(); /*j'appel mes deux fonctions pour afficher le resultat de ma requête de maniére dynamique*/
        })
    .catch(error => console.error(error)) /* gestion des erreurs */

}

RechercheLivres("ecmascript");

/*************************************/
function start(recherche){
    fetch('https://www.googleapis.com/books/v1/volumes?q='+recherche) /* je colle l'url de l'api que je souhaite parser en fonction de mon query params*/
    .then(response => response.json())
    .then(data => {
        books=data.items; /* je recupere l'index items de books pour recuperer les infos qui nous interesse */
    afficheLivres(20); 
    afficheRecommandation(); /*j'appel mes deux fonctions pour afficher le resultat de ma requête de maniére dynamique*/
        })
    .catch(error => console.error(error)) /* gestion des erreurs */

}

start("ecmascript");


/************************************************************/
/* fonction pour rendre la barre de recherche fonctionnelle*/   

function searchByName(){ /*nom de la fonction */
    let submitButton=document.getElementById("search"); 
    submitButton.addEventListener("click", (ev) =>{ /* je mets une ecoute sur le boutton pour lancer la fonction recherche*/
    ev.preventDefault(); /*gestion des erreurs de click */
        let searchName = document.getElementById("name").value; /* je creer une variable qui stocke ce que l'utilisateur a rentré*/
        RechercheLivres(searchName); /* j'appel la fonction avec comme parametre, le parametre de recherche */
        start(searchName);
    });
}
searchByName();    
/*************************************/





/*************************************/
/* fonction pour faire le burger menu*/

function burgermenu(){ 
    let navstyle= document.querySelector('ul.nav').style.display; /* je définie une variable ou je selectionne les selecteurs de la navbar*/
    if ((navstyle) === "none" ){  /* j'affiche ou non la navbar selon la taille définie dans le css  */
        document.querySelector('ul.nav').style.display = "flex";
    }else {
        document.querySelector('ul.nav').style.display = "none";
    }
    
}
/*************************************/



/*****************
/*fonction bonus*/


/*****************/