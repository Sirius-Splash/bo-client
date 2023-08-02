import Post from "./post";
import axios from "axios";
import { useState, useEffect } from 'react';
import { postInterface } from "./interfaces";
import PostForm from "./PostForm";
//#7F7B82
function Feed() {

  const [posts, setPosts] = useState<postInterface[]>([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_SERVER_URL + '/posts').then((response) => {
      setPosts(response.data);
    });
  },[]);

  return ( <div style={{width:"80vw"}}>
    <div className="card w-1/1 bg-primary p-4 overflow-scroll" style={{minHeight:"200px", maxHeight:"90vh"}}>
      {
        posts.map((post, i) => {
          return (<Post key={i} post={post}/>)
        })
      }
      <PostForm />
    </div>
  </div> );
}

export default Feed;