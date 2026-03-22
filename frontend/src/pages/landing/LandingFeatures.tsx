import { features } from "@/constants/landing-page/features";

export function LandingFeatures() {
  return (
    <>
      {/* ── Features ── */}
      <section className="lp-features">
        <div className="lp-section-inner">
          <div className="lp-section-label">Features</div>
          <h2 className="lp-section-title">
            Everything you need to thrive financially
          </h2>
          <p className="lp-section-sub">
            From day-to-day budgeting to long-term wealth building — we have got
            you covered.
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
    </>
  );
}
