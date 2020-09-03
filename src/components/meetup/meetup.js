import React from 'react';
import "./meetup.css";
import {DateTime} from 'luxon'

const Meetup = (props) => {
    const newDate = () => {
        var dt = DateTime.local(Number(props.date[0]), Number(props.date[1]), Number(props.date[2]), Number(props.date[3]), Number(props.date[4]));
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