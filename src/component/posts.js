import React, { Component } from 'react'
import axios from "axios";
import Listpost from './listpost';
export default class posts extends Component {

    state = {
       User: [],
    
      };
      componentDidMount=()=>{this.getList()}
      getList = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts?userId=" + this.props.id)
          .then(res => this.setState({ User: res.data }))
          .catch(err => console.log("erreuuuuur"));
      };  
    render() {
        return (
            <div style={{display:"flex", flexWrap:"wrap" ,margin:"40px 90px 0"}}>
                  {this.state.User.map(e =>
             <Listpost post={e}/>)}
            </div>
        )
    }
}
