import CTA from "@/components/CTA";
import Features from "@/components/Features";
import HeroImageCard from "@/components/HeroImageCard";

export default function Home() {
  return (
    <main className="flex justify-center items-center mx-auto max-w-7xl flex-col min-h-[90vh]">
      {/* Hero Section */}
      <section className='pb-16'>
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

      {/* Features section */}
      <section className="py-16 border-t-2 border-b-2">
        <Features />
      </section>
    </main>
  )
}
