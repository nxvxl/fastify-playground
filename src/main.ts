import fastify from "fastify";
import Swagger from "@fastify/swagger"
import SwaggerUI from "@fastify/swagger-ui";

import { routes } from "./modules/routes";
import { GeneralApiResponse } from "./schemas";

import { version } from "../package.json"

const PORT = 5000

async function main() {
  const app = fastify({ logger: true })

  await app.register(Swagger, {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'Testing the Fastify swagger API',
        version: version,
      },
      tags: [
        { name: "users" }
      ]
    }
  })

  await app.register(SwaggerUI, {
    routePrefix: '/docs',
    staticCSP: true,
  })

  app.addSchema(GeneralApiResponse)
  app.register(routes, { prefix: "/api/v1" })

  app.get("/checkhealth", () => {
    return { name: "fastify-playground", status: "OK", version }
  })

  app.listen({ port: PORT }, (err) => {
    if (err) {
      console.warn("Failed to start server ", err.message)
      process.exit(1)
    }
    console.log("Running on PORT " + PORT)
  })
}

main()
