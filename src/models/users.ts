import {Knex} from "knex";

export class UsersModel {
    getAll(db: Knex) {
        return db("users")
            .select("user_id", "firstname", "lastname")
            .orderBy("firstname", "asc");
    }

    getByFirstname(db: Knex, query: string) {
        const queryString = "%" + query + "%";
        return db("users")
            .select("user_id", "firstname", "lastname")
            .where("username", "like", queryString)
            .orderBy("firstname", "asc");
    }

    create(db: Knex, data: any) {
        return db("users").insert(data);
    }

    updateByUserID(db: Knex, userID: number, data: any) {
        return db("users")
            .where({
                user_id: userID,
            }).update(data);
    }
}