import React from 'react';
import Exercises from './Exercises.jsx';

const Workouts = ({ exercises }) => {

  return (
      <div>
          <Exercises exercises={exercises}/>
      </div>
    )
};

export default Workouts;