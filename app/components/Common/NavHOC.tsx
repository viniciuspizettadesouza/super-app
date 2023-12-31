import React from 'react';

interface NavProps {
    children: React.ReactNode;
}

const NavHOC: React.FC<NavProps> = ({ children }) => {
    return (
        <nav className="flex items-center justify-end gap-2">
            {children}
        </nav>
    );
};

export default NavHOC;
