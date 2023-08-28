import Link from 'next/link';
import Header from './components/Common/Header';
import WorkExperience from './components/Common/WorkExperience';
import Footer from './components/Common/Footer';
import SocialLinks from './components/Common/SocialLinks';
import ProjectCard from './components/Common/ProjectCard';

export default function Home() {
  return (
    <div className='bg-zinc-100'>
      <Header />

      <main className="container px-12 mx-auto max-w-6xl flex flex-col min-h-screen bg-white">
        <div className="sm:px-8 mt-9 mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              Software developer, founder, and amateur astronaut.
            </h1>
            <p className="mt-6 text-base text-zinc-600">
              I’m Vinicius, a software Developer and entrepreneur based in Lisbon.
              Welcome to My Super App.
              I’m the founder and CEO of VPS, where we develop technologies for space exploration.
            </p>

            <SocialLinks />
          </div>
        </div>

        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 my-16'>
          <ProjectCard />

          <WorkExperience />
        </div>
      </main>

      <Footer />
    </div>
  )
}
