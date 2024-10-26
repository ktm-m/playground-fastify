import fastify from "fastify";
import routers from "./router";
import dotenv from "dotenv";
import {FastifyInstance} from "fastify";
import process from "node:process";

dotenv.config();

const dbClient: any = process.env.DB_CLIENT
const dbHost: any = process.env.DB_HOST
const dbUser: any = process.env.DB_USER
const dbPassword: any = process.env.DB_PASSWORD
const database: any = process.env.DATABASE

const app: FastifyInstance = fastify.fastify({
    logger: {
        level: "info"
    }
});

app.register(require("@fastify/cors"));
app.register(require("@fastify/formbody"));
app.register(require("fastify-knexjs"), {
    client: dbClient,
    connection: {
        host: dbHost,
        user: dbUser,
        password: dbPassword,
        database: database
    },
    debug: true
});

app.register(routers);

export default app;