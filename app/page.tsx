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
          {name: 'home', link: '#home', active: false, id:'home'}, 
          {name: 'about', link: '#about', active: false, id:'about'},
          {name: 'experience', link: '#experience', active: false, id:'experience'},
          {name: 'projects', link: '#projects', active: false, id:'projects'}
        ]}/>
      </div>

      <section className="w-full relative min-h-screen" id="home">
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