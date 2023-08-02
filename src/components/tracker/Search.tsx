import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {exercise} from './exerciseInterface.ts';
import axios from 'axios';

interface SearchProps {
  setExercise: Dispatch<SetStateAction<exercise>>
}

function apiCall(x: string) {
  return axios.get(`https://api.api-ninjas.com/v1/exercises?name=${x}`, {
    headers: {
      'X-Api-Key': import.meta.env.VITE_EXERCISE_API
    }
  })
}

const Search:React.FC<SearchProps> = ({setter}) => {
  const [searchVal, setSearchVal] = useState<string>("")
  const [exList, setExList] = useState<exercise[]>([])

  function inputChange(evt : React.FormEvent<HTMLInputElement>) {
    setSearchVal(evt.currentTarget.value);
  }

  function enterHit (evt : React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      if (evt.currentTarget.value.length > 0){
        apiCall(searchVal)
        .then((data)=>{
          console.log('apiCall THEN: ')
          setExList(data.data);
        })
        .catch((err)=>{console.log('apiCall error', err)})
        evt.currentTarget.value = '';
        setSearchVal('')
      }
    }
  }
  useEffect(()=>{
    console.log(exList)
  },[exList])

  function dropdownChange(evt : React.ChangeEvent<HTMLInputElement>) {
    console.log(evt.currentTarget.value)
    setter(exList[evt.currentTarget.value])
  }

  function renderDropdown() {
    let i = -1
  return (
    <>
    {exList.map((ex) => {
      return (
        <>
        <option value = {`${i+=1}`}>{ex.name}</option>
        </>
      )
    })}
    </>
    )
  }
  return (
    <>
    <input type = "search"
    placeholder = "Search Exercise Name"
    onChange={inputChange}
    onKeyDown={enterHit}
    >
    </input>
    <br></br>
    <select onChange={dropdownChange}>
      {renderDropdown()}
    </select>
    </>
  )
}

export default Search;