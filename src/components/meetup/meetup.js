import React from 'react';
import "./meetup.css";

const Meetup = (props) => {
    return(
        <div className={props.current?'container currentMeetup':'container'}>
            <p className="date-style">{props.date} at {props.time}</p>
            <h1>{props.title}</h1>
            <p className="content-style">{props.content}</p>
            {props.rsvp &&
                <a href={props.link}>Look Forward to seeing you. Click to RSVP</a>
            }
            {!props.rsvp &&
                <a href={props.link} target="_blank" rel="noopener noreferrer">Click to join Zoom meetup at {props.time}</a>
            }
            
        </div>
    );
}

export default Meetup;