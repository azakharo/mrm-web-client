export interface LoginProvider {
  id: number;
  appName: string;
  appId: string;
  authPageUrl: string;
}

export interface User {
  code: string;
  fullName: string;
  email: string;
  phone: string;
}
