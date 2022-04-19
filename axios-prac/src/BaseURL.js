import axios from "axios";
import React from "react";
import "./App.css";
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

// create 사용해 baseURL 설정, async await으로 더 클린한 코드
const BaseURL = () => {
  const [post, setPost] = React.useState(null);

  // then 안쓰고 콜백
  React.useEffect(() => {
    // getPost()함수는 생성 즉시 호출됨
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

  async function deletePost() {
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }

  if (!post) return "No post!";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
};

export default BaseURL;
