import React from 'react';
import Exercises from './Exercises.jsx';

const Workouts = ({ exercises }) => {

  return (
      <div style={{border: '1px solid blue'}}>
          <Exercises exercises={exercises}/>
      </div>
    )
};

export default Workouts;