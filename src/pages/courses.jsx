import BookingButton from "@/components/courses/BookingButton"
import CourseCard from "@/components/courses/Coursebox1"
import Coursebox1 from "@/components/courses/Coursebox1"
import Faq from "@/components/courses/Faq"
import StudentsWorkComponent from "@/components/courses/StudentsWorkComponent"
import Footer from "@/components/Footer"
import CourseForm from "@/components/Forms/CourseForm"
import Header from "@/components/Header"
import MenuComponent from "@/components/MenuComponent"
import Head from "next/head"
import sharing192 from '@/assets/sharing192.png'
import Link from "next/link"

const Courses = ({
  
}) => {

  return (
    <>  
      <Head>
      <title>courses - DSK Makeover & Academy</title>
        <meta
          name="description"
          content="From Basic to Advance Makeup Courses, become an International Makeup within 4 months with  
          expert teaching you advance level even if you don't know anything about makeup..."
        />
        <meta property="og:title" content="DSK Makeover & Academy" />
        <meta property="og:image" content={sharing192} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
<main>
  <Header />
  <div className="hidden md:block">
  <MenuComponent />
  </div>
  <section className="mt-1 max-h-screen pb-8 flex flex-col items-center bg-[#F0EDE3]">
    <div className="flex flex-col py-14 gap-4">
      <div className="flex flex-col items-center gap-0">
        <h2 className="text-center leading-[20px] md:leading-[30px] font-jacques text-[26px] md:text-[40px] text-[#A88C13]">
          COURSES
        </h2>
        <div className="w-[11rem] md:w-[16rem]  bg-[#969494] h-[1.5px] rounded-sm"></div>

      </div>
      <p className="w-[370px] text-center sm:w-[550px] md:w-[600px] lg:w-[800px] sm:text-lg  md:text-center font-montserrat text-xs md:text-xl text-[#6C6262] font-medium"
        >
          Learn bridal and personal makeup <span className="text-yellow-500"> step-by-step</span> from Diya and Deepali, as they share their expertise to take you from <span className="text-yellow-500">basics to advanced</span> skills even if
           you dont know anything about makeup.
      </p>
    </div>

    <video src="">

    </video>

    <BookingButton />
  </section>

  <section className="bg-white min-h-screen w-full px-4 py-8">
    <h2 className=" md:text-[40px] text-center font-jacques text-[26px] text-[#A88C13]  leading-tight"
    >Select Courses</h2>
            <CourseCard />
    <div className="flex justify-center mt-10">
       <BookingButton />
    </div>
  </section>

  <section className="min-h-screen bg-[#F0EDE3] py-8 flex flex-col">
    <div>
    <h2 className="text-center  md:text-[40px] leading-[20px] font-jacques text-[26px] text-[#A88C13]">
        Our Students Work
      </h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
          <StudentsWorkComponent/>
    </div>

    <div>
    <CourseForm />

    </div>
    <div className="">
      <Faq />
    </div>
  </section>

  <Footer />
</main> 
    </>
  )
}


export default Courses