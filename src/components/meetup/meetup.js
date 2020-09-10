import React from 'react';
import "./meetup.css";

const Meetup = ({date, time, current, title, rsvp, link, content}) => {
    return(
        <div className={current ? 'container currentMeetup' : 'container'}>
            <p className="date-style">{(new Date(date)).toLocaleString(navigator.language, {timeZoneName:'short'})}</p>
            <h1>{title}</h1>
            <p className="content-style">{content}</p>
            {rsvp &&
                <a href={link}>Look Forward to seeing you. Click to RSVP</a>
            }
            {!rsvp &&
                <a href={link} target="_blank" rel="noopener noreferrer">Click to join Zoom meetup at {time}</a>
            }
        </div>
    );
}

export default Meetup;
