import React from "react";

const Subreddit = props => {
  function truncate(text) {
    var shortend = text.indexOf(" ", 35);
    if (shortend == -1) return text;
    return text.substring(0, shortend);
  }
  if (props.data) {
    return (
      <div className="topic-container">
        <div>{truncate(props.data.title)}</div>
      </div>
    );
  }
  return null;
};

export default Subreddit;
