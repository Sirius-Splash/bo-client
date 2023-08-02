import React from 'react'
import axios from 'axios'

interface Modal {
  showModal: VoidFunction,
  close: VoidFunction
}
declare global {
  interface Window {
      new_post_modal: Modal
  }
}

// PLACEHOLDER
const session = {
  userID: 0
}
const URL = import.meta.env.VITE_SERVER_URL + '/posts'
function PostForm () {
  const [title, setTitle] = React.useState('')
  const [body, setBody] = React.useState('')
  const [photos, setPhotos] = React.useState([])

  function openModal() {
    window.new_post_modal.showModal()
  }

  function handleClose() {
    window.new_post_modal.close()
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const post = {
      title,
      body,
      photos,
      user_id: session.userID
    }
    axios.post(URL, post)
    .then(()=>{
      window.new_post_modal.close()
      document.getElementById('new_post_form').reset()
    })
    .catch((err: Error)=>{
      console.log('Ooops something went wrong')
      console.log(err.message)
    })
  }

  return (
    <div className='modal modal-open'>
      <button className='btn' onClick={openModal}>New Post</button>
      <dialog id='new_post_modal' className='modal-box' >
        <h3>New Post</h3>
        <form method='dialog' id='new_post_form' onSubmit={handleSubmit} >
          <div className='flex flex-col'>
            <input
              type='text'
              className='input input-bordered'
              onChange={(e)=>{ setTitle(e.target.value)}}
            />
            <textarea
              className='textarea textarea-bordered'
              onChange={(e)=>{ setBody(e.target.value)}}
            />
            <input
              type='file'
              className='file-input'
              onChange={()=>{ setPhotos([]) }}
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