import { Link } from "react-router-dom";
import { stats } from "@/constants/landing-page/stats";

export function LandingHero() {
  return (
    <>
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
            you budget smarter, save faster, and invest with confidence — all in
            one beautiful dashboard.
          </p>

          <div className="lp-hero-actions">
            <Link to="/register" className="lp-btn-primary">
              Start for Free
            </Link>
            <Link to="/login" className="lp-btn-ghost">
              Sign In
            </Link>
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
                <span />
                <span />
                <span />
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
                    <div
                      className="lp-preview-bar"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="lp-preview-tags">
                <span className="lp-preview-tag lp-tag-green">
                  Savings +8.2%
                </span>
                <span className="lp-preview-tag lp-tag-blue">Investments</span>
                <span className="lp-preview-tag lp-tag-purple">
                  Budget on track
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
