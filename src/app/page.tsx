import Nav from "@/components/sections/nav";
import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import TestimonialSection from "@/components/sections/testimonials";
import Carousel from "@/components/sections/carousel";
import FAQSection from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="flex flex-col w-screen justify-center !overflow-x-hidden min-h-screen">
      <Nav />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <Carousel />
        <FAQSection />
      </main>
    </div>
  );
}
