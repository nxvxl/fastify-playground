import { TSchema, Type } from "@sinclair/typebox";

export const GeneralApiResponse = Type.Object({
  id: Type.String({ format: "uuid" }),
  message: Type.String(),
  details: Type.Optional(Type.Any()),
}, { $id: "GeneralApiResponse" })

export const SingleRecordResponse = <T extends TSchema>(t: T) => Type.Object({
  data: t
})

export const PaginationRecordResponse = <T extends TSchema>(t: T) => Type.Object({
  page: Type.Number({ default: 1 }),
  recordsPerPage: Type.Number({ default: 10 }),
  totalRecords: Type.Number(),
  data: Type.Array(t)
})
