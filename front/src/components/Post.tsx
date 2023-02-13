import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  content: string;
  updated_at: string;
  created_at: string;
  status: string;
}

const Post: React.FC<{ id: string }> = ({ id }) => {
  const { data = [] } = useQuery<Post[]>(
    ["post"],
    () => fetch("http://localhost:3010/post/" + id).then((res) => res.json()),
    {
      suspense: true,
    }
  );
  const postData = data[0];
  return (
    <div>
      <h1>{postData.title}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: postData.content,
        }}
      ></p>
    </div>
  );
};

export default Post;
