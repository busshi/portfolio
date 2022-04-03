---
lang: 'FR'
title: 'Mon premier raycaster : cub3D'
excerpt: 'Recréer Wolfenstein 3D en utilisant la MinilibX: cub3D'
date: '6 mars 2021'
author:
  name: busshi
  picture: '/assets/authors/busshi.jpeg'
technos: ['c.svg']
languages: ['c.svg']
devTools: ['vim.svg', 'make', 'lldb']
projectUrl: 'cub3d.git'
cover: '/assets/projects/cub3d/cub3d_hd.png'
thumb: ['/cub3d/cub3d_hd.png', '/cub3d/cub3d.gif']
---

## Cub3D

Mon premier lanceur de rayons (raycaster) en utilisant le minilibX. Ce projet s'inspire du célèbre jeu éponyme Wolfenstein 3D, considéré comme le premier FPS (First-Person-Shoot) jamais développé. Cela m'a permis d'explorer la technique du lanceur de rayons. Mon but était de faire une vue dynamique dans un labyrinthe, dans lequel vous devrez trouver votre chemin.

## Objectifs

Les objectifs de ce projet sont similaires à beaucoup d'autres de mes autres projets : rigueur, utilisation du C, utilisation d'algorithmes de base et recherche d'informations. Comme il s'agit d'un projet de design graphique, cub3D m'a permis de travailler sur ces compétences : gestion des fenêtres, des couleurs, des événements, des formes par exemple. Cub3D est un terrain de jeu remarquable pour explorer les applications pratiques des mathématiques sans avoir à en comprendre les spécificités. Avec l'aide des documents trouvés sur Internet, j'ai créé un algorithme élégant et efficace basé sur [celui-ci] (https://lodev.org/cgtutor/raycasting.html). Comme d'habitude, toutes sortes de fuites de mémoire dans le programme ne sont pas acceptables. J'utilise toujours valgrind lorsque je code en C ou C++ car c'est un outil très efficace de détection de fuites mémoire ou de file descriptor.

## Ce que j'ai appris de ce projet

Hormis les compétences habituelles comme coder à la norme ou ne pas faire crasher le programme quelquesoit les cas particuliers (segmentation fault, bus error, double free, etc.), ce projet était différent car c'est quelque chose de concret et visible. J'ai donc décidé d'aller plus loin, en créant un jeu dans ce labyrinthe, avec des ennemis, des fusils, une barre de puissance, et même une minimap... Pour conclure, je dirai que la miniLibX est un excellent outil pour s'initier à la création de jeux vidéos en C, avant de se frotter à de outils plus complets comme la SDL par exemple, ou des moteurs graphiques 3D.

## Liens utiles

+ [minilibX](https://gontjarow.github.io/MiniLibX/)
+ [Getting start with the minilibX](https://harm-smits.github.io/42docs/libs/minilibx/getting_started.html)