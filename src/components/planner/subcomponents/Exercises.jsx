import React from 'react';
import Exercise from './Exercise.jsx';

const Exercises = ({ exercises }) => {

  return (
    <div>
      {exercises.map((exercise, i) => {
        return <Exercise key={i} exercise={exercise} />
      })}
    </div>
  )
};

export default Exercises;