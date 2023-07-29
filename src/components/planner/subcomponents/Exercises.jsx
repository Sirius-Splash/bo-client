import React from 'react';

const Exercises = ({ exercises }) => {

  const handleExerciseClick = () => {
    console.log('Exercise clicked!')
  }

  return (
      <div>
        {exercises.map((exercise, i) => {
          return <div key={i} style={{border: '1px solid pink'}} onClick={handleExerciseClick}>{exercise}</div>
        })}
      </div>
  )
};

export default Exercises;