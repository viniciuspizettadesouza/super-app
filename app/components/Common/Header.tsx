import React from 'react';
import NavItem from '@components/Common/NavItem';
import NavHOC from '@components/Common/NavHOC';

const Header = () => {
    return (
        <header className="text-zinc px-8 py-4 max-w-6xl mx-auto bg-white">
            <NavHOC>
                <ul className="flex space-x-4">
                    <NavItem href="/weather" label="Weather App" />
                </ul>
                <ul className="flex space-x-4">
                    <NavItem href="/roman-numeral-calculator" label="Roman Numeral Calculator" />
                </ul>
            </NavHOC>
        </header>
    );
};

export default Header;
