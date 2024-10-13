import Landing from "@/components/Landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-navy flex justify-center items-center fle-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Landing />
      </div>
    </main>
  );
}
