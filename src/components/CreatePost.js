// import { useState } from "react";
import {firestore} from '../firebase';
import {useFormInput} from './hooks';
import styled, {css} from 'styled-components';
// import classes from './Button.module.css';


// Using styled component for dynamic styling
const StyledButton = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? '#4caf50' : 'blue')};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  ${(props) => 
    props.primary && 
    css`
      border: 4px solid red;
    `
  }
`;

function CreatePost() {
  const title= useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit (e){
    e.preventDefault();

    console.log('title', title);
    console.log('sub title', subTitle);
    console.log('content', content);

    firestore.collection('posts').add({
      title : title.value,
      subTitle : subTitle.value,
      content : content.value,
      createdAt : new Date(),
    })

  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          {/* <input value={title} onChange={(e)=>setTitle(e.target.value)}/> */}
          <input {...title}/>

        </div>
        <div className="form-field">
          <label>Sub Title</label>
          {/* <input value={subTitle} onChange={(e)=>setSubTitle(e.target.value)}/> */}
          <input {...subTitle}/>
        </div>
        <div className="form-field">
          <label>Content</label>
          {/* <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea> */}
          <textarea {...content}></textarea>
        </div>

        {/* <button className={classes.createPostBtn}>
          Create Post
        </button> */}
        <StyledButton primary>
          Create Post
        </StyledButton>
      </form>
    </div>
  );
}
  
export default CreatePost;