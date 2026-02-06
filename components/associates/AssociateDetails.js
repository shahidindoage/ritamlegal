import React from "react";
import './associateDetails.css';

const AssociateDetails = ({ associate }) => {
  return (
    <div className="associate-details-container">
      <div className="associate-details-left">
        <img
          src={associate.img}
          alt={associate.title}
          className="associate-details-image"
        />
      </div>
      <div className="associate-details-right">
      <h3>{associate.title.toUpperCase()}</h3>

        <h4>{associate.designation}</h4>
        {/* <h5>{associate.heading}</h5> */}
        <div dangerouslySetInnerHTML={{ __html: associate.description }} />
      </div>
    </div>
  );
};

export default AssociateDetails;
