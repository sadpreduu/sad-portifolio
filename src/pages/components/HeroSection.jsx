"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                  <h1 className="font-AtonFont text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-red-500 to-pink-600"> 
                    Eae, eu sou{" "} 
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Pedro Carvalho', 
                             1000, 
                            'Desenvolvedor',
                             1000, 
                            'Arquiteto de Software', 
                             1000,
                             'Estudante', 
                             1000,
                              'Gamer', 
                             1000
                            ]}
                        wrapper="span"
                        speed={45}
                        style={{fontSize: '1em', display: 'inline-block'}}
                        repeat={Infinity}
                    /> 
                  </h1>
                  <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                    Olá, meu nome é Pedro Carvalho. 
                    Sou desenvolvedor FullStack há 3 anos. 
                    Sou entusiasta de jogos e um grande estudante da tecnologia. 
                    Você sabia que SAD na verdade quer dizer Software Análise e Desenvolvimento?
                </p>
                <div>
                    <a href="mailto:pedrinhoafonco@gmail.com">
                        <button className="
                            px-6 py-3 
                            w-full 
                            sm:w-fit 
                            rounded-full 
                            mr-4 
                            bg-gradient-to-br from-red-800 via-red-500 to-pink-600 hover:bg-slate-200 text-white">
                                Entre em Contato
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/pedro-ca" target="_blank" rel="noopener noreferrer">
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-800 via-red-500 to-pink-600 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Perfil Linkedin
                            </span>
                        </button>
                    </a>
                </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                        <Image
                            src="/images/rounded-sadp3.png"
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