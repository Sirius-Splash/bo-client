import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Workouts from './subcomponents/Workouts.jsx';

const Planner = () => {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [workoutCount, setWorkoutCount] = useState(0);
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

  const addWorkout = () => {
    console.log('Workout added!', workouts); // EDIT THIS TO SEND TO OTHER COMPONENT
  }
  console.log(workouts);
  return (
    <React.Fragment>
      <div className="flex items-center py-5">
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
            <button className="btn" onClick={addWorkout}>
              Exercises
              <div className="badge badge-secondary">{workoutCount}</div>
            </button>
            <div className="flex items-center py-5">
              <Workouts exercises={exercises} workouts={workouts} setWorkouts={setWorkouts} workoutCount={workoutCount} setWorkoutCount={setWorkoutCount}/>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default Planner;

