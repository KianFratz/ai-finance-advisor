export interface User {
  email: string;
  monthly_income?: number | null;
  created_at?: string;
}

export interface RegisterParams {
  email: string;
  password: string;
  monthly_income?: number | null;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}
