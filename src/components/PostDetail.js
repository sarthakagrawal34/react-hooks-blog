import { useState, useEffect } from "react";
import { firestore } from "../firebase";
import {useParams} from 'react-router-dom';
import Radium from "radium";


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
      <h3 style={styles.heading}>{posts.title}</h3>
      <p style={styles.postDetail}> {posts.content} </p>
    </div>
  );
}

const styles = {
  heading : {
    textAlign: 'center',
    margin:0,
    
    ':hover' : {
      color: 'red'
    },
  },
  postDetail: {
    border : '1px solid #e1e1e1',
    padding : 5,
    paddingTop: 10,
    borderRadius: 5,

    '@media(max-width:720px)': {
      color: 'pink',
    },
  },
}

export default Radium(PostDetail);