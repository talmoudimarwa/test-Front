import React from 'react';
 import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';

 const card=({contact }) =>{
    return (
        <div style={{display:"flex", flexWrap:"wrap" ,margin:"40px 90px 0"}} >
           
          <Card >
         <CardImg  className="img"  src="https://image.flaticon.com/icons/svg/21/21104.svg" alt="Card image cap" />
        <CardBody >
          <CardTitle className=" crd " >{contact.name}</CardTitle>
          <CardText className="crd">{contact.email}</CardText>
      
          <Link
         to={`/posts/${contact.id}`}
           >
          <button className="btn"
      
          >Posts</button>
         
          </Link>  
        </CardBody>
      </Card> 
        </div>
    )
}
export default card