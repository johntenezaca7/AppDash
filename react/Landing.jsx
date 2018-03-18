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
          {check > 1
            ? <h2>{this.state.movies[0].data.subreddit_name_prefixed}</h2>
            : null}
          {check > 1
            ? this.state.movies.map(data => {
                return <Topic data={data.data} key={data.data.id} />;
              })
            : <div className="loader" />}
        </div>
        <div className="Topic">
          {this.state.tech.length > 1
            ? <h2>{this.state.tech[0].data.subreddit_name_prefixed}</h2>
            : null}
          {check > 1
            ? this.state.tech.map(data => {
                return <Topic data={data.data} key={data.data.id} />;
              })
            : <div className="loader" />}
        </div>
        <div className="Topic">
          {this.state.space.length > 1
            ? <h2>{this.state.space[0].data.subreddit_name_prefixed}</h2>
            : null}
          {check > 1
            ? this.state.space.map(data => {
                return <Topic data={data.data} key={data.data.id} />;
              })
            : <div className="loader" />}
        </div>
      </div>
    );
  }
}

export default Landing;
