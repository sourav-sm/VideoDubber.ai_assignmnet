import { CardsGrid } from "@/components/Card/Card";

export default function Home() {
  return (
    <main className={`flex flex-col items-center md:p-24 `}>
      <div>

      </div>
      <h1 className="text-7xl  font-extrabold font-sans">GREAT VIDEOS START WITH A PLAN</h1>
      <div className="flex flex-row space-x-3">
           <h1>Try VEED with our</h1>
           <h1 className="cursor-pointer text-sky-400">Free Plan</h1>
      </div>
      <CardsGrid />
      <h1>
      Trusted by teams at
      </h1>
    </main>
  )
}
