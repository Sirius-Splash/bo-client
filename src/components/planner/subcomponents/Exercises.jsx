import React from 'react';
import Exercise from './Exercise.jsx';

const Exercises = ({ exercises, setWorkouts, workoutCount, setWorkoutCount, workouts }) => {

  return (
    <React.Fragment>
      <div style={{border: '2px solid black'}} className="flex items-left py-5">
          <div className="pr-4 pl-2 w-2/3 text-left cursor-pointer font-bold">EXERCISE</div>
          <div className="pr-4 w-1/3 text-center font-bold">EQUIPMENT</div>
          <div className="pr-4 w-1/4 text-center font-bold"> SETS</div>
          <div className="pr-2 w-1/4 text-center font-bold">REPS</div>
          {/* <div className="pr-2 w-6 text-center font-bold">ADD WORKOUT</div> */}
        </div>
      <div className="max-h-96 overflow-y-auto">
        {exercises.map((exercise, i) => {
          return <Exercise key={i} exercise={exercise} setWorkouts={setWorkouts} workouts={workouts} workoutCount={workoutCount} setWorkoutCount={setWorkoutCount}/>
        })}
      </div>
    </React.Fragment>
  )
};

export default Exercises;