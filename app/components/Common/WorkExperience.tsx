import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import WorkExperienceItem from './WorkExperienceItem';

const workExperiences = [
    {
        companyName: "Fyld",
        role: "Senior Frontend Developer",
        startDate: "Sep 2022",
        endDate: "Present",
        srcIcon: "/fyld.jpg",
    },
    {
        companyName: "Indie Campers",
        role: "Frontend Engineer",
        startDate: "Sep 2021",
        endDate: "Aug 2022",
        srcIcon: "/indie.jpg",
    },
    {
        companyName: "Credisfera",
        role: "Frontend Developer",
        startDate: "Mar 2021",
        endDate: "Aug 2021",
        srcIcon: "/credisfera.jpg",
    },
    {
        companyName: "Access Loans",
        role: "Full Stack Developer",
        startDate: "Mar 2020",
        endDate: "Feb 2021",
        srcIcon: "/access.jpg",
    },
    {
        companyName: "Storm Tecnology",
        role: "Full Stack Developer",
        startDate: "Jul 2019",
        endDate: "Feb 2020",
        srcIcon: "/storm.jpg",
    },
];

const WorkExperience = () => {
    return (
        <div className='space-y-10 lg:pl-16 xl:pl-24'>
            <div className="rounded-2xl border border-zinc-100 p-6">
                <h2 className="flex text-sm font-semibold text-zinc-900">
                    <FontAwesomeIcon icon={faBriefcase} className="h-5 w-5 text-zinc-400" />
                    <span className="ml-3 text-zinc-900">Work</span>
                </h2>
                <ol className="mt-6 space-y-4">
                    {workExperiences.map((experience, index) => (
                        <WorkExperienceItem
                            key={index}
                            companyName={experience.companyName}
                            role={experience.role}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            srcIcon={experience.srcIcon}
                        />
                    ))}
                </ol>
                <Link
                    className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 group mt-6 w-full"
                    href="#"
                >
                    Download CV
                    <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600"
                    >
                        <path
                            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </Link>
            </div>
        </div>

    );
};

export default WorkExperience;
