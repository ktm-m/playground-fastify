# Compile Typescript
compile:
	tsc -p ./tsconfig.json
	# -p mean path to tsconfig.json

run:
	node ./dist/server.js

run-nodemon:
	npx nodemon

build-image:
	docker build -t playground-fastify .
	# -t mean image tag

run-image:
	docker run -d -p 3000:3000 --env-file .env playground-fastify
	# -d mean run in background

stop-image:
	docker stop $(shell docker ps -q --filter ancestor=playground-fastify)
	# -q mean only return container id

infra-up:
	docker compose -f docker-compose.infra.yml up -d

infra-down:
	docker compose -f docker-compose.infra.yml down

app-up:
	docker compose up -d

app-down:
	docker compose down