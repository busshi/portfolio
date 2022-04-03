---
lang: 'EN'
title: 'Home automation: My own private bot'
excerpt: 'Coding my own bot in Python'
date: '2019-07-21'
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

## My own Telegram bot

Passionated about home automation, I wanted to created an app to centralize all my scripts tp communicate with my servers at the same place. Because I liked the Telegram application when I decided to start this project, I found the telegram API good enough for what I wanted to do, I mean trigger several scripts depending on my needs. My own bot was born. At first, it was only connected to my home automation server but it became more than that. I implemented lots of scripts and add a lot of features, listed below.

## Features

+ Creating TV remotes:
![tgbot_remote](assets/projects/tgbot/tgbot_remote.png)
+ Solving sudokus :
![tgbot_sudoku](assets/projects/tgbot/tgbot_sudoku.png)
+ Getting electricity billing in real time
+ Controlling my devices for my home automation (lights, heating devices, windows, doors...)
+ Send messages to Alexa for broadcasting to devices connected
+ Alexa remote which acts like a radio
+ Getting pictures from IP cam
+ and much more scripts for a personnal use

## What I learned from this project

I learnt a lot creating this bot. The goal was to connect all my scripts with this interface, inside a chat app! My first scripts were written in Bash, but I decided to code this bot in Python to learn a new langage. I also use the telegram API which has no more secret for me since this project, like a lots of APIs I often use. I created my automated scripts with a lot of APIs available for developpers, like Hue API, Domoticz API, Philips API, Orange API, Alexa API and much more...

## Note

I published a public bot sample on [Github](https://github.com/busshi/telegram_bot_sample). To use it you just need to create a bot with the BotFather inside the telegram app and filled your environement file. You will need a username too and an ID, you can find more informations on my repository if you are interested. For security reason, my personal bot is not published but if you want more details, just send me a message...