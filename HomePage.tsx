import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { UseCases } from "@/components/home/UseCases";
import { LayeredArchitecture } from "@/components/home/LayeredArchitecture";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <LayeredArchitecture />
      <UseCases />
    </div>
  );
}
