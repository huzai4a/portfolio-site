"use client";

import { Header, Landing, About, Experience, Projects, Footer } from "@/components";
import { FloatingNav, BackgroundLines, Timeline } from "@/components/ui";
import { data } from "@/data";
import React from "react";



export default function Home() {
  return (
    <div className="relative bg-navy-50 p-2 font-geistSans">
      <div className="w-full">
        <FloatingNav className="z-[1000]" navItems={[
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
      <Timeline data={data} />

      <Projects />
      <Footer />
    </div>
  );
}