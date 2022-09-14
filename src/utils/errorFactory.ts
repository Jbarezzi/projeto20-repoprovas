export function notFound(entity: string) {
  return {
    type: "error_not_found",
    message: `${entity} was not found.`,
  };
}

export function conflict(message: string) {
  return {
    type: "error_conflict",
    message,
  };
}

export function unauthorized(entity: string) {
  return {
    type: "error_unauthorized",
    message: `There is no ${entity} in the request.`,
  };
}

export function unprocessableEntity(messages: string[]) {
  return {
    type: "error_unprocessable_entity",
    message: messages,
  };
}

export function forbidden() {
  return {
    type: "error_forbidden",
    message: "Email or password are invalid.",
  };
}
