import React, { useRef, useState } from 'react';

const Exercise = ({ exercise, setWorkouts, workoutCount, setWorkoutCount, workouts }) => {
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);
  const modalRef = useRef(null);
  const [workoutObj, setWorkoutObj] = useState({
    exercise: exercise.name,
    sets: sets,
    reps: reps
  });

  const showModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleAddWorkout = () => {
    setWorkoutCount(workoutCount + 1);
    setWorkouts([...workouts, workoutObj]);
  }

  return (
    <React.Fragment>
      <div style={{border: '1px solid pink'}} className="flex items-center py-5">
        <div className="pr-4 pl-2 w-2/3 text-left cursor-pointer" onClick={showModal}>{exercise.name.toUpperCase()}</div>
        {exercise.equipment === 'body_only' ?
            <div className="pr-4 w-1/3 text-center">BODYWEIGHT</div> :
            <div className="pr-4 w-1/3 text-center">{exercise.equipment.toUpperCase()}</div>
        }
        <div className="pr-4 w-1/4 text-center">
          {exercise.type !== 'cardio' ?
            sets :
            'N/A'}
        </div>
        <div className="pr-2 w-1/4 text-center">
          {exercise.type !== 'cardio' ?
            reps :
            reps + ' mins'}
        </div>
      </div>
      <button className="btn" onClick={handleAddWorkout}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </button>
      <div className="divider"></div>
      <dialog ref={modalRef} className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">{exercise.name}</h3>
          <p className="py-4">{exercise.instructions}</p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </React.Fragment>
  )
};

export default Exercise;