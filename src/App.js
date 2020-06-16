import React, { useState, useEffect } from "react";
import "./App.css";

import Meetup from "./components/meetup/meetup.js";
import meetupData from './testData.js';

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
    const data = await res.json();
    console.log(data.msg);
    setEventData(data.msg);
    */
  };

  return (
    <main>
      <header>Code Connector</header>
      <section className="display-meetups">
        {(meetupData.length === 0 || meetupData === undefined) &&          
            <div><h1>Loading</h1></div>          
        }

        {meetupData.map((data, id) => {
          if(id === 0){
            return(
              <Meetup
              key={id}
              date={data.date}
              time={data.time}
              title={data.title}
              content={data.content}
              link={data.link}
              rsvp={data.rsvp}
              current={true}
            />
            );
          }

          return (
            <Meetup
              key={id}
              date={data.date}
              time={data.time}
              title={data.title}
              content={data.content}
              link={data.link}
              rsvp={data.rsvp}
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
