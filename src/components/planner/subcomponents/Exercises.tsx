import React from 'react';
import Exercise from './Exercise.js';

type ExercisesProps = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
};

const Exercises: React.FunctionComponent<ExercisesProps> = (props) => {

  return (
      <React.Fragment>
        <div>
          {props.map((prop, i) => {
            return <Exercise key={i} exercise={prop} />
          })}
        </div>
      </React.Fragment>
  )
};

export default Exercises;