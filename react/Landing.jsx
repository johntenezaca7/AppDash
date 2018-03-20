import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Topic from "./Subreddit.jsx";

class Landing extends Component {
  state = {
    movies: [],
    tech: [],
    space: []
  };
  componentDidMount() {
    axios.get("http://www.reddit.com/r/movies/top/.json?count=25").then(res => {
      this.setState({ movies: res.data.data.children });
    });
    axios
      .get("http://www.reddit.com/r/technology/top/.json?count=25")
      .then(res => {
        this.setState({ tech: res.data.data.children });
      });
    axios.get("http://www.reddit.com/r/space/top/.json?count=25").then(res => {
      this.setState({ space: res.data.data.children });
    });
  }
  render() {
    let check = this.state.movies.length;
    return (
      <div className="Landing">
        <div className="Topic">
          <h2>r/movies</h2>
          {check > 1
            ? this.state.movies.slice(0, 10).map(data => {
                return <Topic data={data.data} key={data.data.id} />;
              })
            : <div className="loader" />}
        </div>
        <div className="Topic">
          <h2>r/technology</h2>
          {check > 1
            ? this.state.tech.slice(0, 10).map(data => {
                return <Topic data={data.data} key={data.data.id} />;
              })
            : <div className="loader" />}
        </div>
        <div className="Topic">
          <h2>r/space</h2>
          {check > 1
            ? this.state.space.slice(0, 10).map(data => {
                return <Topic data={data.data} key={data.data.id} />;
              })
            : <div className="loader" />}
        </div>
      </div>
    );
  }
}

export default Landing;
