import React from 'react';
import SplitPane from "./layouts/SplitPane";
import WelcomeDialog from "./WelcomeDialog";
import Comment from "./Comment";

const comment = {
    date: new Date(),
    text: "Hello Component ReactJS!",
    author: {
        name: "Igor Morenko",
        avatarUrl: "https://s.gravatar.com/avatar/5dd44123bda81ed139e2757ff7bfbd24?s=80"
    }
};

function SplitApp(props) {
    return (
        <SplitPane
            left={
                <WelcomeDialog/>
            }
            right={
                <Comment
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
            }
        />
    );
}

export default SplitApp;