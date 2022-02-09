import {Routes, Route} from 'react-router-dom';
import {Navbar, Home, CreatePost, PostDetail} from './index';
import {StyleRoot} from 'radium'


function App() {
  return (
    <StyleRoot>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/post/:postId' element = {<PostDetail />} />
          <Route path = '/create-post' element = {<CreatePost />} />
        </Routes>
      </div>
    </StyleRoot>
  );
}

export default App;
