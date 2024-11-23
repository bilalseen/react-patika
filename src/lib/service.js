import axios from "axios";

// src/lib/service.js
async function getData(user_id) {
  const endpoint = "https://jsonplaceholder.typicode.com/users/";

  async function getUser() {
    try {
      const { data: userData } = await axios.get(endpoint + user_id);
      return userData;
    } catch (e) {
      console.log(e);
      return null; // Error case return null
    }
  }

  async function getPost() {
    const endpoint = "https://jsonplaceholder.typicode.com/posts?userId=";
    try {
      const { data: post } = await axios.get(endpoint + user_id);
      return post;
    } catch (e) {
      console.log(e);
      return null; // Error case return null
    }
  }

  const userData = await getUser();
  const posts = await getPost();

  return { user: userData, posts: posts }; // Return user and posts object
}

export default getData;
