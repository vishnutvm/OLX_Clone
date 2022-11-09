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
  const [description, setDescription] = useState('')
  const [Image,setImage] = useState(null)
  const date = new Date()
  const history = useHistory()

  const handleCategory = (event)=>{
    setCategory(event.target.value);
  }
  

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
            <select id="lang"  onChange={handleCategory}>
                  <option   value="select" >Select</option>
                  <option   value="Cars" >Cars</option>
                  <option   value="Motorcycles" >Motorcycles</option>
                  <option   value="Mobiles" >Mobiles</option>
                  <option   value="HouseForsale" >HouseForsale</option>
                  <option   value="Scooter" >Scooter</option>
                  <option   value="CommercialVehicles" >CommercialVehicles</option>
                  <option   value="Laptops" >Laptops</option>
                  <option   value="PC Peripharls" >PC Periphaarls</option>
                  <option   value="Hardware" >Hardware</option>
               </select>
              
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"
                value = {price}
                onChange={(e) => setPrice(e.target.value)}
                />
            <br />
            <label className="label" htmlFor="fname">Description</label>
            <br />
            <input className="input" type="text" id="fname"   defaultValue={description}    onChange={(e)=>{ setDescription(e.target.value) }} name="Description" />
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
