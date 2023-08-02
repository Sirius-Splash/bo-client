import React, { useRef } from 'react';

const Exercise = ({ exercise }) => {
  const modalRef = useRef(null);

  const showModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  }

  return (
    <React.Fragment>
      <div style={{border: '1px solid pink'}} className="flex items-center py-5">
        <div className="pr-4 pl-2 w-2/3 text-left cursor-pointer" onClick={showModal}>{exercise.name.toUpperCase()}</div>
        {exercise.equipment === 'body_only' ?
            <div className="pr-4 w-1/3 text-center">BODYWEIGHT</div> :
            <div className="pr-4 w-1/3 text-center">{exercise.equipment.toUpperCase()}</div>
        }
        <div className="pr-4 w-1/4 text-center">3</div>
        <div className="pr-2 w-1/4 text-center">10-15</div>
      </div>
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