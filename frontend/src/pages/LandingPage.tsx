import { stats } from "@/constants/landing-page/stats";
import { features } from "@/constants/landing-page/features";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* ── Nav ── */}
      <nav className="lp-nav">
        <div className="lp-nav-inner">
          <div className="lp-logo">
            <div className="lp-logo-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
              </svg>
            </div>
            <span className="lp-logo-text">AIFinAdvisor</span>
          </div>
          <div className="lp-nav-actions">
            <Link to="/login" className="lp-nav-link">Sign In</Link>
            <Link to="/register" className="lp-nav-cta">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="lp-hero">
        <div className="lp-hero-bg-orb lp-hero-bg-orb-1" />
        <div className="lp-hero-bg-orb lp-hero-bg-orb-2" />
        <div className="lp-hero-bg-orb lp-hero-bg-orb-3" />

        <div className="lp-hero-inner">
          <div className="lp-badge">
            <span className="lp-badge-dot" />
            AI-Powered Financial Intelligence
          </div>

          <h1 className="lp-hero-title">
            Take Control of Your
            <span className="lp-hero-accent"> Financial Future</span>
          </h1>

          <p className="lp-hero-sub">
            AIFinAdvisor combines cutting-edge AI with intuitive tools to help
            you budget smarter, save faster, and invest with confidence — all
            in one beautiful dashboard.
          </p>

          <div className="lp-hero-actions">
            <Link to="/register" className="lp-btn-primary">
              Start for Free
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link to="/login" className="lp-btn-ghost">Sign In</Link>
          </div>

          <div className="lp-stats-row">
            {stats.map((s) => (
              <div key={s.label} className="lp-stat-item">
                <div className="lp-stat-value">{s.value}</div>
                <div className="lp-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview Card */}
        <div className="lp-preview-wrap">
          <div className="lp-preview-card">
            <div className="lp-preview-header">
              <div className="lp-preview-dots">
                <span /><span /><span />
              </div>
              <span className="lp-preview-title">Financial Overview</span>
            </div>
            <div className="lp-preview-body">
              <div className="lp-preview-balance-row">
                <div>
                  <div className="lp-preview-label">Total Balance</div>
                  <div className="lp-preview-balance">$24,853.00</div>
                </div>
                <div className="lp-preview-up-badge">↑ 12.5%</div>
              </div>
              <div className="lp-preview-bars">
                {[70, 45, 85, 60, 90, 55, 75].map((h, i) => (
                  <div key={i} className="lp-preview-bar-wrap">
                    <div className="lp-preview-bar" style={{ height: `${h}%` }} />
                  </div>
                ))}
              </div>
              <div className="lp-preview-tags">
                <span className="lp-preview-tag lp-tag-green">Savings +8.2%</span>
                <span className="lp-preview-tag lp-tag-blue">Investments</span>
                <span className="lp-preview-tag lp-tag-purple">Budget on track</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="lp-features">
        <div className="lp-section-inner">
          <div className="lp-section-label">Features</div>
          <h2 className="lp-section-title">Everything you need to thrive financially</h2>
          <p className="lp-section-sub">
            From day-to-day budgeting to long-term wealth building — we have got you covered.
          </p>
          <div className="lp-features-grid">
            {features.map((f) => (
              <div key={f.title} className="lp-feature-card">
                <div className="lp-feature-icon">{f.icon}</div>
                <h3 className="lp-feature-title">{f.title}</h3>
                <p className="lp-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="lp-cta">
        <div className="lp-cta-orb" />
        <div className="lp-section-inner lp-cta-inner">
          <h2 className="lp-cta-title">Ready to transform your finances?</h2>
          <p className="lp-cta-sub">
            Join thousands of users who have already taken control of their financial future.
          </p>
          <Link to="/register" className="lp-btn-primary lp-btn-lg">
            Get Started for Free
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-logo">
            <div className="lp-logo-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
              </svg>
            </div>
            <span className="lp-logo-text">AIFinAdvisor</span>
          </div>
          <p className="lp-footer-copy">© 2026 AIFinAdvisor. All rights reserved.</p>
          <div className="lp-footer-links">
            <Link to="/login" className="lp-footer-link">Sign In</Link>
            <Link to="/register" className="lp-footer-link">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
