import {FastifyInstance} from "fastify";
import indexRoute from "./controllers/index";
import healthRoute from "./controllers/health";
import demoRoute from "./controllers/demo";
import usersRoute from "./controllers/users";

export default async function router(fastify: FastifyInstance) {
    fastify.register(indexRoute, {prefix: "/"});
    fastify.register(healthRoute, {prefix: "/health"});
    fastify.register(demoRoute, {prefix: "/demo"});
    fastify.register(usersRoute, {prefix: "/users"});
}