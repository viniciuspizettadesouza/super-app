'use client';
import React, { useState } from 'react';
import { ExerciseCategory, exercises } from '@interfaces/workout.interface'
import Timer from '@components/Workout/Timer';
import WorkoutOptionsButtons from '@components/Workout/WorkoutOptionsButtons'
import WorkoutTable from '@components/Workout/WorkoutTable';

const WorkoutCard: React.FC = () => {
    const [selectedTraining, setSelectedTraining] = useState<string | null>(null);

    const handleTrainingFilter = (training: string) => {
        setSelectedTraining(training);
    };

    const filteredExercises = selectedTraining
        ? Object.keys(exercises).reduce((filtered, category) => {
            const exercisesForCategory = exercises[category].filter(
                (exercise) => exercise.treino === selectedTraining
            );
            if (exercisesForCategory.length > 0) {
                filtered[category] = exercisesForCategory;
            }
            return filtered;
        }, {} as ExerciseCategory)
        : exercises;

    return (
        <div className="flex flex-col gap-4">
            <WorkoutOptionsButtons selectedTraining={selectedTraining} onTrainingFilter={handleTrainingFilter} />

            <div className="bg-gray-100 p-4 rounded-md shadow-md">
                <h2 className="text-xl font-semibold">
                    Workout {selectedTraining || 'Options'}
                </h2>

                <WorkoutTable filteredExercises={filteredExercises} />

                <Timer />
            </div>
        </div>
    );
};

export default WorkoutCard;
