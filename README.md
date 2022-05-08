![build](https://github.com/busshi/portfolio/actions/workflows/build.yml/badge.svg)

# MY PORTFOLIO

Web single page application coded in Typescript using NextJS framework. This app is my portfolio and I explain here some of my personal projects.

## Usage
```bash
git clone https://github.com/busshi/portfolio.git
cd portfolio
yarn install
yarn run dev
```
Then view it in the browser at http://localhost:3000

On every push to master branch, the project is build and pushed to [Dockerhub](https://hub.docker.com/r/busshi/portfolio). It is also deployed online from the cloud.

## Dockerhub alternative
1. Pull the latest image from dockerhub:
```docker pull busshi/portfolio:latest```

2. Run the container:
```docker run -p 80:3000```

3. Browse to http://localhost
 
## Have a look [here](https://busshi.fr)
