const BASE_URL = process.env.BASE_URL

export const AUTH_LOGIN = `${BASE_URL}/login`;
export const AUTH_SVC = `${BASE_URL}/send-verification-code`;
export const AUTH_VC = `${BASE_URL}/verify-code`;
export const AUTH_SIGNUP = `${BASE_URL}/signup`;
export const REFRESH_TOKEN = `${BASE_URL}/refresh-token`;

export const PHONE_N_KEY = '@phoneNumber';
export const PHONE_C_KEY = '@phoneCode';

export const USER_ID = 'user_id';
export const USER_A_T = 'access_token';
export const USER_R_T = 'refresh_token';