import { FastifyInstance } from "fastify";

import { GetUsersQuery } from "./queries/GetUsersQuery"
import { GetUser42, GetUserByIdQuery, UserSchema } from "./queries/GetUserByIdQuery";

export async function userRoutes(fastify: FastifyInstance) {
  fastify.addSchema(UserSchema)
  fastify
    .register(GetUser42)
    .register(GetUserByIdQuery)
    .register(GetUsersQuery)
}
