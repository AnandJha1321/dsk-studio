import { addDoc, collection } from '@firebase/firestore';
import { firestore } from '@/firebase';


import React, { useRef, useState } from 'react'

const CourseForm = () => {

  const formRef = useRef({ name: '', email: '', phone: '', course: '' });
  const ref = collection(firestore, "submissions");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      number: formRef.current.phone.value,
      course: formRef.current.course.value,
    };

    try {
      await addDoc(ref, data);
      setIsSubmitted(true);
      e.target.reset();  // Reset form after submission
    } catch (error) {
      console.log(error);
    }
  };

return (
  <section>
    <div className="flex flex-col md:flex-row bg-[#F0EDE3] p-6 md:p-12 space-y-6 md:space-y-0">
      {/* Form Section */}
      <div className="flex-1 md:pr-8">
        <h2 className="text-3xl tracking-wide font-bold mb-2  md:text-center font-jacques text-[#D8B661] ">Talk With Us Now!</h2>
        <p className="text-gray-700 my-6 md:text-center font-montserrat">
          So that we can take you from a beautiful Girl to making a Girl more Beautiful😍
        </p>
        
        <form className="space-y-4 font-montserrat flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name..."
            ref={(el) => (formRef.current.name = el)}
            className="w-full  md:w-[70%] border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
          />
          <input
            type="email"
            ref={(el) => (formRef.current.email = el)}
            placeholder="Your Email Address..."
            className="w-full md:w-[70%] border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
          />
          <input
            type="tel"
            ref={(el) => (formRef.current.phone = el)}
            placeholder="Your phone number"
            className="w-full border md:w-[70%] border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
          />
          <select
            ref={(el) => (formRef.current.course = el)}
            className="w-full md:w-[70%] border border-gray-300 p-3 rounded focus:outline-none focus:border-gray-500"
          >
            <option defaultValue >Select Courses...</option>
            <option>Bridal Course</option>
                    <option>Basic to International</option>
                    <option>Hairstyle</option>
                    <option>Beautician Course</option>
                    <option>Advance Diploma Course</option>
                    <option>Hair Treatment Course</option>
            {/* Add course options here */}
          </select>
          <div className='py-4 w-full md:text-center'>
          <button
            type="submit"
            className="w-full md:max-w-fit md:px-14 md:text-xl px-5   bg-[#cfb336] hover:bg-[#A88C13] text-white py-3  font-semibold transition"
          >
            SUBMIT NOW
          </button>
          </div>
        </form>
      </div>

      {/* Image Section (hidden on mobile) */}
      
    </div>
    {isSubmitted && (
              <div className=" w-[98%] mx-auto bg-green-100 p-4 rounded-lg flex items-center justify-center">
                <span className="text-green-600 mr-2 text-2xl font-bold">✔</span>
                <p className="text-green-700 font-montserrat">
                  Thank you for enrolling, You will get the Details on Your Email Soon!</p>
              </div>
            )}
  </section>
    
  );
};


export default CourseForm