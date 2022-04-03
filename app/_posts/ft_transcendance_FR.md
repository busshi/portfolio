---
lang: 'FR'
title: 'Créer une plateforme de jeux multijoueurs en ligne'
excerpt: 'Une implémentation overkill mais néanmoins cool du célèbre jeu Pong'
date: '28 mars 2022'
author:
  name: busshi
  picture: '/assets/authors/busshi.jpeg'
technos: ['typescript.svg', 'nodejs.svg', 'nextjs', 'nestjs.svg', 'postgres.png']
languages: ['typescript.svg', 'nodejs.svg']
frameworks: ['nextjs.svg', 'nodejs.svg']
dbs: ['postgres.png']
devTools: ['vscode']
deployTools: ['docker.svg', 'docker-compose', 'circleci', 'github actions']
projectUrl: 'ft_transcendance.git'
cover: '/assets/projects/transcendance/slider.png'
thumb: ['/transcendance/slider.png', '/transcendance/transcendance.gif']
---

## Transcendance

Une implémentation web franchement sur-conçue mais pas moins cool du jeu Pong. Ce projet consiste à créer une plate-forme multijoueur en ligne avec des fonctionnalités de réseaux sociaux et un chat instantané.

## Architecture

Le diagramme suivant représente l'ensemble de l'architecture du projet. Chaque entité est un conteneur docker individuel.

![ft_transcendance architecture](https://i.imgur.com/KQsKRAp.png)

## Ce que j'ai appris de ce projet

Ce projet codé en Typescript est construit à l'aide du framework moderne NextJS (basé sur ReactJS) pour le front-side et de NestJS pour le back-end. J'ai utilisé une base de données PostgreSQL liée au back-end à l'aide de TypeORM. Il existe également un conteneur unique pour nginx qui agit comme un reverse proxy et gère les redirections. Une particularité de ce projet est l'utilisation de sockets. Sans eux, aucun moyen d'avoir une bonne expérience de jeu en ligne. Il est question de créer un jeu fluide et responsive c'est-à-dire que la fenêtre doit pouvoir être redimensionnée sans que les éléments du jeu ou du site web ne soit soit déformé.

Toutes les données proviennent du backend et sont ensuite envoyées aux joueurs. Chaque fois qu'un joueur fait un mouvement, l'information est envoyée au serveur, puis distribuée à l'autre joueur.

L'utilisation de sockets pour ce projet donne la possibilité de créer un chat instantané. Il est également possible d'ajouter des amis ou de les bloquer, comme sur des réseaux sociaux bien connus.

Essayez-le [ici](https://play.busshi.fr).