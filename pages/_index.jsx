import About from "components/About";
import Features from "components/Features";
import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import Roadmap from "components/Roadmap";
import Tokenomics from "components/Tokenomics";

export default function Home() {
  return (
    <div className="relative">
      <img
        src="/hero-bg.svg"
        className="fixed inset-0 min-h-full min-w-full object-cover"
      />
      {/* <Header /> */}
      <Hero />
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
}
