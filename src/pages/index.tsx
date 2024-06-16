import { CardsGrid } from "@/components/Card/Card";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <main className={`flex flex-col items-center`}>
      <h1 className="text-2xl  font-bold font-sans md:text-7xl sm:text-5xl">GREAT VIDEOS START WITH A PLAN</h1>
      <div className="flex flex-row space-x-3">
           <h1>Try VEED with our</h1>
           <h1 className="cursor-pointer text-sky-400 mb-10">Free Plan</h1>
      </div>
      <CardsGrid />
      <h1 className="mt-3 mb-2">
         Trusted by teams at
      </h1>
      <Slider/>
    </main>
  )
}
