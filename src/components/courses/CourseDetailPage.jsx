// components/CourseDetailPage.js

import Image from 'next/image';
import Footer from '../Footer';
import Header from '../Header';
import CourseForm from '../Forms/CourseForm';
import CoursesButton from '../CoursesButton';
import CallnowButton from './CallnowButton';


const CourseDetailPage = ({
  image,
  title,
  subtitle,
  syllabus,
  tools,
  makeupDetails,
  hairsdetails,
  instructors,
  certification,
  pricing,
}) => {
 
  return (
    <section>
      <Header />
      <div className="bg-[#f0ede] min-h-screen py-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md overflow-hidden">
          <Image src={image} alt={title} className="w-full sm:h-full h-72 object-cover" />

          <div className="p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 font-jacques">{title}</h1>
            <p className="text-center text-gray-600 mt-2 mb-6 font-montserrat">{subtitle}</p>

            {/* Course Syllabus */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#cfb336] mb-2 font-jacques">
                {title === "Basic to International Makeup & Hairstyle Course" ? 'Syllabus' : 'Haircourse Details'}
                </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 font-montserrat">
                {syllabus.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#cfb336] mb-2 font-jacques">{
                title === "Basic to International Makeup & Hairstyle Course" ? '' : "Makeup Course Details"
                }</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 font-montserrat">
                {makeupDetails?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#cfb336] mb-2 font-jacques">Hairstyle Course</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 font-montserrat">
                {hairsdetails?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Tools & Skills Covered */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#cfb336] mb-2 font-jacques">Tools & Tips Covered</h2>
              <p className="text-gray-700 mb-2 font-montserrat">
                <span className="font-medium text-[#cfb336]">Makeup products will be provided by us.</span>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {tools.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Instructor Information */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#cfb336] mb-2 font-jacques">Our Instructors</h2>
              <p className="text-gray-700 font-montserrat">{instructors}</p>
            </div>

            {/* Certification & Pricing */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#cfb336] mb-2 font-jacques">Certification & Course Fees</h2>
              <p className="text-gray-700 font-montserrat">{certification}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 font-montserrat mt-3">
                {pricing.map((price, index) => (
                  <li key={index}>{price}</li>
                ))}
              </ul>
            </div>
            <div className='text-center my-10'>
              <CallnowButton />
            </div>
            <CourseForm />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CourseDetailPage;
