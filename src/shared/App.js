import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header /> 
      <BrowserRouter>
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
