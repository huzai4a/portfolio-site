import { About, Experience, Landing, Projects, Header } from "@/components";
import { FloatingNav, BackgroundLines } from "@/components/ui";
import Image from "next/image";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoFolderSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="relative bg-navy-50 flex justify-center items-center flex-col overflow-hidden p-2">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'home', link: '#home', icon: <FaHome />}, 
          {name: 'about', link: '#about', icon: <FcAbout />},
          {name: 'experience', link: '#experience', icon: <FaBriefcase />},
          {name: 'projects', link: '#projects', icon: <IoFolderSharp />}
        ]}/>
      </div>

      <section className="w-full relative" id="about">
        <BackgroundLines>
        <Header /> {/* fix cv link (create route) */}
          <Landing />
        </BackgroundLines>
      </section>
        
        <About />
        <Experience />
        <Projects />
        
    </div>
  );
}
