import React from "react";
// 사진추가
import Image from "next/image";

const HeroScetion = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-lefts">
          <h1 className="text-white md-4 text-6xl font-extrabold">
            Hello I'm YoungBin
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            내용 넣기
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black mb-4">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full border-solid border-2 border-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/30_mypic.pn"
              alt="my Image"
              priority
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroScetion;
