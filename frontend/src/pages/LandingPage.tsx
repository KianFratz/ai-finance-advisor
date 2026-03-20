import { Link } from "react-router-dom";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Smart Budget Tracking",
    desc: "Automatically categorise every transaction and see exactly where your money goes — in real time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "AI-Powered Insights",
    desc: "Get personalised, actionable advice from our AI advisor that learns your spending habits over time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Goal Setting",
    desc: "Define savings goals and watch an interactive progress tracker keep you on the path to success.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Bank-Level Security",
    desc: "End-to-end encryption and zero-knowledge architecture ensure your financial data stays yours.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Rich Analytics",
    desc: "Interactive charts and monthly reports give you a crystal-clear picture of your financial health.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: "Smart Alerts",
    desc: "Proactive notifications warn you before you overspend so you are always one step ahead.",
  },
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "$2.4B", label: "Tracked Annually" },
  { value: "98%", label: "User Satisfaction" },
  { value: "4.9★", label: "App Store Rating" },
];

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
