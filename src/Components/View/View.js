import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import { AiOutlinePhone } from "react-icons/ai";
import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
    console.log("useeffect started")
    const {userId} = postDetails
    console.log(userId)
    firebase.firestore().collection('users').where('id','==', userId).get().then((res) => {
      console.log(res)
      console.log("enterd")
      res.forEach(doc => {
          setUserDetails(doc.data())
      })
    })
   
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt="productImage"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.postedAt}</span>
        </div>

        { userDetails &&
            <div className="contactDetails">
          <p>Sold By</p>
          <p >{userDetails.username}</p>
          <p> {userDetails.phone}</p>
        </div>
        }
      
      </div>
    </div>
  );
}
export default View;
