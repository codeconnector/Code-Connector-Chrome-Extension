import React from 'react';
import "./meetup.css";
import {DateTime} from 'luxon'

const Meetup = (props) => {
    const newDate = () => {
        const test = props.date.split(",");
        var dt = DateTime.local(Number(test[0]), Number(test[1]), Number(test[2]), Number(test[3]), Number(test[4]));
        const dateOfEvent = dt.toLocaleString(DateTime.DATETIME_FULL)
        return dateOfEvent
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