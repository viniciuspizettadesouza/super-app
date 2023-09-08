import React from "react";

interface HeaderProps {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <div className="flex justify-between items-center max-w-5xl">
            <h1 className="text-3xl font-semibold">{title}</h1>
        </div>
    );
}
