import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { isAxiosError } from "axios";

export default function Register() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signUp({
        email,
        password,
        monthly_income: monthlyIncome ? parseFloat(monthlyIncome) : null,
      });
      navigate("/", { replace: true });
    } catch (err) {
      const message = isAxiosError(err)
        ? err.code === "ERR_NETWORK" || err.message === "Network Error"
          ? "Cannot reach the server. Make sure the backend is running and try again."
          : err.response?.data?.detail
            ? String(err.response.data.detail)
            : err.message
        : err instanceof Error
          ? err.message
          : "Registration failed";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* ── Left decorative panel ── */}
      <div className="auth-panel">
        <div className="auth-panel-orb auth-panel-orb-1" />
        <div className="auth-panel-orb auth-panel-orb-2" />
        <div className="auth-panel-content">
          <Link to="/welcome" className="auth-logo">
            <div className="auth-logo-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
              </svg>
            </div>
            <span className="auth-logo-text">AIFinAdvisor</span>
          </Link>
          <div className="auth-panel-tagline">
            <h2>Start your journey.</h2>
            <p>
              Create your free account and let AI do the heavy lifting for your
              finances.
            </p>
          </div>
          <div className="auth-panel-features">
            {[
              "AI-powered budget insights",
              "Real-time transaction tracking",
              "Personalised savings goals",
              "Bank-level security",
            ].map((f) => (
              <div key={f} className="auth-panel-feature">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline w-3 h-3 mr-2"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="auth-form-side">
        <div className="auth-form-card">
          <div className="auth-form-header">
            <h1 className="auth-form-title">Create account</h1>
            <p className="auth-form-desc">
              Join thousands who manage their money smarter
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            {error && (
              <div role="alert" className="auth-error">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </div>
            )}

            <div className="auth-field">
              <label htmlFor="email" className="auth-label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="auth-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password" className="auth-label">
                Password
              </label>
              <div className="auth-input-wrap">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="auth-input auth-input-padded"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="auth-eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                        clipRule="evenodd"
                      />
                      <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path
                        fillRule="evenodd"
                        d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="monthly_income" className="auth-label">
                Monthly income{" "}
                <span className="auth-label-optional">(optional)</span>
              </label>
              <div className="auth-input-wrap">
                <span className="auth-input-prefix">$</span>
                <input
                  id="monthly_income"
                  type="number"
                  step="0.01"
                  min="0"
                  className="auth-input auth-input-prefixed"
                  placeholder="5,000"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                />
              </div>
              <p className="auth-field-hint">
                Helps us personalise your budget recommendations
              </p>
            </div>

            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="auth-spinner" />
                  Creating account…
                </>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login" className="auth-switch-link">
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
