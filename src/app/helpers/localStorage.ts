export function logout() {
  localStorage.clear();
}

export function getToken(): string {
  return localStorage.getItem('token') ? localStorage.getItem('token')! : '';
}
export function setToken(token: string) {
  localStorage.setItem('token', token);
}