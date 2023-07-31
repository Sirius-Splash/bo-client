import React from 'react';
import Exercises from './Exercises.js';

type WorkoutsProps = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
};

const Workouts: React.FunctionComponent<WorkoutsProps> = (props) => {
  console.log(props);

  const handleAddWorkout = () => {
    console.log('Add Workout clicked!');
  }

  return (
      <div style={{border: '1px solid blue'}}>
          <Exercises exercises={props}/>
          <button onClick={handleAddWorkout}>Add to Workout</button>
      </div>
    )
};

export default Workouts;