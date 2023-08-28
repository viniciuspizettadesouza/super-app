import React from 'react';
import Link from 'next/link';

const ProjectCard = () => {
    return (
        <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-2 lg:text-left">
            <Link href="/weather">
                <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
                    <h2 className="mb-3 text-2xl font-semibold">
                        Weather App{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Weather app connecting OpenWeather API and Google Geocoding API
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
