import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowsAltH } from "@fortawesome/free-solid-svg-icons";

interface TaskProps {
    id: number;
    text: string;
    onDelete: (id: number) => void;
    onMove: (id: number, targetColumn: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, text, onDelete, onMove }) => {
    const [selectedColumn, setSelectedColumn] = useState('todo');

    const handleMove = () => {
        onMove(id, selectedColumn);
        setSelectedColumn('todo');
    };

    return (
        <div className="p-2 mb-2 bg-white shadow-md rounded-md flex justify-between items-center">
            <div>{text}</div>
            <div className="flex items-center space-x-2">
                <select
                    className="p-1 border rounded-md"
                    value={selectedColumn}
                    onChange={(e) => setSelectedColumn(e.target.value)}
                >
                    <option value="todo">To Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <button
                    onClick={handleMove}
                    className="text-blue-500 hover:text-blue-700"
                >
                    <FontAwesomeIcon icon={faArrowsAltH} />
                </button>
                <button
                    onClick={() => onDelete(id)}
                    className="text-red-500 hover:text-red-700"
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};


export default Task;
