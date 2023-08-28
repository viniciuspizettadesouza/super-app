import React from 'react';

const Footer = () => {
    return (
        <footer className="sm:px-8 mx-auto lg:px-12 border-t border-gray-200 bg-white max-w-6xl">
            <div className="pt-10 pb-16 flex flex-col items-center justify-between sm:flex-row gap-6">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-gray-800">
                    <a className="transition hover:text-gray-500" href="/weather">
                        Weather App
                    </a>
                </div>
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Vinicius Souza. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
