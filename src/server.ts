import app from "./app";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

const port: number = parseInt(process.env.PORT || "3000", 10);
const address: string = process.env.HOST || "localhost";

const start = async () => {
    try {
        await app.listen({port: port, host: address});
        // app.listen can receive a callback function as the second argument
        /* (err: any, address: any) => {
            if (err) {
                console.log(err);
                process.exit(0);
            } else {
                console.log(`Server listening on ${address}:${port}`);
            }
        */
        console.log(`Server listening on ${address}:${port}`);
    } catch (err) {
        console.log(err);
        process.exit(0);
    }
}
start();