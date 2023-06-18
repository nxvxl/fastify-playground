export class Exception extends Object {
  id: string
  statusCode: number
  code: string
  message: string
  details: any

  constructor(code: string, statusCode: number, message: string, details?: any) {
    super()
    this.id = Date.now().toString()
    this.code = code
    this.statusCode = statusCode
    this.message = message
    this.details = details
  }
}

export class NotFound extends Exception {
  constructor(message: string, details?: any) {
    super("NOT_FOUND", 404, message, details)
  }
}

export class ServerError extends Exception {
  constructor(message: string, details?: any) {
    super("INTERNAL_SERVER_ERROR", 500, message, details)
  }
}
