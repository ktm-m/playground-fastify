import crypto from "crypto";
import {FastifyInstance, FastifyRequest, FastifyReply} from "fastify";
import {Knex} from "knex";
import {UsersModel} from "../models/users";

export default async function users(fastify: FastifyInstance): Promise<void> {
    const db: Knex = fastify.knex;
    const usersModel = new UsersModel();

    fastify.get("/", async (_request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        try {
            const result: any = await usersModel.getAll(db);
            reply.send(result);
        } catch (err: any) {
            console.log(err);
            reply.code(500).send(({message: "Internal Server Error", err: err.message}));
        }
    });

    fastify.get("/search", async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        try {
            const query: any = request.query;
            const firstname: string = query.firstname;

            const result: any = await usersModel.getByFirstname(db, firstname);
            reply.send(result);
        } catch (err: any) {
            console.log(err);
            reply.code(500).send(({message: "Internal Server Error", err: err.message}));
        }
    });

    fastify.post("/", async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        try {
            const body: any = request.body;
            const data: any = {
                firstname: body.firstname,
                lastname: body.lastname,
                username: body.username,
                password: crypto.createHash("md5").update(body.password).digest("hex"),
            };

            await usersModel.create(db, data);
            reply.send({message: "User created"});
        } catch (err: any) {
            console.log(err);
            reply.code(500).send(({message: "Internal Server Error", err: err.message}));
        }
    });

    fastify.put("/:userID", async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        try {
            const params: any = request.params;
            const userID: number = parseInt(params.userID);
            const body: any = request.body;
            const data: any = {
                firstname: body.firstname,
                lastname: body.lastname,
            };

            if (body.password !== undefined) {
                data.password = crypto.createHash("md5").update(body.password).digest("hex");
            }

            await usersModel.updateByUserID(db, userID, data);
            reply.send({message: "User updated"});
        } catch (err: any) {
            console.log(err);
            reply.code(500).send(({message: "Internal Server Error", err: err.message}));
        }
    });
}