import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Articles from "@/components/Articles";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pillars />
      <Articles />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
}
