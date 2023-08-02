import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Workouts from './subcomponents/Workouts.jsx';
import Schedule from './subcomponents/Schedule.jsx';

const Planner = () => {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkout] = useState(['Workout 1', 'Workout 2', 'Workout 3', 'Workout 4']);
  const [workoutType, setWorkoutType] = useState('SELECT WORKOUT TYPE');

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

  const handleSelect = (e) => {
    setWorkoutType(e.target.value);
    getExercises();
  }

  useEffect(() => {
    getExercises();
  }, [workoutType]);

  return (
    <React.Fragment>
      <div className="flex items-center py-5">
        {/* <div>
          <Schedule workouts={workouts}/>
        </div> */}
        <div className="py-5">
            <select className="select select-bordered w-full max-w-xs" value={workoutType} onChange={handleSelect}>
              <option disabled>SELECT WORKOUT TYPE</option>
              <option value="cardio">CARDIO</option>
              <option value="olympic_weightlifting">OLYMPIC WEIGHTLIFTING</option>
              <option value="plyometrics">PLYOMETRICS</option>
              <option value="powerlifting">POWERLIFTING</option>
              <option value="strength">STRENGTH</option>
              <option value="stretching">STRETCHING</option>
              <option value="strongman">STRONGMAN</option>
            </select>
            <div className="flex items-center py-5">
              <Workouts exercises={exercises}/>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Planner;

