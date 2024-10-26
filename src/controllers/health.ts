import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

export default async function health(fastify: FastifyInstance): Promise<void> {
    fastify.get("/", async (_request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        reply.send(({message: "OK"}));
    });
}