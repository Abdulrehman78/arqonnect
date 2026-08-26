import ScrollFadeSections from "@/components/ui/ScrollFadeSections";
import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import StatsStrip from "@/components/sections/StatsStrip";
import FeaturesBento from "@/components/sections/FeaturesBento";
import Integrations from "@/components/sections/Integrations";
import Testimonials from "@/components/sections/Testimonials";
import HomeFinalCta from "@/components/HomeFinalCta";

function Room({ children }: { children: React.ReactNode }) {
  return (
    <div className="scene-slide relative min-h-[100dvh] w-full bg-bg">
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <ScrollFadeSections id="home-rooms">
      <Room>
        <Hero />
      </Room>
      <Room>
        <LogoCloud />
      </Room>
      <Room>
        <StatsStrip />
      </Room>
      <Room>
        <FeaturesBento />
      </Room>
      <Room>
        <Integrations />
      </Room>
      <Room>
        <Testimonials />
      </Room>
      <Room>
        <HomeFinalCta />
      </Room>
    </ScrollFadeSections>
  );
}
