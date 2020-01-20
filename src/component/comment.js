import React, { Component } from 'react'

import axios from "axios";
export default class comment extends Component {
    state = {
        comment: [],
       };
       componentDidMount=()=>{this.getList()}
       getList = () => {
         axios
           .get("https://jsonplaceholder.typicode.com/comments?postId=" + this.props.id)
           .then(res => this.setState({ comment: res.data }))
           .catch(err => console.log("erreuuuuur"));
       };  
    render() {
        return (
            <div>
    <h3>{this.state.comment.length}</h3>
            </div>
        )
    }
}