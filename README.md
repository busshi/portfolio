[![CircleCI](https://circleci.com/gh/busshi/portfolio/tree/master.svg?style=shield&circle-token=77dd5998d2e80fb6e3474566cdc7f8206db67efd)](https://circleci.com/gh/busshi/portfolio/tree/master)

# MY PORTFOLIO

Web single page application coded in Typescript using NextJS framework. This app is my portfolio and I explain here some of my personal projects.

### Usage
```bash
git clone https://github.com/busshi/portfolio.git
cd portfolio
yarn install
yarn run dev
```
Then view it in the browser at http://localhost:3000

On every push to master branch, the project is build and pushed to [Dockerhub](https://hub.docker.com/r/busshi/portfolio) using CircleCI. It is also deployed online from the cloud.

```bash
docker pull busshi/portfolio:latest``` to pull the latest image from dockerhub
```bash
docker run -p 80:3000``` to run the container. Then browse to http://localhost

## Have a look [here](https://busshi.fr)
