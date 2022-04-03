FROM 	node:16-alpine3.14

WORKDIR /usr/app

COPY	app/ .

RUN		yarn install  --network-timeout 100000

RUN		yarn build

CMD		[ "yarn", "start" ]
