import React,{useEffect,useContext} from 'react';
import './App.css';
import {BrowserRouter as Routers , Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Post from './store/PostContext'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'


function App() {

const {setUser} =useContext(AuthContext)
const {firebase} = useContext(FirebaseContext)
useEffect(() => {
firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
})


  return (
    <div>
      <Post>
          <Routers>
        <Route exact path='/'>
       <Home /> 
        </Route>
        <Route path='/signup'>
       <Signup /> 
        </Route>
        <Route path='/login'>
       <Login /> 
        </Route>

        <Route path='/create'>
     <Create/>
        </Route>
        <Route path='/viewpost'>
     <ViewPost/>
        </Route>



      </Routers>
      </Post>
    
      
    </div>
  );
}

export default App;
