import React, {Dispatch, SetStateAction, useEffect, useState} from "react";


const PlusMinus = ({setter, mainValue}) => {
  const minus = () => {
    if (mainValue > 0) {
      setter(mainValue - 1)
    }
  }

  const plus = () => {
    setter(mainValue + 1)
  }

  return (
    <>
    <button className = "btn btn-sm" onClick = {minus}>-</button>
    {mainValue}
    <button className = "btn btn-sm" onClick = {plus}>+</button>
    </>
  )
}
export default PlusMinus;