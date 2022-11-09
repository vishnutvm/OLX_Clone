import React,{useState,useContext} from 'react';


import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Signup.css';
import { useHistory } from 'react-router-dom';
export default function Signup() {
const history = useHistory()
  const [username,setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)


  // handle submit
  const handleSubmit = (e)=>{
    e.preventDefault()
 
    firebase.auth().createUserWithEmailAndPassword(email, password, ).then((result)=>{
    console.log(result)
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
history.push('/login')
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img alt='logo' width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
         
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange= {(e)=>setEmail(e.target.value)}
          
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange= {(e)=>setPhone(e.target.value)}
        
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange= {(e)=>setPassword(e.target.value)}
         
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='no'>Login</a>
      </div>
    </div>
  );
}
