import React, { ReactNode } from "react";

interface ColumnProps {
    title: string;
    children: ReactNode;
}

const Column: React.FC<ColumnProps> = ({ title, children }) => {
    return (
        <div className="flex flex-col p-4 bg-gray-100 rounded-md">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            {children}
        </div>
    );
};

export default Column;
