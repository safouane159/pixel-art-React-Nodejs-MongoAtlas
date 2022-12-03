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
    <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Pixel Card title</MDBCardTitle>
        <MDBCardText>
        Date of creation
        </MDBCardText>
        <MDBBtn href='#'>More details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default PixelCard;