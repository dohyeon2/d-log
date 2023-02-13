import { Suspense } from "react";
import PostList from "../components/PostList";

function Home() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <PostList />
    </Suspense>
  );
}

export default Home;
