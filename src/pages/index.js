import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
     
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Head>
       <title>PEDRO CARVALHO</title>
     </Head>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
      </div>

    </main>
  );
}
