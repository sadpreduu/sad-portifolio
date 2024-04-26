import React from 'react'
import Image from 'next/image'

function AboutSection() {
  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/sad_icon.jpg" width={350} height={350} />
            <div clasName="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
                    <p className="text-base lg:text-lg">
                    Desenvolvedor FullStack com especialização em Python e Java, 
                    com 3 anos de experiência, formado em Análise e Desenvolvimento 
                    de Sistemas e certificado pela CS50 em Harvard.
                    </p>
                    <div clasName="flex flex-row mt-8">
                        <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-red-500'>Habilidades</span>
                        <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-red-500'>Educação</span>
                        <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-red-500'>Experiência</span>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection