import React, { useState } from 'react';
import Exercises from './Exercises.jsx';

const Workouts = ({ exercises }) => {

  const handleAddWorkout = () => {
    console.log('Add Workout clicked!');
  }

  return (
      <div style={{border: '1px solid blue'}}>
          This is where workouts will go
          <Exercises exercises={exercises}/>
          <button onClick={handleAddWorkout}>Add Workout</button>
      </div>
    )
};

export default Workouts;