import { Suspense } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";

const PostPage: React.FC = () => {
  const { id = "" } = useParams();
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Post id={id} />
      <a href="/">to the list</a>
    </Suspense>
  );
};

export default PostPage;
