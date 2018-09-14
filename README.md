# Angular, c'est quoi ?

Angular, c'est un framework javascript (typescript, en vrai, pour le programmeur) qui est plus cool que jQuery. Par plus cool, j'entends "beaucoup plus puissant", mais aussi, malheureusement, "beaucoup plus ardu à appréhender".

Nous allons y aller par l'exemple. Une page, qui contient une liste de personnes, et quand on clique sur une de ces personnes, les détails, modifiables, vont s'afficher.

Pour cette présentation basique, pas de serveur, les données des personnes seront en dur dans le programme.

## Eléments constitutifs d'une application Angular

L'élément visuel de base dans une application Angular est le **composant** (component en anglais). Tout est composant. Une application est constituée d'un composant racine, qui contient lui-même des composants (ou pas, si c'est *vraiment* quelque chose de simplissime).

L'idée de fond, derrière l'utilisation de composants, est de pouvoir assembler et réutiliser des éléments visuels sans avoir à se répéter.

## Eléments constitutifs d'un composant

Comme je le disais, un composant est avant tout un élément visuel de notre application. Il est constitué d'une partie... bah visuelle, en HTML, appelée **template**, et d'une partie non visuelle, en Typescript, qui va nous permettre de définir son comportement (contrôhhles de saisie, récupération de données auprès d'un service, gestion d'événements...).

# Installation de l'environnement

Je ne vais pas détailler à mort.
* Installer Node.js et NPM

Puis dans un terminal:

* npm install -g @angular/cli : installe l'outil en ligne de commande pour gérer notre future application Angular
* ng new notre-projet (spéciale dédicace Manu) : crée notre application dans le répertoire notre-projet

La dernière commande peut prendre un peu de temps, il faut juste la laisser finir tranquillement.

Ensuite, toujours dans le terminal, entrer dans le répertoire du projet: ```cd notre-projet``` et lancer le serveur web intégré à Angular (utilisé uniquement le temps du développement) : ```ng serve --open```.

L'option --open permet, en plus de démarrer le serveur web, de lancer notre navigateur sur l'application (http://localhost:4800 par défaut).

Une jolie page avec le logo d'Angular et quelques liens doit s'afficher.

A partir d'ici, deux possibilités:

* Partir faire le tour des héros, le tutorial officiel d'Angular, très bien fait et progressif;
* Ou rester avec moi, et on va bien s'amuser. Mais je n'aurai pas la force d'aller aussi loin que le tour des héros: nous nous contenterons d'une présentation pour une utilisation basique, en tant que graphiste, par exemple (big up à tous les graphistes), pour construire des composants visuels. Le reste, c'est du boulot pour les développeurs, les vrais, les durs, les tatoués.

# Toujours là? Alors allons-y!

La page qui s'est ouverte devant nos yeux ébahis est déjà une application Angular, constituée d'un unique composant: _app_. Ce composant est défini dans le répertoire _src/app_, et il est constitué de 4 fichiers:
* app.component.css
* app.component.html
* app.component.spec.ts
* app.component.ts

Le 5ème fichier qu'on voit, _app.module.ts_, n'a rien à voir avec ce composant. C'est plutôt un module de configuration de l'application dans sa globalité. Bref.

A notre niveau, les trois fichiers qui vont particulièrement nous intéresser dans la création de composants sont les fichiers html, css et ts. Ils contiennent respectivement:
* La représentation html
* Le style
* Le code Typescript

Dans ce composant racine de base, le css est vide, le html contient une partie du code de la page que nous pouvons voir dans le navigateur, et le ts contient quelques lignes de code Typescript.

## Une partie de la page ? et le reste, il est où ?
