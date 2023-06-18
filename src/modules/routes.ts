import { FastifyInstance } from "fastify";
import { userRoutes } from "./users/users.routes";

export async function routes(fastify: FastifyInstance) {
  fastify.register(userRoutes, { prefix: "/users" })
}
