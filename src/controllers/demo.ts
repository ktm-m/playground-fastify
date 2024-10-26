import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";

export default async function demo(fastify: FastifyInstance) {
    fastify.get("/:firstname/:lastname", async (request: FastifyRequest, reply: FastifyReply) => {
        const params: any = request.params;

        const firstname: string = params.firstname;
        const lastname: string = params.lastname;

        reply.send(({message: `Firstname: ${firstname}, Lastname: ${lastname}`}));
    });

    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        const query: any = request.query;

        const firstname: string = query.firstname;
        const lastname: string = query.lastname;

        reply.send(({message: `Firstname: ${firstname}, Lastname: ${lastname}`}));
    });

    fastify.post("/", async (_request: FastifyRequest, reply: FastifyReply) => {
        reply.send(({message: "Response from POST request"}));
    });

    fastify.post("/params", async (request: FastifyRequest, reply: FastifyReply) => {
        const body: any = request.body;

        const username: string = body.username;
        const password: string = body.password;

        reply.send(({message: `Username: ${username}, Password: ${password}`}));
    });
}