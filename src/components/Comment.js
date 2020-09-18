import React from "react";

function formatDate(date) {
    return date.toLocaleDateString();
}

// Компонент Аватар
function Avatar(props) {
    // props.user = {name: "Igor", avatarUrl: "/image/igor.gif"}; // props is read-only!!!
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

// Компонент UserInfo
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

// Функциональный Компонент Комментарий
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;
