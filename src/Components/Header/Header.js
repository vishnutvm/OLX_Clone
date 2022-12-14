import React,{useContext} from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
function Header() {
  const History = useHistory()
  const {user} = useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{
          History.push('/')
        }}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
        <select id="lang" className='select'  >
                  <option   value="select" >ENGLISH</option>
                  <option   value="Cars" >HINDI</option>
                  
               </select> 
               
          
        </div>
        <div className="loginPage">
         
{/* if the user exist the username will show else the login button with redirecting to login page */}
{
  user? <span>{`Welcome ${user.displayName}`}</span> :  <span onClick={()=>{
    History.push('/login')
  }}>Login</span>
}
        
          <hr />
        </div>
       { user && <span onClick={()=>{
        firebase.auth().signOut();
         History.push('/login')
       }} >Logout</span> } 



        <div onClick={()=>{

user && History.push('/create');

        }} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Header;
