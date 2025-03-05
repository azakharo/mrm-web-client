//===================================================================
// Auth Token

const KEY__AUTH_TOKEN = 'authToken';

export const getAuthTokenFromLocalStorage = (): string | null =>
  localStorage.getItem(KEY__AUTH_TOKEN);

export const setAuthTokenInLocalStorage = (token: string): void =>
  localStorage.setItem(KEY__AUTH_TOKEN, token);

export const remAuthTokenFromLocalStorage = (): void =>
  localStorage.removeItem(KEY__AUTH_TOKEN);

// Auth Token
//===================================================================
