import React from 'react';
import Image from 'next/image';
import Header from '@components/Common/Header';
import WorkExperience from '@components/Common/WorkExperience';
import Footer from '@components/Common/Footer';
import SocialLinks from '@components/Common/SocialLinks';
import ProjectCard from '@components/Common/ProjectCard';

const appsData = [
  {
    href: '/cart',
    label: 'Shopping Cart App',
    description: 'Streamline your online shopping with our easy-to-use cart management system.'
  },
  {
    href: '/weather',
    label: 'Weather App',
    description: 'Stay updated on the weather with our app using OpenWeather and Geocoding APIs.'
  },  
  {
    href: '/todo',
    label: 'Todo App',
    description: 'Effortlessly manage your tasks, assignments, or activities with our user-friendly Todo App, designed to keep you organized.'
  },
  {
    href: '/workout',
    label: 'Workout App',
    description: 'Craft your personalized workout plan and achieve your fitness goals with our Workout App.'
  },
  {
    href: '/roman-numeral-calculator',
    label: 'Roman Calculator App',
    description: 'Easily convert numbers to Roman numerals using our straightforward calculator.'
  },
];

export default function Home() {
  return (
    <div className='bg-merino-50'>
      <Header appsData={appsData} />

      <main className="container px-12 mx-auto max-w-6xl flex flex-col min-h-screen bg-white">
        <div className="sm:px-8 mt-9 mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <Image
              alt="Vinicius Photo"
              width={64}
              height={64}
              src="/vini.jpg"
              className="h-16 w-16 rounded-full"
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              Software developer, entepreneur and web enthusiast.
            </h1>
            <p className="mt-6 text-base text-zinc-600">
              Welcome to my Super App, I’m Vinicius Souza, a software developer and entrepreneur based in Lisbon.
              I’m the founder and CEO of VPS, where we develop technologies for the web.
            </p>

            <SocialLinks />
          </div>
        </div>

        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 my-16'>
          <ProjectCard appsData={appsData} />

          <WorkExperience />
        </div>
      </main>

      <Footer appsData={appsData} />
    </div>
  )
}
