import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import("./Landing.scss");
import Movie from "./Movie";

class Header extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    axios.get("http://www.reddit.com/r/movies/top/.json?count=25").then(res => {
      this.setState({ movies: res.data.data.children });
    });
  }
  render() {
    let check = this.state.movies.length;
    return (
      <div className="Landing">
        <div className="Movies">
          {check > 1
            ? this.state.movies.map(data => {
                return <Movie data={data.data} key={data.data.id} />;
              })
            : <div className="loader" />}
        </div>
      </div>
    );
  }
}

export default Header;
