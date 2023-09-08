import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface GPSButtonProps {
    onClick: () => void;
}

const ButtonGPS: React.FC<GPSButtonProps> = ({ onClick }) => {
    return (
        <button
            className="text-gray-600 p-1 rounded-r"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />
        </button>
    );
};

export default ButtonGPS;
