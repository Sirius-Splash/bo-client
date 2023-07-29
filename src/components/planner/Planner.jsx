import React, { useState } from 'react';
import Workouts from './subcomponents/Workouts.jsx';
import Schedule from './subcomponents/Schedule.jsx';

const Planner = () => {
  const [exercises, setExercises] = useState(['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4']);
  const [workouts, setWorkout] = useState(['Workout 1', 'Workout 2', 'Workout 3', 'Workout 4']);

  return (
      <div>
        <div>
          <Workouts exercises={exercises}/>
        </div>
        <div>
          <Schedule workouts={workouts}/>
        </div>
      </div>
  )
};

export default Planner;