import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
       <Header />
      <main className="mt-1">
        <Hero />
        <About />
        <Gallery />
      </main>
    </div>
  );
}
