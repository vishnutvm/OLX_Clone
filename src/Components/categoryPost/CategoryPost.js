import React, {useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import {useHistory} from 'react-router-dom'
import './CategoryPost.css'
import Heart from '../../assets/Heart';

function CategoryPost() {

  let history = useHistory()
  const{firebase}= useContext(FirebaseContext)
  const [post,setPost]= useState([])
  const {postDetails,setPostDetails}= useContext(PostContext)

let postCat=postDetails


  useEffect(()=>{
    console.log(postCat)
    sessionStorage.setItem("post", postCat);
    firebase.firestore().collection('products').where('category','==',postCat).get().then((snapshot)=>{
      const allPosts= snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id:product.id
        }
    })
    setPost(allPosts)
    
  })
  })

  const renderPost =(
    <div className="recommendations">
    <div className="heading">
     
      <span>{postDetails}</span>
    </div>
    <div className="cards">
    
    {post.map(products=>{

  
    return   <div
        className="card"
        onClick={()=>{
          setPostDetails(products)
          history.push('/viewpost')
        }}
      >
        
          {/* <div className="favorite">
          <Heart></Heart>
        </div> */}
        <div className="image">
          <img src={products.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {products.price}</p>
          <span className="kilometer">{products.category}</span>
          <p className="name">{products.name}</p>
        </div>
        <div className="date" >
          <span>{products.createdAt}</span>
        </div>
      </div>

})
}

    </div>
   



  </div>
  )


  return(
    <div >
       {renderPost}
    
     
    </div>
  )








}









export default CategoryPost