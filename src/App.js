import React, { useState, useEffect } from "react";
import "./App.css";

import Meetup from "./components/meetup/meetup.js";
import meetupData from './testData.js';//For testing

function App() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getMeetupData();
  }, []);

  const getMeetupData = async () => {
    /*
    const res = await fetch(
      "https://sad-neumann-49112b.netlify.app/.netlify/functions/data"
    );
    const {events} = await res.json();
    */
    setEventData(meetupData);
  };

  const checkIfPastTodayDate = (date) => {
    const hourInMillieSeconds = 60 *60000 //allow meetup one hour grace before being removed 
    const meetupDate = Date.parse(date) + hourInMillieSeconds;
    const todayDate = Date.parse(new Date());
    if(meetupDate < todayDate){
      return false;
    }
    return true;
  }

  return (
    <main>
      <header>Code Connector</header>
      <section className="display-meetups">
        {(eventData.length === 0 || eventData === undefined) &&          
            <div><h1>Loading</h1></div>          
        }

        {eventData
          .filter((meetup)=> {
            return checkIfPastTodayDate(meetup.date)
          })
          .map((data, id) => {
            return(
              <Meetup
                key={id}
                date={data.date}
                time={data.time}
                title={data.title}
                content={data.content}
                link={data.link}
                rsvp={data.rsvp}
                current={id === 0 ? true : false}
              />
            );
          })}

        <p>
          <a href="https://codeconnector.io/">Code Connector</a> is a non-profit
          that's organized tech meetups to help people start their journey into
          tech. You can join our daily conversations by clicking this link:{" "}
          <a href="https://bit.ly/2Ywnzqc">Code Connector slack channel</a>.
        </p>
      </section>
    </main>
  );
}

export default App;
