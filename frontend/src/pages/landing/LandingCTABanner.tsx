import { Link } from "react-router-dom";

export function LandingCTABanner() {
  return (
    <>
      {/* ── CTA Banner ── */}
      <section className="lp-cta">
        <div className="lp-cta-orb" />
        <div className="lp-section-inner lp-cta-inner">
          <h2 className="lp-cta-title">Ready to transform your finances?</h2>
          <p className="lp-cta-sub">
            Join thousands of users who have already taken control of their
            financial future.
          </p>
          <Link to="/register" className="lp-btn-primary lp-btn-lg">
            Get Started for Free
          </Link>
        </div>
      </section>
    </>
  );
}
