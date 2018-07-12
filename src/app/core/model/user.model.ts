export enum USER_TYPE {
  GOOGLE = 'google.com',
  FACEBOOK = 'facebook.com',
  EMAIL = 'email'
}

export interface UserModel {
  uid?: string;
  email: string;
  displayName?: string;
  type?: USER_TYPE;
  catchPhrase?: string;
  photoURL?: string;
  loginStatus?: boolean;
  lastSignInTime?: string;
  firend?: any;
}
