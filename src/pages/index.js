import About from "@/components/About";
import Footer from "@/components/Footer";
import CourseForm from "@/components/Forms/CourseForm";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuComponent from "@/components/MenuComponent";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DSK Makeover & Academy</title>
        <meta
          name="description"
          content="A well-known makeup studio in Bhayandar East, offering services from makeup application to training aspiring makeup artists."
        />
        <meta property="og:title" content="DSK Makeover & Academy" />
        <meta property="og:image" content={sharing192} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DSK Makeover & Academy",
              "url": "https://www.dskmakeover.com",
              "logo": {sharing192},
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9867035747",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.instagram.com/dsk_makeup_studio/"
              ]
            }),
          }}
        />
      </Head>
    <div className="overflow-x-hidden">
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
        <CourseForm />
        <Footer />
      </main>
    </div>
    </>
  );
}
