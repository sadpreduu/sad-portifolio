"use Client"; 

import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButtons from './TabButtons';

const TAB_DATA = [{
  title: "Habilidades",
  id: "habilidades",
  content: (
    <ul className='list-disc pl-2'>
      <li>ReactJs/NextJs</li>
      <li>Springboot/Java/Kotlin</li>
      <li>Python/Flask/FastAPI/PyTorch</li>
      <li>Docker/Kubernetes</li>
      <li>OCI/AWS/AzureCloud</li>
      <li>Git/Github</li>
      <li>Electron.Js</li>
      <li>.Net/C#</li>
    </ul>
  ),
}, 
{ 
  title: "Educação",
  id: "educacao",
  content: (
    <ul className='list-disc pl-2'>
      <li>Centro Universitario IBMR</li>
      <li>DIO</li>
    </ul>
  ),
},
{
title: "Experiência",
id: "experiencia",
content: (
  <ul className='list-disc pl-2'>
    <li>Freelancer(2019 - 2020)</li>
    <li>CDA Distribuidora(2022 - 2023)</li>
  </ul>
),
},
{
title: "Certificados",
id: "certificados",
content: (
  <ul className='list-disc pl-2'>
    <li>CS50, Harvard</li>
    <li>Git Github, Udemy</li>
    <li>Docker Especialista, Udemy</li>
    <li>Controle de Versão, DIO</li>
  </ul>
),
},

]

const AboutSection = () => {

  const [tab, setTab] = useState("habilidades");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/sad_icon.jpg" width={350} height={350} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>
                    <p className="text-base lg:text-lg">
                    Desenvolvedor FullStack com especialização em Python e Java, 
                    com 3 anos de experiência, formado em Análise e Desenvolvimento 
                    de Sistemas e certificado pela CS50 em Harvard.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButtons 
                        selectTab={() => 
                        handleTabChange("habilidades")} 
                        active={tab === "habilidades"}
                        >
                          {" "}
                          Habilidades{" "}
                        </TabButtons>
                        <TabButtons 
                        selectTab={() => 
                        handleTabChange("educacao")} 
                        active={tab === "educacao"}
                        >
                          {" "}
                          Educação{" "}
                        </TabButtons>
                        <TabButtons 
                        selectTab={() => 
                        handleTabChange("experiencia")} 
                        active={tab === "experiencia"}
                        >
                          {" "} 
                          Experiência{" "}
                        </TabButtons>
                        <TabButtons 
                        selectTab={() => 
                        handleTabChange("certificados")} 
                        active={tab === "certificados"}
                        >
                          {" "}
                          Certificados{" "}
                        </TabButtons>
                    </div>
                    <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection