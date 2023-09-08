'use client';
import React, { useState } from "react";
import Column from './Column';
import Task from './Task';

interface Task {
    id: number;
    text: string;
    column: string;
}

const TodoApp: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, text: 'Task 1', column: 'todo' },
        { id: 2, text: 'Task 2', column: 'todo' },
        { id: 3, text: 'Task 3', column: 'inProgress' },
        { id: 4, text: 'Task 4', column: 'done' },
        { id: 5, text: 'Task 5', column: 'done' },
    ]);

    const [newTaskText, setNewTaskText] = useState<string>('');

    const addTask = () => {
        if (newTaskText.trim() !== '') {
            setTasks((prevTasks) => [
                ...prevTasks,
                { id: Date.now(), text: newTaskText, column: 'todo' },
            ]);
            setNewTaskText('');
        }
    };

    const moveTask = (taskId: number, targetColumn: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, column: targetColumn } : task
            )
        );
    };

    const deleteTask = (taskId: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className="flex justify-center p-8 flex-col gap-4 items-center">
            <div className="flex space-x-2 flex-row w-1/2">
                <input
                    type="text"
                    placeholder="New Task"
                    className="p-1 border rounded-md flex-grow"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                />
                <button
                    onClick={addTask}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Add Task
                </button>
            </div>
            <div className="flex flex-row gap-2 h-auto">
                <Column title="To Do">
                    {tasks
                        .filter((task) => task.column === 'todo')
                        .map((task) => (
                            <Task
                                key={task.id}
                                id={task.id}
                                text={task.text}
                                onDelete={deleteTask}
                                onMove={moveTask}
                            />
                        ))}
                </Column>
                <Column title="In Progress">
                    {tasks
                        .filter((task) => task.column === 'inProgress')
                        .map((task) => (
                            <Task
                                key={task.id}
                                id={task.id}
                                text={task.text}
                                onDelete={deleteTask}
                                onMove={moveTask}
                            />
                        ))}
                </Column>
                <Column title="Done">
                    {tasks
                        .filter((task) => task.column === 'done')
                        .map((task) => (
                            <Task
                                key={task.id}
                                id={task.id}
                                text={task.text}
                                onDelete={deleteTask}
                                onMove={moveTask}
                            />
                        ))}
                </Column>
            </div>
        </div>
    );
};

export default TodoApp;
