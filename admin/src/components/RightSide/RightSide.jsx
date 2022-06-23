import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h2>Updates</h2>
        <Updates />
      </div>
      <div>
        <h2>Customer Review</h2>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
