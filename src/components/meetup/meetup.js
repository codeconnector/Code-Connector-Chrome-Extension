import React from 'react';
import "./meetup.css";

const Meetup = (props) => {
    return(
        <div className="container">
            <p className="date-style">{props.date} at {props.time}</p>
            <h1>{props.title}</h1>
            <p className="content-style">{props.content}</p>
            <a href={props.rsvp}>Click here to RSVP</a>
        </div>
    );
}

export default Meetup;