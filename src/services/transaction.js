import Api from './api';

function createHeaders(token) {
  const config = { headers: { authorization: `Bearer ${token}` } };
  return config;
}

export function getUserTransactions({ token }) {
  const config = createHeaders(token);
  return Api.get('/transactions', config);
}

export function postTransaction({ token, value, description, type }) {
  const body = { value, type, description };
  const config = createHeaders(token);
  return Api.post('/transactions', body, config);
}

export function getUserBalance({ token }) {
  const config = createHeaders(token);
  return Api.get('/transactions/balance', config);
}
