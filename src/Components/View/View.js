import React, { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../../store/FirebaseContext";
import { PostContext } from "../../store/PostContext";
import { AiOutlineWhatsApp,AiOutlinePhone } from "react-icons/ai";
import "./View.css";
function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    console.log("useeffect started");
    const { userId } = postDetails;
    console.log(userId);
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        console.log(res);
        console.log("enterd");
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  }, []);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="productImage" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>Product Name : {postDetails.name}</span>
          <p>Product Category : {postDetails.category}</p>
          <span>Posted On : {postDetails.createdAt}</span>
        </div>

        {userDetails && (
          <div className="contactDetails">
            <p>Sold By</p>
            <p>Name : {userDetails.username}</p>
            <p> Phone No: {userDetails.phone}</p>

            <div className="callOrWts">
              <a href={"tel:+" + userDetails.phone}>
                {" "}
                <p className="icons">
                <AiOutlinePhone/>{" "}
                  Click Me For Call
                </p>
              </a>


              <a
                href={
                  "https://wa.me/+91" +
                  userDetails.phone +
                  `?text=Hi!%20I%20am%20intersted%20To%20buy%20${postDetails.name}`
                }
              >
                {" "}
                <p className="icons">
                 <AiOutlineWhatsApp/>{" "}
                  Click Me For Whatsapp
                </p>{" "}
              </a>


            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
