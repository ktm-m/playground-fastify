import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

export default async function index(fastify: FastifyInstance) {
    fastify.get("/", async (_request: FastifyRequest, reply: FastifyReply) => {
        reply.send(({message: "Fastify!"}));
    });
}