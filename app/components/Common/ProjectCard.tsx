import React from 'react';
import Link from 'next/link';
import { AppsData } from '@interfaces/home.interface';

const ProjectCard: React.FC<AppsData> = ({ appsData }) => {
    return (
        <div className="grid grid-rows-3 text-center lg:max-w-5xl lg:grid-cols-2 lg:text-left">
            {appsData.map((link, index) => (
                <Link key={index} href={link.href}>
                    <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-zinc-300 hover:bg-merino-50">
                        <h2 className="mb-3 text-2xl font-semibold">
                            {link.label + ' '}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                        <p className="text-sm text-zinc-500">
                            {link.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProjectCard;
