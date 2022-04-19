import React from "react";
import { useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
const testURL = "http://3.34.130.45:8081/api/board";
const testURL1 = "http://3.34.130.45:8081/api/register";

const Basic = () => {
  const [quote, setQuote] = useState("");

  // 3조 get test
  const getQuote = () => {
    axios
      .get("http://3.34.130.45:8081/api/board")
      .then((res) => {
        console.log(res.data);
        setQuote(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // get quote
  // const getQuote = () => {
  //   axios
  //     .get("https://api.quotable.io/random")
  //     .then((res) => {
  //       console.log(res.data.content);
  //       setQuote(res.data.content);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  /////
  const [post, setPost] = React.useState(null);
  const [error, seterroror] = React.useState(null);

  //post : create

  const createPost = () => {
    axios
      .post(baseURL, {
        title: "Use post for create sth : Hello Kelly!",
        body: "This is a new post from Kelly!",
      })
      .then((res) => {
        setPost(res.data);
      });
  };

  // put : update
  const updatePost = () => {
    axios
      .put(`${baseURL}/1`, {
        title: "Use put for update sth: Hello again!",
        body: "This is an updated post!!",
      })
      .then((res) => {
        setPost(res.data);
      });
  };

  //delete : delete

  const deletePost = () => {
    axios.delete(`${baseURL}/1`).then(() => {
      alert("Post deleted!");
      // the post data is cleared out of the state
      // by setting it to its initial value of null.
      //
      // Also, once a post is deleted,
      // the text "No post" is shown immediately after the alert message.
      setPost(null);
    });
  };

  // erroror 처리
  // eg. get api 주소 잘못 썼을 때  .get(`${baseURL}/151`)

  React.useEffect(() => {
    axios
      .get(`${baseURL}/1`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        seterroror(error);
      });
  }, []);

  if (error) return `erroror: ${error.message}`;

  if (!post) return "No post!";

  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
      {quote ? <p>{quote.msg}</p> : null}
      {quote && <p>{quote.result}</p>}
      <hr />
      <h1>2.prac- GET Request</h1>
      <hr />
      {post && <h3>{post.title}</h3>}

      {post && <p>{post.body}</p>}

      {/* <button onClick={createPost}>Create Post!!</button> */}
      <button onClick={updatePost}>Update Post!!</button>
      <button onClick={deletePost}>delete Post!!</button>

      <button>login!!!!</button>
    </div>
  );
};

export default Basic;
