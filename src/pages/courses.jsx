import BookingButton from "@/components/courses/BookingButton"
import CourseCard from "@/components/courses/Coursebox1"
import Coursebox1 from "@/components/courses/Coursebox1"
import Faq from "@/components/courses/Faq"
import StudentsWorkComponent from "@/components/courses/StudentsWorkComponent"
import Header from "@/components/Header"
import Link from "next/link"

const Courses = () => {
 

  return (
    <main>
      <Header />
      <section className="mt-1 max-h-screen pb-8 flex flex-col items-center bg-[#F0EDE3]">
        <div className="flex flex-col mt-8 gap-4">
          <div className="flex flex-col items-center gap-0">
            <h2 className="text-center leading-[20px] font-jacques text-[26px] text-[#A88C13]">
              COURSES
            </h2>
            <div className="w-[11rem] bg-[#969494] h-[1.5px] rounded-sm"></div>

          </div>
          <p className="w-[370px] text-center font-montserrat text-xs text-[#6C6262] font-medium"
            >
              Learn bridal and personal makeup <span className="text-yellow-500">step-by-step</span> from Diya and Deepali, as they share their expertise to take you from <span className="text-yellow-500">basics to advanced</span> skills even if
               you dont know anything about makeup.
          </p>
        </div>

        <video src="">

        </video>

        <BookingButton />
      </section>

      <section className="bg-white min-h-screen w-full px-4 py-8">
        <h2 className="text-center font-jacques text-[26px] text-[#A88C13]  leading-tight">Select Courses</h2>
                <CourseCard />
        <div className="flex justify-center mt-10">
           <BookingButton />
        </div>
      </section>

      <section className="min-h-screen bg-[#F0EDE3] py-8 flex flex-col">
        <div>
        <h2 className="text-center leading-[20px] font-jacques text-[26px] text-[#A88C13]">
            Our Students Work
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">
              <StudentsWorkComponent/>
        </div>

        <div className="">
          <Faq />
        </div>
      </section>
    </main>
  )
}

export default Courses