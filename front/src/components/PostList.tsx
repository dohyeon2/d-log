import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

interface Post {
  id: number;
  title: string;
  updated_at: string;
}

function PostList() {
  const { data = [] } = useQuery<Post[]>(
    ["posts"],
    () => fetch("http://localhost:3010/posts").then((res) => res.json()),
    {
      suspense: true,
    }
  );

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Title</th>
          <th scope="col">Updated</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={item.id}>
            <th scope="row">{idx + 1}</th>
            <td>
              <a href={`/post/${item.id}`}>{item.title}</a>
            </td>
            <td>{dayjs(item.updated_at).format("YYYY-MM-DD HH:mm")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostList;
