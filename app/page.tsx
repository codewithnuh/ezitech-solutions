import About from "@/components/screens/home/About";
import Hero from "@/components/screens/home/Hero";
import Service from "@/components/screens/home/Service";
import Testimonials from "@/components/screens/home/Testimonials";
import Work from "@/components/screens/home/Work";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Testimonials />
      <Service />
      <Work />
    </main>
  );
}
