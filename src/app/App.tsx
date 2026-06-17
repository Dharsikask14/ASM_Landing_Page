import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { DashboardShowcase } from "./components/DashboardShowcase";
import { ChallengesSection } from "./components/ChallengesSection";
import { PlatformArchitecture } from "./components/PlatformArchitecture";
import { FeaturesSection } from "./components/FeaturesSection";
import { AdvancedFeatures } from "./components/AdvancedFeatures";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";
import { TargetCustomers } from "./components/TargetCustomers";

import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { LoginModal } from "./components/LoginModal";

{/* MARKER-MAKE-KIT-INVOKED */}

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Navbar />
        <HeroSection />
        <DashboardShowcase />
        <ChallengesSection />
        <PlatformArchitecture />
        <FeaturesSection />
        <AdvancedFeatures />
        <AnalyticsDashboard />
        <TargetCustomers />

        <FinalCTA />
        <Footer />
        <LoginModal />
      </div>
    </AuthProvider>
  );
}
