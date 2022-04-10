---
lang: 'FR'
title: 'Domotique: Mon bot Telegram'
excerpt: 'Comment j ai codé mon bot en Python'
date: '21 juillet 2019'
author:
  name: busshi
  picture: '/assets/authors/busshi.jpeg'
technos: ['python.png', 'bash.png']
languages: ['python.png', 'bash.png']
devTools: ['vim', 'make']
projectUrl: 'telegram_bot_sample.git'
cover: '/assets/projects/tgbot/cover.png'
thumb: ['/tgbot/cover.png', '/tgbot/tgbot.gif']
---

## Mon bot Telegram

Passionné par la domotique, j'ai voulu créer une application pour centraliser tous mes scripts pour communiquer avec mes serveurs au même endroit. Parce que j'ai aimé l'application Telegram quand j'ai décidé de démarrer ce projet, j'ai trouvé leur API assez fonctionnelle et détaillée pour ce que je voulais faire, c'est-à-dire déclencher plusieurs scripts en fonction de mes besoins. Mon propre bot était né de cette idée. Au début, il n'était connecté qu'à mon serveur domotique mais c'est devenu bien plus que cela. J'ai implémenté beaucoup de scripts et ajouté beaucoup de fonctionnalités, énumérées ci-dessous (liste non exhaustive).

## Fonctionnalités

+ Télécommandes TV :
![tgbot_remote](/assets/projects/tgbot/tgbot_remote.png)

+ Solveur de sudokus :
![tgbot_sudoku](/assets/projects/tgbot/tgbot_sudoku.png)

+ Connaître ses dépenses énergétiques en temps réel
+ Controler mes appareils domotiques (lumière, chauffage, fenêtres, portes...)
+ Envoyer des messages à Alexa pour qu'elle les diffuse sur les appareils connectées
+ Télécommande Alexa (similaire à une radio)
+ Récupérer un flux photo ou vidéo de caméras IP
+ Diffuser un stream sur la TV
+ Et bien d'autres fonctionnalités destinées très personnalisées...

## Ce que j'ai appris de ce projet

J'ai beaucoup appris en créant ce bot. Le but était de connecter tous mes scripts avec cette interface, à l'intérieur d'une application de chat ! Mes premiers scripts ont été écrits en Bash, mais j'ai décidé de coder ce bot en Python pour apprendre un nouveau langage. J'utilise aussi l'API de Telegram qui n'a plus de secret pour moi depuis ce projet, comme beaucoup d'API que j'utilise souvent. J'ai créé mes scripts automatisés avec beaucoup d'API disponibles pour les développeurs, comme l'API de Hue, de Philips pour les téléviseurs, l'API de Domoticz, d'Orange pour les décodeurs ou encore l'API d'Alexa API...

## Note

J'ai publié un exemple de bot public sur [Github](https://github.com/busshi/telegram_bot_sample). Pour l'utiliser, il vous suffit de créer un bot avec le BotFather dans l'application Telegram et d'inclure vos variables d'environnement dans le fichier appropriés (.env). Vous aurez également besoin d'un nom d'utilisateur et d'un identifiant, vous pouvez trouver plus d'informations sur mon repo sur Github si vous êtes intéressé. Pour des raisons de sécurité, mon bot personnel n'est pas publié en ligne mais si vous voulez plus de détails, envoyez-moi simplement un message...