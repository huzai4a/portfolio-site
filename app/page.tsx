import Landing from "@/components/Landing";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome, FaQuestionCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-navy-50 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'home', link: '/', icon: <FaHome />}, {name: 'about', link: '#about', icon: <FaQuestionCircle />}
        ]} />
        <Landing />
      </div>
    </main>
  );
}
