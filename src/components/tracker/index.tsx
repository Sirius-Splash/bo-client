import React, {useState, useEffect} from "react";
import TrackerModal  from "./TrackModal";
import Search from "./Search";

interface TrackerProps {
  number: number
}

const Tracker:React.FC<TrackerProps> = ({number}) => {

  const [tracked, setTracked] = useState([]);

  const addWorkout = (input) => {
    console.log('ADD WORK OUT CALLED: ', input)
    if (input.length > 0) {
      let arr = []
      tracked.forEach((val) => arr.push(val));
      const d = new Date();
      console.log('DDDDD DATE IS : ', d)
      arr.push({
        workout: input,
        date: d
      }
      )
      setTracked(arr)
    }
  }
  useEffect(()=>{
    console.log('tracked: ')
    console.log(tracked)
    console.log(': tracked')
  },[tracked])

  const listWorkout = (wo) => {
    return wo.map((v)=>{
      return <li>{v.exercise.name} : {v.set} x {v.rep}</li>
    })
  }

  return (
    <>
    <div>
    {tracked.map((v)=>{
      return (
        <div>
          <li>{v.date.toString()}</li>
          {listWorkout(v.workout)}
        </div>)
    })}
    </div>
    <TrackerModal addWorkout = {addWorkout}></TrackerModal>
    </>
  )
}

export default Tracker;