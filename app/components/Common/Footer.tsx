import React from 'react';
import { AppsData } from '@app/interfaces/home.interface';

const Footer: React.FC<AppsData> = ({ appsData }) => {
    return (
        <footer className="sm:px-8 mx-auto lg:px-12 border-t border-zinc-200 bg-white max-w-6xl">
            <div className="pt-10 pb-16 flex flex-col items-center justify-between sm:flex-row gap-6">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
                    {appsData.map((link, index) => (
                        <a
                            key={index}
                            className="transition hover:text-zinc-500 hover:underline"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <p className="text-sm text-zinc-400">
                    &copy; {new Date().getFullYear()} Vinicius Souza. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
