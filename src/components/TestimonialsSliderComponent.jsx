import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import slide1 from '@/assets/slide1.JPG'
import slide2 from '@/assets/slide2.JPG'

// Import your CSS styles (you can include your styles in a separate CSS file or keep it in a global stylesheet)

// Import any images you want to use


const testimonials = [
  {
    image: slide1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.",
    name: "Marnie Lotter",
    job: "Web Developer",
  },
  {
    image: slide2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.",
    name: "John Doe",
    job: "Graphic Designer",
  },
  {
    image: '',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci, fugit, architecto amet asperiores doloremque deserunt eum nemo.",
    name: "Jane Smith",
    job: "Product Manager",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="container">
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
            className="image" />
            <p className='font-montserrat'>{testimonial.text}</p>
            <i className="bx bxs-quote-alt-left quote-icon"></i>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
