import { Link } from "react-router-dom";

export function LandingNav() {
    return (
        <>
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
        </>
    )
}