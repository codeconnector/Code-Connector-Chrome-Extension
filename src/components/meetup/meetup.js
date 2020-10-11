import React from 'react';
import "./meetup.css";

const Meetup = ({date, current, title, rsvp, link, content}) => {
    //Show meetup link at least 10 minutes prior to start of meetup
    const showMeetupLink = () => {
        const minutesInMillieSeconds = 10 *60000; //convert millieseconds to minutes
        const minutesBeforeMeetup = Date.parse(date) - minutesInMillieSeconds 
        if(minutesBeforeMeetup < Date.parse(new Date())){
            return true;
        }
        return false;
    }

    return(
        <div className={current ? 'container currentMeetup' : 'container'}>
            <p className="date-style">{(new Date(date)).toLocaleString(navigator.language, {timeZoneName:'short'})}</p>
            <h1>{title}</h1>
            <p className="content-style">{content}</p>
            {!showMeetupLink() &&
                <a href={rsvp} target="_blank" rel="noopener noreferrer">Look Forward to seeing you. Click to RSVP</a>
            }            
            
            {showMeetupLink() &&
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer">Click to join Zoom meetup.</a>
            </div>
            }
        </div>
    );
}

export default Meetup;
