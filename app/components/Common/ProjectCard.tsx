import React from 'react';
import Link from 'next/link';

const ProjectCard = () => {
    return (
        <div className="grid grid-rows-3 text-center lg:max-w-5xl lg:grid-cols-2 lg:text-left">
            <Link href="/weather">
                <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-zinc-300 hover:bg-merino-50">
                    <h2 className="mb-3 text-2xl font-semibold">
                        Weather App{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className="text-sm text-zinc-500">
                        Weather app connecting OpenWeather API and Google Geocoding API
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
