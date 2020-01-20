import React from 'react'
import Comment from './comment';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from "react-router-dom";
export default function listpost({ post }) {
  return (
    <div  >
      <Card >
        <CardBody >
          <CardTitle className=" crd " >{post.title}</CardTitle>
          <CardText className="crd">{post.body}</CardText>
          <Comment id={post.id}  />
          <Link 
            to={`/detail/${post.id}`}>
            <button className="btn">detail</button>
          </Link>
        </CardBody>
      </Card>
    </div>

  )
}
