import { Hero } from "@/components/sections/Hero";
import { Ingredients } from "@/components/sections/Ingredients";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { Events } from "@/components/sections/Events";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="bg-aradana-dark min-h-screen">
      <Hero />
      <Ingredients />
      <SignatureDishes />
      <Events />
      <Testimonials />
      <CTA />
    </main>
  );
}
