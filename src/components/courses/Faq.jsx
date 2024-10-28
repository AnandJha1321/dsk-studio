import { PlusIcon, XIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'


const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Manage which question is open


    const faqs = [
        { question: 'Why should I take this course?', answer: 'This course provides great insights into bridal makeup techniques.' },
        { question: 'What is the duration of this course?', answer: 'The course lasts for 4 weeks with weekend classes.' },
        { question: 'Are there any prerequisites?', answer: 'No prerequisites are required. This course is designed for beginners.' },
        { question: 'Will I receive a certificate?', answer: 'Yes, you will receive a certificate upon completion.' },
      ];

      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked question
      };

  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <div>
            <h2 className="text-center md:text-[40px] leading-[20px] md:leading-[32px] font-jacques text-[26px] text-[#A88C13]">
                Any Qestions?
            </h2>
            <p className='text-center md:text-[20px] text-[12px] leading-8 font-montserrat'>we have the answers! </p>
        </div>

        <div className='font-montserrat'>
            {faqs.map((faq, index) => (
                <div key={index}  onClick={() => toggleFAQ(index)}  className='flex flex-col cursor-pointer '>
                    <div className='flex  items-center justify-between mt-8'>
                        <span className="text-black md:text-[24px]">{faq.question}</span>
                            {activeIndex === index ? (
                            <XIcon className='w-5 text-[#A88C13]' /> // Cross icon when active
                            ) : (
                            <PlusIcon className='w-5 text-[#A88C13]' /> // Plus icon when inactive
                            )}
                        </div>
                    <div className='h-[0.5px] w-[80vw] bg-[#969494] '></div>

                    {/* Answer */}
                    {activeIndex === index && (
                        <div className='text-gray-700 text-sm  mt-3   w-[80vw]'>
                        {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faq