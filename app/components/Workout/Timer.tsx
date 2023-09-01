import React from 'react';
import { useTimer } from '@hooks/useTimer';
import { formatTime } from "@utils/formatterUtils";

const Timer: React.FC = () => {
    const { time, startTimer, pauseTimer, resetTimer } = useTimer({
        initialTime: 0,
    });

    return (
        <>
            <div className="text-4xl font-bold my-4">{formatTime(time)}</div>
            <div className="flex gap-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={startTimer}>
                    Start
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={pauseTimer}>
                    Pause
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </>
    );
};

export default Timer;
