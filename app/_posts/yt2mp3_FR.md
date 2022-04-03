---
lang: 'FR'
title: 'Implémenter une application de téléchargement de musique'
excerpt: 'Comment convertir un stream audio en ligne en fichier mp3 en naviguant sur les sites populaires de stream musical. Réalisé uniquement dans un but d apprentissage...'
date: '11 janvier 2022'
author:
  name: busshi
  picture: '/assets/authors/busshi.jpeg'
technos: ['javascript.svg', 'nodejs.svg', 'nextjs', 'nestjs.svg', 'postgres.png']
languages: ['javascript.svg', 'nodejs.svg']
frameworks: ['nextjs', 'nestjs.svg']
dbs: ['postgres.png']
devTools: ['vscode']
deployTools: ['docker.svg', 'docker-compose', 'circleci']
projectUrl: 'yt2mp3.git'
cover: '/assets/projects/yt2mp3/cover.png'
thumb: ['/yt2mp3/slider.png', '/yt2mp3/yt2mp3.gif']
---

## yt2mp3

Une application Web simple utilisant le framework NextJS pour télécharger un mp3 à partir de liens en ligne comme Youtube. Application conçue à des fins d'apprentissage.

## Ce que j'ai appris de ce projet

J'ai commencé ce projet pour développer mes compétences de programmation dans le langage Javascript et avec le framework ReactJS. Mais je voulais aussi utiliser une API pour récupérer des données, par exemple pour obtenir la liste des fichiers téléchargés. J'ai donc décidé d'utiliser le framework NextJS qui me permet de gérer les routes d'API. Au début, j'ai créé cette application uniquement côté client. Cela fonctionnait bien mais quand j'ai voulu déployer l'application, j'ai eu un problème : si je télécharge un fichier, celui-ci n'apparaît pas dans la liste après le téléchargement. Pourquoi ? Parce que lorsque l'application est déployée, aucun moyen d'utiliser le dossier public qui est "gelé" au moment du déploiement (phase de build juste avant le déploiement). Comment résoudre ce problème ?

J'ai ajouté une base de données et un serveur côté client pour gérer les requêtes comme l'API NextJS. J'ai aussi ajouté un formulaire de connexion avec authentication et génération de JWT (JSON Web Token) pour empêcher les utilisateurs non autorisés d'utiliser cette application.

La première version de cette application est publique et disponible sur mon [Github](https://github.com/busshi/yt2mp3.git) et sur [Dockerhub](https://hub.docker.com/repository/docker/busshi/yt2mp3). Malheureusement, j'ai décidé de garder privée la deuxième version de cette application pour des raisons de sécurité.