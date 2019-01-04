# TristanCarlosAPI

## Utilisation


## Accès aux ressources JSON (routes)
Récupération de toutes les cartes à jouer - boutique de l'application. </br>
<code>https://tristancarlosapi.herokuapp.com/api/getCardsFromShop</code> Méthode : <b>GET</b></br></br>
Récupération d'une carte à jouer avec son id - affichage des détails de la carte.</br>
<code>https://tristancarlosapi.herokuapp.com/api/getDetailsCard/:id</code> Méthode : <b>GET</b></br></br>
Récupération de toutes les cartes à jouer appartenant à un joueur avec son token.</br>
<code>https://tristancarlosapi.herokuapp.com/api/getCardsBelongingUser/:token</code> Méthode : <b>GET</b></br></br>
Récupération de toutes les cartes à jouer possédées.</br>
<code>https://tristancarlosapi.herokuapp.com/api/getCardsOwned</code> Méthode : <b>GET</b></br></br>
Modification du possesseur d'une carte à jouer - Echange.</br>
<code>https://tristancarlosapi.herokuapp.com/api/updateOwnership</code> Méthode : <b>PUT</b></br>
Renseigner les champs suivants : <b>olduser</b> (token de l'ancien possesseur), <b>user</b> (token du nouveau possesseur), <b>card</b> (id de la carte à jouer)</br></br>
Récupération de tous les joueurs inscrits sur le serveur.</br>
<code>https://tristancarlosapi.herokuapp.com/api/getUsers</code> Méthode : <b>GET</b></br></br>
Récupération d'un joueur inscrit sur le serveur avec son token - Récupération du profil.</br>
<code>https://tristancarlosapi.herokuapp.com/api/getRegisteredUser/:token</code> Méthode : <b>GET</b></br></br>
Inscription d'un nouvel utilisateur sur le serveur.</br>
<code>https://tristancarlosapi.herokuapp.com/api/registerUser</code> Méthode : <b>POST</b></br></br>
Renseigner les champs suivants :</br> <li><ul>Dans le "headers" :  <b>token</b> (token de l'utilisateur).</ul></br><ul> Dans le "body" :  <b>firstname</b> (prénom du joueur), <b>lastname</b> (nom du joueur), <b>mail</b> (adresse email du joueur), <b>password</b> (mot de passe du joueur), <b>age</b> (age du joueur), <b>url</b> (photo de profil du joueur)</ul></li></br></br>
## Technologies


## Installation



