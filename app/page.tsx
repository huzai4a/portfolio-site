import { About, Experience, Landing, Projects, Header } from "@/components";
import { FloatingNav, BackgroundLines } from "@/components/ui";

export default function Home() {
  return (
    <div className="relative bg-navy-50 flex justify-center items-center flex-col overflow-hidden p-2">
      <div className="w-full">
        <FloatingNav navItems={[
          {name: 'home', link: '#home', active: false, id:'home'}, 
          {name: 'about', link: '#about', active: false, id:'about'},
          {name: 'experience', link: '#experience', active: false, id:'experience'},
          {name: 'projects', link: '#projects', active: false, id:'projects'}
        ]}/>
      </div>

      <section className="w-full relative min-h-dvh" id="home">
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