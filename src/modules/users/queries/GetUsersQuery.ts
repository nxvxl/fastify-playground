import { FastifyInstance } from "fastify";

import { users } from "../users"

async function GetUsersQueryHandler() {
  return users
}

export async function GetUsersQuery(fastify: FastifyInstance) {
  fastify.get("/", {
    handler: function(request, reply) {
      return GetUsersQueryHandler()
    }
  })
}
