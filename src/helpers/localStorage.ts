//===================================================================
// Auth Token

const KEY__AUTH_TOKEN = 'authToken';

export const getAuthToken = (): string | null =>
  localStorage.getItem(KEY__AUTH_TOKEN);

export const setAuthToken = (token: string): void =>
  localStorage.setItem(KEY__AUTH_TOKEN, token);

export const remAuthToken = (): void =>
  localStorage.removeItem(KEY__AUTH_TOKEN);

// Auth Token
//===================================================================
