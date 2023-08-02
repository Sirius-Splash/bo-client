import React from 'react';

const Schedule = ({ workouts }) => {

  const handleWorkoutClick = () => {
    console.log('Workout clicked!')
  }

  return (
      <div style={{border: '1px solid green'}}>
          {workouts.map((workout, i) => {
            return <div key={i} style={{border: '1px solid pink'}} onClick={handleWorkoutClick}>{workout}</div>
          })}
      </div>
  )
};

export default Schedule;