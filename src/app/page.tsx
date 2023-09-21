import CTA from "@/components/CTA";
import HeroImageCard from "@/components/HeroImageCard";

export default function Home() {
  return (
    <main className="flex justify-center items-center mx-auto max-w-7xl flex-col min-h-[90vh]">
      {/* Hero Section */}
      <section className=''>
        {/* Headline */}
        <h1 className="text-black dark:text-white text-6xl font-bold text-center pt-16 pb-4">Full Stack NextJS Developer</h1>
        <div className="w-full mx-auto text-center text-xl font-medium pb-4">
          <h3 className="">Building Web Dreams into Reality</h3>
          <h3 className="">– Your Vision, My Expertise</h3>
        </div>
        <CTA />

        {/* Hero Image */}
        <HeroImageCard />
      </section>
    </main>
  )
}
