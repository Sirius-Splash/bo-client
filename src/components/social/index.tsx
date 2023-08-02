import PostForm from "./PostForm.tsx";
import DMs from "../chat/index.tsx";

function Social() {
  return (
    <div className="flex">
      <PostForm />
      <DMs />
    </div>
  );
}

export default Social;
