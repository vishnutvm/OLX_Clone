import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PostContext } from "../../store/PostContext";
import "./Banner.css";
import Arrow from "../../assets/Arrow";
function Banner() {
  const { setPostDetails } = useContext(PostContext);
  const history = useHistory();
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow>
          </div>
          <div className="otherQuickOptions">
            <span
              onClick={() => {
                setPostDetails("Cars");
                history.push('/categoryposts')
              }}
            >
              Cars
            </span>
            <span
              onClick={() => {
                setPostDetails("Motorcycles");
                 history.push('/categoryposts')
              }}
            >
              Motorcycles
            </span>
            <span
              onClick={() => {
                setPostDetails("Mobiles");
                 history.push('/categoryposts')
              }}
            >
              Mobile Phones
            </span>
            <span
              onClick={() => {
                setPostDetails("HouseForsale");
                 history.push('/categoryposts')
              }}
            >
              For Sale:Houses & Apartment
            </span>
            <span
              onClick={() => {
                setPostDetails("Scooter");
                 history.push('/categoryposts')
              }}
            >
              Scooter
            </span>
            <span
              onClick={() => {
                setPostDetails("Laptops");
                 history.push('/categoryposts')
              }}
            >
              Laptops
            </span>
            <span
              onClick={() => {
                setPostDetails("CommercialVehicles");
                 history.push('/categoryposts')
              }}
            >
              Commercial & Other Vehicles
            </span>
            <span
              onClick={() => {
                setPostDetails("HouseForsale");
                 history.push('/categoryposts')
              }}
            >
              For Rent: House & Apartment
            </span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
