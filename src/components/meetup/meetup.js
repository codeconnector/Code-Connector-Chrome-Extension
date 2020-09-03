import React from 'react';
import "./meetup.css";
const { DateTime } = require("luxon");

const Meetup = (props) => {
    const newDate = () => {
        var dt = DateTime.local(props.date[0], props.date[1], props.date[2], props.date[3], props.date[4]);
        return `${dt.toLocaleString(DateTime.DATETIME_FULL)}  ${dt.zoneName}`
    }
    
    return(
        <div className={props.current?'container currentMeetup':'container'}>
            <p className="date-style">{newDate()}</p>
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