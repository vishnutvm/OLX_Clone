import React ,{useEffect,useContext,useState} from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import './Post.css';
import {useHistory} from 'react-router-dom'
function Posts() {
  const {setPostDetails} = useContext(PostContext)
const {firebase} = useContext(FirebaseContext)
const [products, setproducts] = useState([])
const [cars,setCars] = useState([])
const history = useHistory()


useEffect(()=>{

firebase.firestore().collection('products').get().then((snapshot)=>{
  console.log(snapshot)
  const allPost = snapshot.docs.map((product)=>{
    return{
      ...product.data(),
      id:product.id
    }
  })
setproducts(allPost)
})
},[])

// filtering to get only the car porsts
useEffect(()=>{
  firebase.firestore().collection('products').where('category','==','Cars').get().then((snapshot)=>{
    const carsdata= snapshot.docs.map((product)=>{
      return {
        ...product.data(),
        id:product.id
      }
  })
  setCars(carsdata)
})
},[])


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Cars</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            cars.map((product)=>{
              return   <div
              className="card"
              onClick={()=>{
                setPostDetails(product)
                history.push('/viewpost')
              }}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="product" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>


            })
          }
        




        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">



{/* rendering dinamic cards for fresh recommendation section */}

{
products.map((product)=>{
  return <div key={product.price} className="card"
  onClick={()=>{
    
    setPostDetails(product)
    history.push('/viewpost')
  }}
  
  >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="product" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>

})
   
}
         



        </div>
      </div>
    </div>
  );
}

export default Posts;
