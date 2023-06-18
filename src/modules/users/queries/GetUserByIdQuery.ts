import { Type } from '@sinclair/typebox'

import { users } from "../users"
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { NotFound, ServerError } from '../../../errors'
import { SingleRecordResponse } from '../../../schemas'

const Params = Type.Object({
  id: Type.Number({ minimum: 1 }),
})

export const UserSchema = Type.Object({
  id: Type.Number(),
  name: Type.String({ format: "email" }),
}, { $id: "UserSchema" })

export const GetUserByIdQuery: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get("/:id", {
    schema: {
      summary: "GetUserByIdQuery",
      tags: ["users"],
      params: Params,
      response: {
        200: SingleRecordResponse(UserSchema)
      },
    }
  }, async (request, reply) => {
    const { id } = request.params

    if (id === 12) {
      throw new ServerError("huh?", [{ wkwkw: "askej" }])
    }
    const user = users.find(user => user.id === id)
    if (!user) {
      const message = `User with id ${id} not found`
      console.log(message)
      throw new NotFound(message)
    }
    return { data: user }
  })
}

export const GetUser42: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.get("/42", () => {
    return { message: "anwser" }
  })
}
