import React from 'react';
import Line from '../Line';
import Image from 'next/image';

const AboutArtists = ({ src, text, name, reverse }) => {
  const sentences = text.split('. ')

  return (
    <>
      <div className="md:none flex flex-col gap-[0.5px] lg:mt-10">
        <Line />
        <Line />
      </div>

      <div
        className={`flex flex-col gap-10 items-center md:flex-row md:items-start md:px-16 md:pl-20  lg:flex-row lg:items-start 
          lg:px-40 lg:justify-center justify-center p-6 ${
          reverse ? 'lg:flex-row-reverse md:flex-row-reverse xl:flex-row-reverse xl:mr-20' : ''
        }`}
      >
        <Image
          src={src}
          width={300}
          alt="ownersImages"
          className="xl:hidden"
        />
        <Image
          src={src}
          width={400}
          alt="ownersImages"
          className="hidden xl:block"
        />

        <div className="flex flex-col items-center xl:mt-16 justify-center gap-4  ">
          <div className="flex flex-col items-center gap-1">
            <p className="font-montserrat font-light text-[#787474] mt-8 leading-none text-[12px]">Hello, I’m</p>
            <h3 className="font-jacques text-[28px] leading-none">{name}</h3>
          </div>

          <div className="flex justify-center ">
            <p className="text-center text-[14px] tracking-wide text-[#6C6262] w-[90%] sm:w-[50%] md:w-[80%] lg:w-[100%] xl:w-[70%]"
            >
              {sentences.map((sentence, index) => (
                    <React.Fragment key={index}>
                        {sentence}.
                        <br />
                        <br />
                    </React.Fragment>
                ))}            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArtists;
