import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import type { RegisterParams, LoginResponse, User } from "@/types/auth";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10_000,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const isAuthEndpoint =
    typeof config.url === "string" &&
    (config.url.includes("/api/auth/register") || config.url.includes("/api/auth/login"));
  if (!isAuthEndpoint) {
    const token = localStorage.getItem("access_token");
    if (token && config.headers) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
  }
  return config;
});

export async function register(params: RegisterParams): Promise<User> {
  const { data } = await api.post<User>("/api/auth/register", {
    ...params,
    monthly_income: params.monthly_income != null ? Number(params.monthly_income) : null,
  });
  return data;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const params = new URLSearchParams();
  params.append("username", email);
  params.append("password", password);
  const { data } = await api.post<LoginResponse>("/api/auth/login", params, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return data;
}

export async function getProfile(): Promise<User> {
  const { data } = await api.get<User>("/api/auth/profile");
  return data;
}

export function setToken(token: string): void {
  localStorage.setItem("access_token", token);
}

export function clearToken(): void {
  localStorage.removeItem("access_token");
}

export function getStoredToken(): string | null {
  return localStorage.getItem("access_token");
}

export default api;
