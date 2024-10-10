import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuComponent from "@/components/MenuComponent";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
       <Header />
       <div className="lg:hidden hidden md:block">
       <MenuComponent />
       </div>
      <main className="mt-1">
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
