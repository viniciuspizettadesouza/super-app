import React from 'react';
import Link from 'next/link';

interface NavItemProps {
    href: string;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
    return (
        <li>
            <Link href={href}>
                <div className="text-zinc-800 cursor-pointer transition hover:text-zinc-500 font-medium">{label}</div>
            </Link>
        </li>
    );
};

export default NavItem;
