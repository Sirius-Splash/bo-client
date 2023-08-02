import Comment from "./comment";
import { postInterface } from "./interfaces";

function Post({ post } : {post: postInterface}) {
  return (
  <div className= " border-2 text-secondary mb-3">
    <div className="flex flex-row p-2">
      <div className="ml-4 mt-4">
        <img className="w-20 h-20 rounded-full" src={ post.user.profile_pic || "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg"}/>
        <div className="m-auto">{ post.user.username }</div>
      </div>
      <div className="w-full ml-2 p-2 text-left text-md">{ post.body}
      </div>
    </div>
    <Comment/>
    <Comment/>
  </div>);
}

export default Post;