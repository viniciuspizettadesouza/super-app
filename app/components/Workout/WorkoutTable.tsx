import React from 'react';
import { ExerciseCategory } from '@interfaces/workout.interface';

interface FilteredExercisesListProps {
    filteredExercises: ExerciseCategory;
}

const WorkoutTable: React.FC<FilteredExercisesListProps> = ({ filteredExercises }) => {
    return (
        <>
            {Object.keys(filteredExercises).map((category, index) => (
                <div key={index}>
                    <h3 className="mt-4 text-lg font-semibold">{category}</h3>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Ordem</th>
                                <th className="px-4 py-2">Exercise</th>
                                <th className="px-4 py-2">Series</th>
                                <th className="px-4 py-2">Repetições</th>
                                <th className="px-4 py-2">Extra</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredExercises[category].map((exercise, exerciseIndex) => (
                                <tr key={exerciseIndex}>
                                    <td className="border px-4 py-2">{exercise.ordem}</td>
                                    <td className="border px-4 py-2">{exercise.nome}</td>
                                    <td className="border px-4 py-2">{exercise.series}</td>
                                    <td className="border px-4 py-2">{exercise.repeticoes}</td>
                                    <td className="border px-4 py-2">{exercise.extra}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </>
    );
};

export default WorkoutTable;
