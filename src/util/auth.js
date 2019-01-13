const TokenKey = "AdminToken";

export function getToken() {
  let data = localStorage.getItem(TokenKey);
  let token = null;
  if (data) {
    token = JSON.parse(data);
  }
  return token;
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, JSON.stringify(token));
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}
