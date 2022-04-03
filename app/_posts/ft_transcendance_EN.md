---
lang: 'EN'
title: 'Building an online multiplayer plateform'
excerpt: 'A frankly over-engineered but not less cool web implementation of the Pong game.'
date: '2022-03-28'
author:
  name: busshi
  picture: '/assets/authors/busshi.jpeg'
technos: ['typescript.svg', 'nodejs.svg', 'nextjs', 'nestjs.svg', 'postgres.png']
languages: ['typescript.svg', 'nodejs.svg']
frameworks: ['nextjs', 'nestjs.svg']
dbs: ['postgres.png']
devTools: ['vscode']
deployTools: ['docker.svg', 'circleci', 'github actions']
projectUrl: 'ft_transcendance.git'
cover: '/assets/projects/transcendance/slider.png'
thumb: ['/transcendance/slider.png', '/transcendance/transcendance.gif']
---

## Transcendance

A frankly over-engineered but not less cool web implementation of the Pong game. This project is about creating an online multiplayer plateform with social networks features and instant chat.

## Architecture

The following diagram represents the whole architecture of the project. Every cube is an individual docker container.

![ft_transcendance architecture](/assets/projects/transcendance/transcendance_architecture.png)

## What I learned from this project

This project coded in Typescript is built using the modern framework NextJS (based on ReactJS) for the front-side and NestJS for the back-end. I used a PostgreSQL database linked with the back-end using TypeORM. There is also one unique container for nginx which acts like a reverse proxy and handles redirections.

One particularity of this project is the use of sockets. Without them, no way to have a good online experience while playing. All the datas come from the backend and then dispatched to players. Every time a player makes a movement, the information is sent to the server and then distributed to the other player.  The goal was to create a fluid, smooth game and responsive, I mean you can resize the window without deforming the elements of the game or the website.

Using sockets for this project gives the opportunity to create an instant chat. It is also possible to add friends or block them, like on well known social networks.

Have a try [here](https://play.busshi.fr).