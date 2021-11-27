import api from './api.js';

export async function postSignUp({ name, email, password, repeatPassword }) {
  const body = { name, email, password, repeatPassword };

  return api.post('/signup', body);
}

export async function postLogin({ email, password }) {
  const body = { email, password };

  return api.post('/login', body);
}
