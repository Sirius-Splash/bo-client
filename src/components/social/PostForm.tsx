import React from 'react'

interface Modal {
  showModal: VoidFunction,
  close: VoidFunction
}
declare global {
  interface Window {
      new_post_modal: Modal
  }
}

function PostForm () {

  function openModal() {
    window.new_post_modal.showModal()
  }

  function handleClose() {
    window.new_post_modal.close()
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    window.new_post_modal.close()
  }

  return (
    <div>
      <button className='btn' onClick={openModal}>New Post</button>
      <dialog id='new_post_modal' className='modal-box' >
        <h3>New Post</h3>
        <form method='dialog' onSubmit={handleSubmit} >
          <div className='flex flex-col'>
            <input
              type='text'
              className='input input-bordered'
            />
            <textarea
              className='textarea textarea-bordered'
            />
            <input
              type='file'
              className='file-input'
            />
          </div>
          <button type='submit' className='btn'>Submit</button>
          <button onClick={handleClose}>Close</button>
        </form>
      </dialog>
    </div>
  )
}

export default PostForm