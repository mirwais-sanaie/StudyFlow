import Features from "@/components/core/Features";
import Home from "../components/core/Home";
import PreviewSection from "@/components/core/Preview";
import Footer from "@/components/core/Footer";

export default function page() {
  return (
    <div>
      <Home />
      <Features />
      <PreviewSection />
      <Footer />
    </div>
  );
}
