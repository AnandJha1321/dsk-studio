import { useEffect, useState } from 'react';

const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = endValue;
    const incrementTime = (duration * 1000) / end;  // Calculate the interval

    let counter = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === end) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter); // Cleanup interval on component unmount
  }, [endValue, duration]);

  return ;
};

const CounterSection = () => {
  return (
<section className= "min-h-[600px] w-full bg-black py-8 flex flex-col items-center gap-20 font-montserra md:flex-row md:items-center md:justify-center md:gap-28">      
  <div>
    <div className= "text-[#CFB661] font-jacques text-[16vw] md:text-[10vw] leading-tight pl-2">20+</div>        
    <p className="text-white text-center md:text-[18px]">Years of Experience</p>
  </div>
      <div>
      <div className= "text-[#CFB661] font-jacques text-[16vw] md:text-[10vw] leading-tight pl-2">25000+</div>        
      <p className= "text-white text-center md:text-[18px]">Happy Customers</p>
      </div>
      <div>
      <div className= "text-[#CFB661] font-jacques text-[16vw] md:text-[10vw] leading-tight pl-2">5.0+</div>        
        <p className= "text-white text-center md:text-[18px]">Rating on Google</p>
      </div>
</section >
  );
};

export default CounterSection;
