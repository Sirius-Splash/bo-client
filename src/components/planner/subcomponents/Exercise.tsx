import React from 'react';

type ExerciseProps = {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
};

const Exercise: React.FunctionComponent<ExerciseProps> = (props) => {
  const {name, equipment} = props;

  return (
    <React.Fragment>
      <div style={{border: '1px solid pink'}}>
        <div className="btn" onClick={console.log('Excercise clicked!')}>{name}</div>
        <div>{equipment}</div>
        <div>Sets: 3 | Reps: 10-15</div>
      </div>

    </React.Fragment>
  )
};

export default Exercise;