import React from 'react';
import NavItem from '@components/Common/NavItem';
import NavHOC from '@components/Common/NavHOC';
import { AppsData } from '@app/interfaces/home.interface';

const Header: React.FC<AppsData> = ({ appsData }) => {
    return (
        <header className="text-zinc px-8 py-4 max-w-6xl mx-auto bg-white">
            <NavHOC>
                <ul className="flex space-x-4">
                    {appsData.map((link, index) => (
                        <NavItem key={index} href={link.href} label={link.label} />
                    ))}
                </ul>
            </NavHOC>
        </header>
    );
};

export default Header;
