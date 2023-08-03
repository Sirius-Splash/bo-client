import React, {useState, useEffect} from "react";
import TrackerModal  from "./TrackModal";
import Search from "./Search";
import axios from "axios";

interface TrackerProps {
  number: number
}

const Tracker:React.FC<TrackerProps> = ({number}) => {

  const [tracked, setTracked] = useState([]);

  const getWorkouts = () => {
    axios.get(import.meta.env.VITE_SERVER_TRACKER_URL)
      .then((data)=>{
        console.log('get Workouts then')
        console.log(data)
      }).catch((err)=>{console.log('Tracker getWorkouts err: ', err)})
    }
    const postWorkout = () => {
      axios.post(import.meta.env.VITE_SERVER_TRACKER_URL)
      .then((data)=>{
        console.log('post workouts then')

        console.log(data)
      }).catch((err)=>{console.log('Tracker getWorkouts err: ', err)})
  }

  const addWorkout = (input) => {
    if (input.length > 0) {
      let arr = []
      tracked.forEach((val) => arr.push(val));
      const d = new Date();
      arr.push({
        workout: input,
        date: d
      }
      )
      setTracked(arr)

    }
  }

  const listWorkout = (wo) => {
    return wo.map((v)=>{
      return <div className = "flex flex-col">
        <div>
        {v.exercise.name}
        </div>
        <div>
        {v.set} x {v.rep}
        </div>
        </div>
    })
  }

  const renderAccordion = () => {
    let arr = [];
    for (let i = tracked.length - 1; i >= 0; i--) {
      let v = tracked[i]
      arr.push(
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4"/>
          <div className="collapse-title text-xl font-medium">
          {v.date.getMonth()+1}/{v.date.getDate()}/{v.date.getFullYear()}
          </div>
          <div className="collapse-content">
          {listWorkout(v.workout)}
          </div>
        </div>
      )
    }
    return arr;
  }

  return (
    <>
    <div className = "m-4">
    <TrackerModal addWorkout = {addWorkout} u_id = {number}></TrackerModal>
    </div>
    <button onClick = {getWorkouts}>GET 8080</button>
    <button onClick = {postWorkout}>POST 8080</button>
    <div className = "overflow-auto h-[500px]">
    <div className="join join-vertical w-[500px]">
      {renderAccordion()}
    </div>
    </div>
    </>
  )
}

export default Tracker;