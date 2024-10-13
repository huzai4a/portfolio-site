import { About, Experience, Landing, Projects, Header } from "@/components";
import { FloatingNav, BackgroundLines } from "@/components/ui";
import Image from "next/image";
import { FaBriefcase, FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoFolderSharp } from "react-icons/io5";

export default function Home() {
  return (
    <main className="relative bg-navy-50 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Header /> {/* fix cv link (create route) */}
        <FloatingNav navItems={[
          {name: 'home', link: '/', icon: <FaHome />}, 
          {name: 'about', link: '/', icon: <FcAbout />},
          {name: 'experience', link: '/', icon: <FaBriefcase />},
          {name: 'projects', link: '/', icon: <IoFolderSharp />}
        ]} />
      </div>
      <BackgroundLines svgOptions={{ duration: 10 }} className="w-full">
        <Landing />
      </BackgroundLines>
        
        <About />
        <Experience />
        <Projects />
    </main>
  );
}
