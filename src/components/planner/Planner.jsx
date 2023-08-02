import React, { useState } from 'react';
import axios from 'axios';
import Workouts from './subcomponents/Workouts.jsx';
// import Schedule from './subcomponents/Schedule.js';

const Planner = () => {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkout] = useState(['Workout 1', 'Workout 2', 'Workout 3', 'Workout 4']);
  const [workoutType, setWorkoutType] = useState('strength');

  const getExercises = () => {
    axios.get(`https://api.api-ninjas.com/v1/exercises?type=${workoutType}`, {
      headers: {
        'X-Api-Key': ""
      }
    })
    .then(response => {
      setExercises(response.data);
    })
    .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <button onClick={getExercises}>Temp get exercises button</button>
      <div className="py-5">
          <select className="select select-bordered w-full max-w-xs" value={"SELECT WORKOUT TYPE"}>
            <option disabled>SELECT WORKOUT TYPE</option>
            <option>CARDIO</option>
            <option>OLYMPIC WEIGHTLIFTING</option>
            <option>PLYOMETRICS</option>
            <option>POWERLIFTING</option>
            <option>STRENGTH</option>
            <option>STRETCHING</option>
            <option>STRONGMAN</option>
          </select>
          <div className="flex items-center py-5">
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

