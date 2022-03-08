export const Pattern = {
  username: new RegExp('^[a-zA-Z0-9]*$'),
  email: new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$', 'ig'),
  password: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?!.* ).{8,}'),
};
