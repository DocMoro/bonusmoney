export const errorHandlingMiddleware = () => (next: (action: unknown) => unknown) => (action: unknown) => {
  try {
    return next(action)
  } catch (error) {
    console.log(error)
  }
}
