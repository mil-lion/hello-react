import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from "./components/Comment";

const comment = {
    date: new Date(),
    text: "Hello Component ReactJS!",
    author: {
        name: "Igor Morenko",
        avatarUrl: "https://s.gravatar.com/avatar/5dd44123bda81ed139e2757ff7bfbd24?s=80"
    }
};

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);
