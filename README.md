# Angular, c'est quoi ?

Angular, c'est un framework javascript (typescript, en vrai, pour le programmeur) qui est plus cool que jQuery. Par plus cool, j'entends "beaucoup plus puissant", mais aussi, malheureusement, "beaucoup plus ardu à appréhender".

Nous allons y aller par l'exemple. Une page, qui contient une liste de personnes, et quand on clique sur une de ces personnes, les détails, modifiables, vont s'afficher.

Pour cette présentation basique, pas de serveur, les données des personnes seront en dur dans le programme.

## Eléments constitutifs d'une application Angular

L'élément visuel de base dans une application Angular est le **composant** (component en anglais). Tout est composant. Une application est constituée d'un composant racine, qui contient lui-même des composants (ou pas, si c'est *vraiment* quelque chose de simplissime).

L'idée de fond, derrière l'utilisation de composants, est de pouvoir assembler et réutiliser des éléments visuels sans avoir à se répéter.

## Eléments constitutifs d'un composant

Comme je le disais, un composant est avant tout un élément visuel de notre application. Il est constitué d'une partie... bah visuelle, en HTML, appelée **template**, et d'une partie non visuelle, en Typescript, qui va nous permettre de définir son comportement (contrôles de saisie, récupération de données auprès d'un service, gestion d'événements...).

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

Lorsqu'Angular construit l'application, le composant racine se trouve inséré dans un fichier HTML "modèle", situé dans _src/index.html_, au niveau de la balise ```<app-root></app-root>```.

C'est dans ce fichier HTML qu'on insèrera les éventuels liens vers des polices externes ou bibliothèques d'icônes.

# Avant de construire un premier composant

Avant de créer un composant, nous allons explorer un peu le fonctionnement d'Angular en tapant sur le composant racine. C'est mal, mais cela va nous permetter de comprendre l'intérêt des composants par la suite.

## Rappel sur l'architecture MVC

En gros:

* Le modèle représente les données qu'on manipule (par exemple des utilisateurs)
* La vue sert à afficher les données qu'on manipule (dans notre cas, un affichage HTML)
* Le contrôleur permet d'injecter le modèle (les données) dans la vue (HTML).

Dans notre projet à l'état actuel (juste un composant racine, rien de plus), notre composant racine est constitué de:
* Une vue : _src/app/app.component.html_
* Un contrôleur : _src/app/app.component.ts_

Aucun modèle n'est encore créé au moment où on parle.

## Création du modèle "Utilisateur"

Un modèle, c'est simplement une classe Typescript, contenue dans un fichier.

Créons le fichier _src/app/models/user.model.ts_. Le chemin et le nom sont arbitraires.

Là-dedans, nous allons décrire un utilisateur:

```ts
export class User {
  id: number;
  firstName: string;
  lastName: string;
}
```

## Examinons de plus près le contrôleur

Ouvrons le fichier _src_app_app.component.ts_.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular';
}
```

La partie du bas (```export class...```) nous est presque familière. C'est simplement la définition d'une classe en Typescript.

La partie ```@Component(...)``` est appelée _décorateur_ et permet de donner des informations supplémentaires à Angular, pour qu'il comprenne que notre classe _AppComponent_ est une classe spéciale. Un composant, dans ce cas précis, mais le décorateur pourrait être différent.

Trois informations sont passées au décorateur:
* selector : c'est le nom de la balise qu'on utilisera quand on voudra insérer ce composant quelque part (_tiens tiens..- comme par hasard, dans index.html, on trouve ```<app-root>```_)
* templateUrl : c'est le chemin vers le fichier HTML qui représente notre composant
* styleUrls : c'est une liste de chemins vers des feuilles de style à appliquer à notre composant.

> IMPORTANT : les styles définis dans le CSS d'un composant sont applicables UNIQUEMENT à ce composant. Même s'ils sont larges. Et ça, c'est le top! Aucun risque de conflit de classes CSS :)

## Créons statiquement 3 utilisateurs dans notre composant racine

Nous allons déclarer un tableau (une liste) d'utilisateurs dans _app.component.ts_, et y ajouter 3 utilisateurs en dur. Rien de dynamique, mais il faut bien commencer quelque part :)

```ts
import { Component } from '@angular/core';
import { User } from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myUsers: User[] = [
    {
      id: 1,
      firstName: "Lewis",
      lastName: "Trondheim"
    },
    {
      id: 2,
      firstName: "Alexandro",
      lastName: "Jodorowsky"
    },
    {
      id: 3,
      firstName: "Manu",
      lastName: "Larcenet"
    }
  ];

  title = 'demo-angular';
}
```

Nous déclarons donc une propriété ```myUsers```, de type ```User[]```, c'est à dire un tableau de User (notre modèle défini précédemment). On remplit cet tableau avec trois utilisateurs en dur.

On notera que pour pouvoir utiliser le type User, il faut l'importer. C'est la mission de la ligne:
```ts
import { User } from "./models/user.model";
```
On y indique le chemin du fichier qui contient notre classe User. Pas besoin d'ajouter le .ts à la fin, mais ce n'est pas grave s'il y est.

## Affichage du nombre d'utilisateurs

Nous avons des données, il ne reste qu'à les afficher.

Pour cela, nous allons évidemment taper dans le fichier HTML de notre composant: _src/app/app.component.html_

Actuellement, il contient la page de démo, dont on se fout royalement. Allez, on efface tout et on met une petite div toute simple pour afficher la valeur de ```myUsers.length```.

```html
<div>Nombre d'utilisateurs : {{ myUsers.length }}</div>
```

Les doubles accolades permettent d'insérer le contenu d'une variable dans le HTML (pour se la péter, on peut appeller ça de l'interpolation).

Ca va? alors allons un peu plus loin!

## Affichage de nos utilisateurs sur la page avec une boucle \*ngFor

On va les afficher dans une petite liste non ordonnée.

Elle devra avoir cette forme finale:

```html
<ul>
  <li>prénom1 nom1</li>
  <li>prénom2 nom2</li>
  ...
</ul>
```

L'idée est de répéter les balises ```<li></li>``` pour chacun des utilisateurs de notre tableau ```myUsers```, déclaré dans le contrôleur, dans le paragraphe précédent.

Alors d'accord, la syntaxe n'est pas hyper intuitive, mais je vais l'expliquer:

```html
<ul>
  <li *ngFor="let u of myUsers">{{u.firstName}} {{u.lastName}}</li>
</ul>
```

Comme on peut le voir, tout se joue au niveau du ```<li></li>```.

Cette espèce d'attribut dégueu, ```*ngFor="let u of myUsers"```

Littéralement, cela peut se traduire par "pour chaque élément u de ma liste myUsers"

le nom "u" est totalement arbitraire. On pourrait tout aussi bien l'appeler Robert.

Pour chaque élément de la liste myUsers donc, nous allons créer un élément ```<li>```, et afficher les propriétés firstName et lastName dans ce ```<li>```.

> Pour information, l'astérisque devant l'attribut signifie que cet attribut affecte le DOM. On a aussi le \*ngIf, que nous verrons plus tard.
