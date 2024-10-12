import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import slide1 from '@/assets/slide1.JPG'
import slide2 from '@/assets/slide2.JPG'
import { StarIcon } from '@heroicons/react/solid';
import testimonial1 from '@/assets/testimonial1.jpg'
import testimonial2 from '@/assets/testimonial2.jpg'
import testimonial3 from '@/assets/testimonial3.jpg'
import testimonial4 from '@/assets/testimonial4.jpg'
import testimonial5 from '@/assets/testimonial5.jpg'
import Link from 'next/link';


// Import your CSS styles (you can include your styles in a separate CSS file or keep it in a global stylesheet)

// Import any images you want to use


const testimonials = [
  {
    image: testimonial1,
    text: "Excellent service and treatments.. i hv done smoothening and O3 hydrafacial and i am very happy with results.. thanku DSK makeovers for such a transformation.. staff and the owner deepali is very very cooperative and polite.. highly recommended..",
    name: "Marnie Lotter",
    job: "Web Developer",
  },
  {
    image: testimonial3,
    text: "One of the best decision I made for my wedding was to appoint DSK MAKEOVER. Whole team is leaded by perfect leader. Thankful to Deepali Aunty speciallly for making me look not only elegant but also confident by acknowledging my concerns and handling them with utter patience and care.",
    name: "Jane Smith",
    job: "Product Manager",
  },

  {
    image: testimonial4,
    text: "Hey I m student of their now I am also professonal at all things.Teacher over their are very great!",
    name: "Jane Smith",
    job: "Product Manager",
  },

  {
    image: testimonial2,
    text: "It was an awesome experience with her... Nice & Superb Work. Would recommend her for Beauty 😍",
    name: "Jane Smith",
    job: "Product Manager",
  },

  {
    image: testimonial5,
    text: "DSK makeover an awesome place to give your hair a new and stylish look. Polite behaviour off all the staffs and friendly environment. It's my 1st visit and I love to visit again and again. And also I suggested my friends and family to visit this makeover point. One more things want to add that it's a very pocket friendly makeover place to give you a best look.",
    name: "John Doe",
    job: "Graphic Designer",
  },
];


const TestimonialSlider = () => {
  return (
    <section className="container">
      <div className='flex flex-col items-center justify-center'>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            className="testimonial"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="slide">
                <Image 
                src={testimonial.image} 
                alt={`Testimonial ${index + 1}`} 
                className="image" 
                quality={100}
                />
                <div className='flex'>
                <i><StarIcon className='text-yellow-400 w-6' /></i>
                <i><StarIcon className='text-yellow-400 w-6' /></i>
                <i><StarIcon className='text-yellow-400 w-6' /></i>
                <i><StarIcon className='text-yellow-400 w-6' /></i>
                <i><StarIcon className='text-yellow-400 w-6' /></i>
                </div>
          
                <p className='font-montserrat mb-8'>{testimonial.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>

        {/* <div className='mx-auto mt-10'>
          <button className='w-[160px] px-6  h-[45px] hover:bg-[#A88C13] transition duration-300 bg-[#CFB661] font-montserrat text-white'>
            See More 
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialSlider;
