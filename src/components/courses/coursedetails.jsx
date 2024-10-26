// components/CourseDetailPage.js

import Image from 'next/image';
import React from 'react';
import corrective from '@/assets/corrective.jpeg'
import Footer from '../Footer';
import Header from '../Header';

const CourseDetailPage = ({
  title,
  subtitle,
  syllabus,
  tools,
  instructors,
  certification,
  pricing,
}) => {

    
  return (
    <section>
        <Header/>
        <div className="bg-[#f0ede3] min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <Image src={corrective} alt={title} className="w-full sm:h-full h-72 object-cover" />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 font-jacques">{title}</h1>
          <p className="text-center text-gray-600 mt-2 mb-6 font-montserrat">{subtitle}</p>

          {/* Course Syllabus */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#cfb336] mb-2 font-jacques">Course Syllabus</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 font-montserrat">
              {syllabus.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Tools & Skills Covered */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#cfb336] mb-2 font-jacques">Hairstyle Details & Tools Covered</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-medium text-[#cfb336] font-montserrat">Makeup products will be provided by us.</span>
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

          {/* Sign-Up Form */}
          <div className="bg-gray-50 p-6  shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-jacques">Enroll Now!</h2>
            <p className="text-gray-700 mb-8 mt-4">Let us take you from a beautiful Girl to making a Girl more beautiful.</p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder='Your Name'
                  id="name"
                  className="w-full p-2 border border-gray-300 text-base font-montserrat focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 text-base font-montserrat my-2 focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder='Your Email Address'
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="phone"
                  placeholder='Your Phone Number'
                  className="w-full p-2 border border-gray-300 text-base font-montserrat focus:outline-none focus:bg-white focus:border-gray-500"
                  required
                />
              </div>
              <div>
              <select
                    id="course"
                    className="block appearance-none w-full bg-white border border-gray-300 text-base py-2 px-4 pr-8 mb-4 font-montserrat  focus:outline-none focus:bg-white focus:border-gray-500"
                >
                    
                    <option defaultValue >Select Courses...</option>
                    <option>Bridal Course</option>
                    <option>Basic to International</option>
                    <option>Hairstyle</option>
                    <option>Beautician Course</option>
                    <option>Advance Diploma Course</option>
                    <option>Hair Treatment Course</option>
                </select>
                 
              </div>
              <button type="submit" className="w-full bg-[#cfb336] text-white py-4 font-semibold hover:bg-yellow-600 transition font-montserrat">
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </section>
    
  );
};

export default CourseDetailPage;
