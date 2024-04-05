import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                  <h1 className="font-RubikScribble text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    Olá, sou Pedro Carvalho
                  </h1>
                  <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Fusce nibh felis, euismod vitae nunc at, viverra consequat mauris. 
                  Ut sagittis tincidunt orci, vel molestie purus dignissim in. 
                  Phasellus aliquam fermentum ultricies. 
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-800 via-red-500 to-pink-800 hover:bg-slate-200 text-white">
                        Entre em Contato
                    </button>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                        Download CV
                    </button>
                </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative">
                        <Image
                            src="/images/sad_icon.jpg"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;