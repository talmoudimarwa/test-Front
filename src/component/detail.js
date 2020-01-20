import React, { Component } from 'react'
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
export default class detail extends Component {
state = {
       list: []
      };
      componentDidMount=()=>{this.getList()}
      getList = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/comments?postId=" + this.props.id)
          .then(res => this.setState({ list: res.data }))
          .catch(err => console.log("erreuuuuur"));
      };  
    render() {
        return (
            <div style={{display:"flex", flexWrap:"wrap" ,margin:"40px 90px 0"}}>
                  {this.state.list.map(el =>
                  <div>
                          
          <Card  style={{width:"350px", height:"400px"}}>
         <CardImg  className="img"  src="https://image.flaticon.com/icons/svg/21/21104.svg" alt="Card image cap" />
        <CardBody >
          <CardTitle className=" crd " >{el.name}</CardTitle>
          <CardText className="crd">{el.email}</CardText>
          <CardText className="crd">{el.body}</CardText>
        </CardBody>
      </Card> 
                 
                  </div>)}
            </div>
        )
    }
}