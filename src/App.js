import React, { useState, useEffect} from 'react'
import './App.css';

import Meetup from './components/meetup/meetup.js';
import meetupData from './testData.js';

function App() {
  const [testData, setTestData] = useState("");

  useEffect(() => { 
    
    getMeetupData(); 
  }, []);

  const getMeetupData = async() => {
    const data = await fetch("/.netlify/functions/data"); 
    const test = await JSON.parse(data);
    console.log(test);
    //setTestData(data);
  }

  return (
    <main>
      <header>Code Connector</header>
      <section className="display-meetups">
        {meetupData.map((data, id) => {
          return(
            <Meetup date={data.date} time={data.time} title={data.title} content={data.content} rsvp={data.rsvp} />
          )
        })
        }

        <h3>
          <a href="https://codeconnector.io/">Code Connector</a> is a non-profit that's organized tech meetups to help people 
          start their journey into tech. You can join our daily conversations by clicking 
          this link: <a href="https://bit.ly/2Ywnzqc">Code Connector slack channel</a>.
        </h3>        
      </section>  
    </main>
  );
}

export default App;
