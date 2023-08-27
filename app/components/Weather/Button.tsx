import React from "react";

interface ButtonProps {
    title: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <button className="bg-blue-500 text-white p-2 rounded" onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;
