import { useState, useEffect } from "react";
import { firestore } from "../firebase";
import {useParams} from 'react-router-dom'
function PostDetail() {
  const [posts, setPosts] = useState({});
  const {postId} = useParams();

  useEffect(() => {
    firestore
    .collection('posts')
    .doc(postId)
    .get()
    .then((snapshot) => {
      console.log('snapshot', snapshot.data());
      setPosts(snapshot.data());
    })
  },[])

  return (
    <div className="post-detail">
      <h3>{posts.title}</h3>
      <p> {posts.content} </p>
    </div>
  );
}
  
export default PostDetail;