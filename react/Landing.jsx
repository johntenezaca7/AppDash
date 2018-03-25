import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Topic from "./Subreddit.jsx";

class Landing extends Component {
  state = {
    hello: "Hello"
  };
  render() {
    return (
      <div className="Landing">
        What should this be?
      </div>
    );
  }
}

export default Landing;
