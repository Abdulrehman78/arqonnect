import Hero from "@/components/sections/Hero";
import LogoCloud from "@/components/sections/LogoCloud";
import StatsStrip from "@/components/sections/StatsStrip";
import FeaturesBento from "@/components/sections/FeaturesBento";
import Integrations from "@/components/sections/Integrations";
import Testimonials from "@/components/sections/Testimonials";
import PagePreviews from "@/components/PagePreviews";
import StoryPreviews from "@/components/StoryPreviews";
import HomeFinalCta from "@/components/HomeFinalCta";
import ScrollFadeSections from "@/components/ui/ScrollFadeSections";

export default function HomePage() {
  return (
    <>
      <ScrollFadeSections>
        <Hero embedded fullscreenSlide />
        <div>
          <LogoCloud />
          <StatsStrip />
        </div>
        <FeaturesBento />
        <Integrations />
        <Testimonials />
      </ScrollFadeSections>
      <PagePreviews />
      <StoryPreviews />
      <HomeFinalCta />
    </>
  );
}
