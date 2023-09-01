import React from "react";
import WorkoutCard from "@components/Workout/WorkoutCard";

const WorkoutPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold mb-4">Workout App - Aesthetic</h1>
            <WorkoutCard />
        </div>
    );
};

export default WorkoutPage;
