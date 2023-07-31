import React, { useState } from 'react';
import axios from 'axios';
import Workouts from './subcomponents/Workouts.js';
// import Schedule from './subcomponents/Schedule.js';

const Planner = () => {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkout] = useState(['Workout 1', 'Workout 2', 'Workout 3', 'Workout 4']);
  const [workoutType, setWorkoutType] = useState('strength');

  const getExercises = () => {
    axios.get(`https://api.api-ninjas.com/v1/exercises?type=${workoutType}`, {
      headers: {
        'X-Api-Key': 'ILx8qYo5tzMqnOLPwy8ofQ==3nBNBQN18CJH1Pxl'
      }
    })
    .then(response => {
      setExercises(response.data);
    })
    .catch(err => console.log(err));
  };

  console.log('Exercises are here: ',exercises);

  return (
    <React.Fragment>
      <button onClick={getExercises}>asdf</button>
      <div>
          <details className="dropdown mb-32">
            <summary className="m-1 btn">Select Workout Type</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>Cardio</li>
              <li>Olympic Weightlifting</li>
              <li>Plyometrics</li>
              <li>Powerlifting</li>
              <li>Strength</li>
              <li>Stretching</li>
              <li>Strongman</li>
            </ul>
          </details>
          <div>
            <Workouts exercises={exercises}/>
          </div>
          {/* <div>
            <Schedule workouts={workouts}/>
          </div> */}
        </div>
    </React.Fragment>
  )
};

export default Planner;

