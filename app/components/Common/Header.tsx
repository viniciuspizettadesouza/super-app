import React from 'react';
import Link from 'next/link';
import NavItem from '@components/Common/NavItem';
import NavHOC from '@components/Common/NavHOC';

const Header = () => {
    return (
        <header className="text-zinc p-4 max-w-6xl mx-auto bg-white">
            <NavHOC>
                <ul className="flex space-x-4">
                    <NavItem href="/weather" label="Weather App" />
                </ul>
            </NavHOC>
        </header>
    );
};

export default Header;
