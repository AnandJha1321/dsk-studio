import Header from "@/components/Header"
import Image from "next/image";
import mobileartistbg  from '@/assets/mobileartistsbg.jpg'
import Line from "@/components/Line";
import AboutArtists from "@/components/artists/AboutArtists";
import diya from '@/assets/diya.JPG'
import deepali from '@/assets/deepali.jpeg'
import CounterSection from "@/components/artists/CounterComponent";
import OverlayHero from "@/components/artists/OverlayHero";
import MenuComponent from "@/components/MenuComponent";
import Footer from "@/components/Footer";


const Artists = () => {
  const artistdata = [
    {name: "Diya Jogi", text:"Meet Diya Jogi ,a highly acclaimed Cidesco certified makeup artist and makeup trainer, renowned for their exceptional skill and artistry in the beauty industry, with a passion for enhancing natural beauty and a keen eye for detail, she has established themselves as a master of their craft, with a career spanning 3 years. As a Cidesco certified professional, she has demonstrated expertise in all aspects of makeup artistry, from bridal and evening makeup to special effects."},
    {name: "Deepali Jogi", text:"Meet Deepali Jogi ,she is a hairstyle trainer and beautician with a wealth of experience spanning 25 years, With a passion for empowering others to unlock their creativity and potential, she has dedicated their career to sharing their expertise with aspiring stylists and beauty enthusiasts. As a trainer, she is renowned for their patience, guidance, and ability to break down complex techniques into easy-to-master skills."}
  ]

  return (
    <main>
      <Header />
      <div className="hidden md:block">
        <MenuComponent />
      </div>
      {/* <section className="relative w-full h-[600px] hidden md:block"> */}
      {/* Background Image */}
      {/* <Image
        src={mobileartistbg}
        layout="fill"
        objectFit="cover"
        alt="Makeup Studio Hero"
        priority    
      /> */}

      {/* Overlay with text */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-70 flex items-end  px-8">
      <Image src={mobileartistbg} height={100} width={100}/>
        <div className="max-w-lg">
          <h1 className="text-white text-base leading-tight mb-1 font-medium font-montserrat  w-72">
            Elevating Your Beauty, Embracing Your Confidence
          </h1>
          <p className="text-gray-300 text-xs font-montserrat w-[270px] mb-7">
            through our courses, our work, industry level experience and our culture for you.
          </p>
        </div>
      </div>
    </section> */}

    <section className="min-h-screen w-full bg-[#F0EDE3] py-8 pb-12 flex flex-col items-center gap-12 font-montserrat">
      <AboutArtists src={diya} text={artistdata[0].text} name={artistdata[0].name} />
      <AboutArtists src={deepali} text={artistdata[1].text} name={artistdata[1].name} reverse />
    </section>

      <CounterSection />

      <OverlayHero />
      <Footer />
    </main>
  )
}

export default Artists