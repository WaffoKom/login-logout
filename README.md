# Projet de Login/Logout avec React.js et Express.js

Ce projet est une démonstration simple d'un système de login/logout utilisant React.js pour le front-end et Express.js pour le back-end.

## Fonctionnalités

- Page de connexion : Les utilisateurs peuvent se connecter avec leurs identifiants (nom d'utilisateur et mot de passe).
- Authentification : Les informations d'authentification sont vérifiées côté serveur pour s'assurer que seuls les utilisateurs autorisés peuvent accéder à la page de connexion.
- Session : Une session est créée pour l'utilisateur authentifié, qui lui permet de rester connecté lorsqu'il navigue entre les différentes pages.
- Page de déconnexion : Les utilisateurs connectés peuvent se déconnecter pour mettre fin à leur session.

## Installation

1. Clonez le dépôt :

    ```shell
    git clone https://github.com/WaffoKom/login-logout.git
    cd login-logout
    ```

2. Installez les dépendances du serveur :

    ```shell
    cd server
    npm install
    ```

3. Lancez le serveur Express.js :

    ```shell
    npm start
    ```

4. Installez les dépendances du client :

    ```shell
    cd client
    cd login-logout
    npm run dev
    or
    yarn dev
    ```



## Technologies utilisées

- React.js : une bibliothèque JavaScript pour construire des interfaces utilisateur interactives.
- Express.js : un framework JavaScript pour construire des applications web côté serveur.
- MongoDB : une base de données NoSQL utilisée pour stocker les informations des utilisateurs.
- bcrypt.js : une bibliothèque pour le hachage des mots de passe.
- JSON Web Tokens (JWT) : utilisés pour la gestion des sessions et l'authentification.
- Axios : une bibliothèque HTTP pour effectuer des requêtes entre le client et le serveur.


## Note pour le code source
-Pour ceux qui utilisent l'authentification double etapes referer vous  a la page google


---

N'hésitez pas à personnaliser ce README en fonction des détails spécifiques de votre projet. Assurez-vous de fournir suffisamment d'informations sur l'installation, la configuration et l'utilisation du projet afin que les autres développeurs puissent le comprendre et y contribuer facilement.
