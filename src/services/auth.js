import Api from './api.js';

export async function postSignUp({ name, email, password, repeatPassword }) {
  const body = { name, email, password, repeatPassword };

  return Api.post('/sign-up', body);
}

export async function postLogin({ email, password }) {
  const body = { email, password };

  return Api.post('/login', body);
}
