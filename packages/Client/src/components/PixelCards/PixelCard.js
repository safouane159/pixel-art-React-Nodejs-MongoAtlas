import React from 'react';
import "./PixelCard.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function PixelCard() {
  return (
      <div className={"pb-card"}>
        <div>Title</div>
        <div>Date creation</div>
        <div>Temps restant</div>
      </div>
  );
}

export default PixelCard;