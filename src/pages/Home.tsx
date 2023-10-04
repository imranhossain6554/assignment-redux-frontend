 
import Books from "../components/Books";
import HeroBanner from "../components/ui/HeroBanner"; 
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Books />
      <Footer />
    </div>
  );
}
