import React, {useState, useEffect, useRef} from "react";
import {exercise} from './exerciseInterface.ts';
import Search from './Search.tsx';
import PlusMinus from './PlusMinus.tsx';

interface exercisePlus {
  exercise: exercise
  set: number
  rep: number
}

const TrackerModal = ({addWorkout}) => {

  const modalRef = useRef(null);
  const showModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  }
  const [currSets, setCurrSets] = useState<number>(0)
  const [currReps, setCurrReps] = useState<number>(0)
  const [currExercise, setCurrExercise] = useState<exercise>();

  const [exerciseList, setExerciseList] = useState<exercisePlus[]>([])

  const addExercise = () => {
    const arr = []
    exerciseList.forEach((val) => arr.push(val));
    if (currExercise) {
    const tempObj = {
      exercise: currExercise,
      set: currSets,
      rep: currReps
      }
      arr.push(tempObj);
    }
    setExerciseList(arr);
  }

  return (
    <>
    <button className="btn" onClick={showModal}>Open Modal</button>
      <dialog ref={modalRef} className="modal">
        <div className = "flex flex-row">
          <div>
            {exerciseList.map((val)=>{
              return <li>{val.exercise.name} : {val.set} x {val.rep}</li>
            })}
          </div>
          <div className = "flex-col">
            <div>
              <Search setter = {setCurrExercise}></Search>
            </div>
            <div>
              Sets: <PlusMinus setter = {setCurrSets} mainValue = {currSets}></PlusMinus>
            </div>
            <div>
              Reps: <PlusMinus setter = {setCurrReps} mainValue = {currReps}></PlusMinus>
            </div>
            <div className = "flex flex-row">
            <div>
              <button onClick = {addExercise} >Add Exercise</button>
            </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-box">
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
              <button onClick = {()=>{addWorkout(exerciseList); setExerciseList([])}} disabled = {(exerciseList.length === 0)}>Confirm Workout</button>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick = {()=>{setExerciseList([])}}>✕</button>
          </div>
        </form>
      </dialog>
    </>
  )
}

export default TrackerModal;