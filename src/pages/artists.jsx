import Header from "@/components/Header"
import Image from "next/image";
import mobileartistbg  from '@/assets/mobileartistsbg.jpg'
import Line from "@/components/Line";
import AboutArtists from "@/components/artists/AboutArtists";
import diya from '@/assets/diya.jpg'
import deepali from '@/assets/deepali.jpeg'


const Artists = () => {
  const artistdata = [
    {name: "Diya Jogi", text:"he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. As opposed to using 'Content hereIt is a long established"},
    {name: "Deepali Jogi", text:"he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. As opposed to using 'Content hereIt is a long established"}
  ]

  return (
    <main>
      <Header />
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

    <section className="min-h-screen w-full bg-[#F0EDE3] py-8 flex flex-col items-center gap-8 font-montserrat">
      
      <AboutArtists src = {diya} text= {artistdata[0].text} name= {artistdata[0].name} />
      <AboutArtists src = {deepali} text= {artistdata[1].text} name= {artistdata[1].name} />

      
    </section>
    </main>
  )
}

export default Artists