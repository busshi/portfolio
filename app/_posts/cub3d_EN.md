---
lang: 'EN'
title: 'My first RayCaster: cub3D'
excerpt: 'Remaking Wolfenstein 3D: cub3D using the MinilibX'
date: '2021-03-06'
author:
  name: busshi
  picture: '/assets/authors/busshi.jpeg'
technos: ['C.svg']
languages: ['C.svg']
devTools: ['vim', 'make', 'lldb']
projectUrl: 'cub3d.git'
cover: '/assets/projects/cub3d/cub3d_hd.png'
thumb: ['/cub3d/cub3d_hd.png', '/cub3d/cub3d.gif']
---

## Cub3D

My first RayCaster using the minilibX. This project is inspired by the world-famous eponymous game Wolfenstein 3D, considered the first FPS ever developed. It allow me to explore the technique of ray-casting. My goal was to make a dynamic view within a maze, in which you will have to find your way.

## Objectives

The objectives of this project are similar to all my other projects: Rigor, use of C, use of basic algorithms, search for informations. As it is a graphic design project, Cub3D allowed me to work on my design skills: windows, colors, events, shapes for examples. In conclusion, Cub3D is a remarkable playground to explore the practical applications of mathematics without having to understand its specificities. With the help of the documents found on the internet, I created an elegant and efficient algorithms based on [this one](https://lodev.org/cgtutor/raycasting.html). As usual all kind of memory leaks are not acceptable. I always use valgrind when I code in C or C++ because it is a very efficient tool.

## What I learned from this project

Expect classic skills like coding at the norm or making no crashing code, this project was different because it is something concrete, viewable. So I decided to go further, creating a game in this maze, with ennemies, guns, a powerbar, and even a minimap... To conclude, I will say that the miniLibX is an excellent tool to learn how to create video games in C, before rubbing shoulders with more complete tools such as the SDL for example, or 3D graphics engines.

## Useful links

+ [minilibX](https://gontjarow.github.io/MiniLibX/)
+ [Getting start with the minilibX](https://harm-smits.github.io/42docs/libs/minilibx/getting_started.html)