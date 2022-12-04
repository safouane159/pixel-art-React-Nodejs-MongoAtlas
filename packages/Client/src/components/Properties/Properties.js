import React from 'react';
import "./Properties.css"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';

function Properties() {
  return (
    <MDBRow>
    <MDBCol sm='6'>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Number of registered users</MDBCardTitle>
          <MDBCardText>
           4
          </MDBCardText>

        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol sm='6'>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Number of pixelBoard created</MDBCardTitle>
          <MDBCardText>
         3
          </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  );
}

export default Properties;