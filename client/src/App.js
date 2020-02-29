import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Post';
import PostForm from './components/Postform';
import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
        <div>

          <Posts></Posts>
          <PostForm></PostForm>
        </div>
    </Provider>
  );
}

export default App;
