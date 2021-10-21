import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../redux/ConfigureStore';

import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from '../components/Header';

function App() {
  return (
    <div className="App">
      <Header /> 
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
      </ConnectedRouter>
    </div>
  );
}

export default App;
