---
lang: 'EN'
title: 'Building a songs downloader app'
excerpt: 'How to convert an online video streamed to a mp3 file while browsing to popular websites? Made for learning purposes.'
date: '2022-01-11'
author:
  name: busshi
  picture: '/assets/authors/busshi.jpeg'
technos: ['javascript.svg', 'nodejs.svg', 'nextjs', 'nestjs.svg', 'postgres.png']
languages: ['javascript.svg', 'nodejs.svg']
frameworks: ['nextjs', 'nestjs.svg', 'reactjs']
dbs: ['postgres.png']
devTools: ['vscode']
deployTools: ['docker.svg', 'circleci']
projectUrl: 'yt2mp3.git'
cover: '/assets/projects/yt2mp3/cover.png'
thumb: ['/yt2mp3/slider.png', '/yt2mp3/yt2mp3.gif']
---

## yt2mp3

A simple web app using NextJS framework to download a mp3 from online links like Youtube, made for learning purposes.

## What I learned from this project

I started this project to get more friendly with the ReactJS framework. But I also wanted to use an API to fetch data, for example to get the list of the downloaded files. So I decided to use NextJS framework which allow me to handle API route. At first, I made this app with only client-side. I was working well but when I wanted to build it to deploy the app, I had a problem: if I download a file, this one does not appear in the list after the download. Why? Because when the app is built, no way to use the public folder which is freezed at the build time. So what?

I add a database and a front-side server to handle requests like the NextJS API. I also add a login form with JWT authorization to prevent unauthorized users to use this app.

The first version of this app is public and available on my [Github](https://github.com/busshi/yt2mp3.git) and on [Dockerhub](https://hub.docker.com/repository/docker/busshi/yt2mp3). Unfortunately, I decided to keep private the second version of this app for security reasons.