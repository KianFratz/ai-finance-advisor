import { LandingNav } from "./LandingNav";
import { LandingHero } from "./LandingHero";
import { LandingFeatures } from "./LandingFeatures";
import { LandingCTABanner } from "./LandingCTABanner";
import { LandingFooter } from "./LandingFooter";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingCTABanner />
      <LandingFooter />
    </div>
  );
}
