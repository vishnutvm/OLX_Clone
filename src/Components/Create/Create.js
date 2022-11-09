import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'
import { useHistory } from 'react-router-dom';
const Create = () => {
  const {firebase}= useContext(FirebaseContext)
  const {user}= useContext(AuthContext)
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('')
  const [Image,setImage] = useState(null)
  const date = new Date()
  const history = useHistory()
  const handleSubmit =()=>{
firebase.storage().ref(`/image/${Image.name}`).put(Image).then(({ref})=>{
  ref.getDownloadURL().then((url)=>{
    console.log("successfully uploaded ")
    firebase.firestore().collection('products').add({
      name,
      category,
      price,
      url,
      userId:user.uid,
      createdAt:date.toDateString()
    })
  history.push('/')
  })
})
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value = {name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value = {category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"
                value = {price}
                onChange={(e) => setPrice(e.target.value)}
                />
            <br />
         
          <br />

          {
            Image ?  <img  alt="Posts" width="200px" height="200px" 
        src={URL.createObjectURL(Image)}
        ></img> : ''
          }
        
          
            <br />
            <input type="file" onChange={(e)=>{
          setImage(e.target.files[0])
            }}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
