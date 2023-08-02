import React from 'react';
import Exercises from './Exercises.jsx';

const Workouts = ({ exercises, setWorkouts, workoutCount, setWorkoutCount, workouts }) => {

  return (
      <div>
          <Exercises exercises={exercises} workouts={workouts} setWorkouts={setWorkouts} workoutCount={workoutCount} setWorkoutCount={setWorkoutCount}/>
      </div>
    )
};

export default Workouts;