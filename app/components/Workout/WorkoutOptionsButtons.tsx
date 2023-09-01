import React from 'react';

interface WorkoutOptionsButtonsProps {
    selectedTraining: string | null;
    onTrainingFilter: (training: string) => void;
}

const WorkoutOptionsButtons: React.FC<WorkoutOptionsButtonsProps> = ({
    selectedTraining,
    onTrainingFilter,
}) => {
    const trainingOptions = ['A', 'B', 'C'];

    return (
        <div>
            {trainingOptions.map((training) => (
                <button
                    key={training}
                    className={`mr-2 bg-blue-500 text-white px-4 py-2 rounded ${selectedTraining === 'A' ? 'bg-blue-600' : ''
                        }`}
                    onClick={() => onTrainingFilter(training)}
                >
                    Treino {training}
                </button>
            ))}
        </div>
    );
};

export default WorkoutOptionsButtons;
