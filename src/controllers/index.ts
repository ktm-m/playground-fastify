import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

export default async function index(fastify: FastifyInstance): Promise<void> {
    fastify.get("/", async (_request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        reply.send(({message: "Fastify!"}));
    });
}