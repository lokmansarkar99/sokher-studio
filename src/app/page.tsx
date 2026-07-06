import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import CustomFrames from "@/components/CustomFrames";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <CustomFrames />
      <Footer />
    </main>
  );
}
