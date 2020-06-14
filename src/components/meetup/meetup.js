import React from 'react';
import "./meetup.css";

const Meetup = () => {
    return(
        <div className="container">
            <p className="date-style">June 14, 2020 at 1:00pm CST</p>
            <h1>Code Together with James Quick</h1>
            <p className="content-style">James Q. Quick is hosting a code-together where you can get help with code, or get advice on tech careers and startups.</p>
            <a href="https://www.meetup.com/memphis-technology-user-groups/events/nkpvsrybcjbsb/">Click here to RSVP</a>
        </div>
    );
}

export default Meetup;