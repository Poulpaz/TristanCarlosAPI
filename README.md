# TristanCarlosAPI

## Utilisation


## Accès aux ressources JSON (routes)
Récupération de toutes les cartes à jouer - boutique de l'application. </br>
<code>https://tristancarlosapi.herokuapp.com/api/cards</code> Méthode : <b>GET</b></br></br>
Récupération d'une carte à jouer avec son id - affichage des détails de la carte.</br>
<code>https://tristancarlosapi.herokuapp.com/api/card/:id</code> Méthode : <b>GET</b></br></br>
Récupération de toutes les cartes à jouer appartenant à un joueur avec son token.</br>
<code>https://tristancarlosapi.herokuapp.com/api/user/cards/:token</code> Méthode : <b>GET</b></br></br>
Récupération de toutes les cartes à jouer possédées.</br>
<code>https://tristancarlosapi.herokuapp.com/api/user/cards</code> Méthode : <b>GET</b></br></br>
Modification du possesseur d'une carte à jouer - Echange.</br>
<code>https://tristancarlosapi.herokuapp.com/api/user/card</code> Méthode : <b>PUT</b></br>
Renseigner les champs suivants : <b>olduser</b> (token de l'ancien possesseur), <b>user</b> (token du nouveau possesseur), <b>card</b> (id de la carte à jouer)</br></br>
Récupération de tous les joueurs inscrits sur le serveur.</br>
<code>https://tristancarlosapi.herokuapp.com/api/users</code> Méthode : <b>GET</b></br></br>
Récupération d'un joueur inscrit sur le serveur avec son token - Récupération du profil.</br>
<code>https://tristancarlosapi.herokuapp.com/api/user/:token</code> Méthode : <b>GET</b></br></br>
## Technologies


## Installation



