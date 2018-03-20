import React from "react";

const Subreddit = props => {
  function truncate(text) {
    var shortend = text.indexOf(" ", 50);
    if (shortend == -1) return text;
    return text.substring(0, shortend);
  }
  console.log("data", props.data);

  if (props.data) {
    return (
      <div className="topic-container">
        <div className="topic-title">{truncate(props.data.title)}...</div>
        <div>{props.data.num_comments} Comments</div>
        <div>{props.data.score} Upvotes</div>
        <div><a href={props.data.url}> Learn more </a></div>
      </div>
    );
  }
  return null;
};

export default Subreddit;
