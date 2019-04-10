# TristanCarlosAPI
## Technologies et utilisation de l'application
Se référer au dossier Android sur le lien suivant : https://docs.google.com/document/d/1ymVyoLiDl6DWE7ieThli_N3bpy5y2l_rfXnvzpe1xxg/edit?usp=sharing


## Accès aux ressources JSON (routes)

Récupération de toutes les cartes à jouer - boutique de l'application. </br>
<code>https://tristancarlosapi.herokuapp.com/api/cardsFromShop</code> Méthode : <b>GET</b></br></br>
Récupération d'une carte à jouer avec son id - affichage des détails de la carte.</br>
<code>https://tristancarlosapi.herokuapp.com/api/detailsCard/:id</code> Méthode : <b>GET</b></br></br>

Récupération de toutes les cartes à jouer appartenant à un joueur avec son id utilisateur.</br>
<code>https://tristancarlosapi.herokuapp.com/api/getAllUserCardsWithId/:id</code> Méthode : <b>GET</b></br></br>
Récupération de toutes les cartes à jouer possédées.</br>
<code>https://tristancarlosapi.herokuapp.com/api/listUserCard</code> Méthode : <b>GET</b></br></br>
Modification du possesseur d'une carte à jouer - Echange.</br>
<code>https://tristancarlosapi.herokuapp.com/api/updateUserCard</code> Méthode : <b>PUT</b></br>
Ajouter une nouvelle possession - Achat d'une carte ou échange.</br>
<code>https://tristancarlosapi.herokuapp.com/api/addNewUserCard</code> Méthode : <b>POST</b></br>
Supprimer une possession - Vente d'une carte ou échange.</br>
<code>https://tristancarlosapi.herokuapp.com/api/deleteUserCard</code> Méthode : <b>POST</b></br>

Récupération de tous les joueurs inscrits sur le serveur.</br>
<code>https://tristancarlosapi.herokuapp.com/api/users</code> Méthode : <b>GET</b></br></br>
Récupération d'un joueur inscrit sur le serveur avec son token - Récupération du profil.</br>
<code>https://tristancarlosapi.herokuapp.com/api/registeredUser</code> Méthode : <b>GET</b></br></br>
Inscription d'un nouvel utilisateur sur le serveur.</br>
<code>https://tristancarlosapi.herokuapp.com/api/registerUser</code> Méthode : <b>POST</b></br></br>
Suppression d'un utilisateur sur le serveur - Désinscription.</br>
<code>https://tristancarlosapi.herokuapp.com/api/deleteUser</code> Méthode : <b>DELETE</b></br></br>
Mise à jour du profil d'un utilisateur sur le serveur.</br>
<code>https://tristancarlosapi.herokuapp.com/api/updateUser</code> Méthode : <b>PUT</b></br></br>

Récupération d'un échange.</br>
<code>https://tristancarlosapi.herokuapp.com/api/exchange/:idExchange</code> Méthode : <b>GET</b></br></br>
Récupération de tous les échanges concernant un utilisateur.</br>
<code>https://tristancarlosapi.herokuapp.com/api/exchanges/:id</code> Méthode : <b>GET</b></br></br>
Créer un nouvel échange.</br>
<code>https://tristancarlosapi.herokuapp.com/api/addExchange</code> Méthode : <b>POST</b></br></br>
Mettre à jour un échange.</br>
<code>https://tristancarlosapi.herokuapp.com/api/updateExchange</code> Méthode : <b>PUT</b></br></br>
Supprimer un échange.</br>
<code>https://tristancarlosapi.herokuapp.com/api/deleteExchange/:idExchange</code> Méthode : <b>DELETE</b></br></br>

Récupérer tous les messages d'une conversation.</br>
<code>https://tristancarlosapi.herokuapp.com/api/messenger/messages/:idConversation</code> Méthode : <b>GET</b></br></br>
Envoyer un message.</br>
<code>https://tristancarlosapi.herokuapp.com/api/messenger/messages/newMessage</code> Méthode : <b>POST</b></br></br>
Supprimer un message.</br>
<code>https://tristancarlosapi.herokuapp.com/api/messenger/messages/deleteMessage/:idMessage</code> Méthode : <b>DELETE</b></br></br>
Récupérer toutes les conversations d'un utilisateur.</br>
<code>https://tristancarlosapi.herokuapp.com/api/messenger/conversation/:idUser</code> Méthode : <b>GET</b></br></br>
Récupérer tous les messages de toutes les conversations de tout le monde.</br>
<code>https://tristancarlosapi.herokuapp.com/api/messenger/getAllMessages</code> Méthode : <b>GET</b></br></br>
Créer une nouvelle conversation.</br>
<code>https://tristancarlosapi.herokuapp.com/api/messenger/newConversation</code> Méthode : <b>POST</b></br></br>
Supprimer une conversation.</br>
<code>https://tristancarlosapi.herokuapp.com/api/messenger/deleteConversation/:idConversation</code> Méthode : <b>DELETE</b></br></br>

## Installation

Déployer l'API sur serveur d'environnement Node JS équivalent à Heroku.<br />
Créer une base de données MySql.<br />
Modifier les identifiants de connexion dans le fichier `/connection/connection.js`<br />
Déployer le fichier SQL disponible à ce lien : https://drive.google.com/open?id=1Vr-xlsD3X5w7lNgc93sN3qwtsmVDOr07
Installer l'application sur son téléphone via Android Studio en clonant ce répertoire : https://github.com/Poulpaz/TheElderScrolls.git
