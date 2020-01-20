import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import List from "./component/list";
import Posts from "./component/posts";
import Detail from "./component/detail";
import axios from "axios";
import './App.css';
export default class App extends Component {
  state = {
    contactUser: [],
  };
  componentDidMount = () => { this.getContact() }
  getContact = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ contactUser: res.data }))
      .catch(err => console.log("erreuuuuur"));
  };
  render() {
    return (
      <div >
        <div style={{ display: "flex", backgroundColor: "#E14D43" }}>
          <Link className="link" to="/contactList" >
            <h1 >Contact User</h1>
          </Link>
        </div >

        <Route path="/contactList"
          render={() => <List user={this.state.contactUser} />}  >
        </Route>
        <Route path="/posts/:id"
          render={(props) => <Posts id={props.match.params.id} />} ></Route>
        <Route path="/detail/:id"
          render={(props) => <Detail id={props.match.params.id} />} ></Route>
      </div>
    );
  }
}
