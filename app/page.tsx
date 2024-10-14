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
        
        <div className="max-w-7xl w-full">
            <div className="flex space-x-4">
              <a href="#section1" className="text-white">Section 1</a>
              <a href="#section2" className="text-white">Section 2</a>
              <a href="#section3" className="text-white">Section 3</a>
            </div>

        <div className="pt-20">
          <section id="section1" className="h-screen">
            <h2 className="text-white text-4xl mb-4">Section 1: Welcome</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
              nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
              venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            </p>
          </section>

          <section id="section2" className="h-screen">
            <h2 className="text-white text-4xl mb-4">Section 2: Features</h2>
            <p className="text-gray-300">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </section>

          <section id="section3" className="h-screen">
            <h2 className="text-white text-4xl mb-4">Section 3: Contact</h2>
            <p className="text-gray-300">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </section>
          
          <section className="h-screen">
            <h2 className="text-white text-4xl mb-4">More Content</h2>
            <p className="text-gray-300">
              This is additional content to make the page scrollable. Keep adding more content as necessary.
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
              nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
              venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            </p>
          </section>
        </div>
      </div>
        
    </div>
  );
}
