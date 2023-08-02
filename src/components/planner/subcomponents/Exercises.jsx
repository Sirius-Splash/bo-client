import React from 'react';
import Exercise from './Exercise.jsx';

const Exercises = ({ exercises }) => {

  return (
    <React.Fragment>
      <div style={{border: '2px solid black'}} className="flex items-center py-5">
          <div className="pr-4 pl-2 w-2/3 text-left cursor-pointer font-bold">EXERCISE</div>
          <div className="pr-4 w-1/3 text-center font-bold">EQUIPMENT</div>
          <div className="pr-4 w-1/4 text-center font-bold"> SETS</div>
          <div className="pr-2 w-1/4 text-center font-bold">REPS</div>
        </div>
      <div>
        {exercises.map((exercise, i) => {
          return <Exercise key={i} exercise={exercise} />
        })}
      </div>
    </React.Fragment>
  )
};

export default Exercises;