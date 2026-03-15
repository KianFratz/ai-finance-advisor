import React, { createContext, useContext, useState, useEffect } from "react";
import * as authApi from "@/api/auth";
import type { User } from "@/types/auth";

export interface AuthContextValue {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<User>;
  signUp: (params: { email: string; password: string; monthly_income?: number | null }) => Promise<User>;
  signOut: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    const token = authApi.getStoredToken();
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const profile = await authApi.getProfile();
      setUser(profile);
    } catch {
      authApi.clearToken();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const signIn = async (email: string, password: string): Promise<User> => {
    const { access_token } = await authApi.login(email, password);
    authApi.setToken(access_token);
    const profile = await authApi.getProfile();
    setUser(profile);
    return profile;
  };

  const signUp = async ({
    email,
    password,
    monthly_income,
  }: {
    email: string;
    password: string;
    monthly_income?: number | null;
  }): Promise<User> => {
    await authApi.register({ email, password, monthly_income });
    return signIn(email, password);
  };

  const signOut = () => {
    authApi.clearToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn, signUp, signOut, refreshUser: loadUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
