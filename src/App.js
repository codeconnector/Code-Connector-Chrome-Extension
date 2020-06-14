import React, { useState} from 'react'
import './App.css';

import Meetup from './components/meetup/meetup.js';
import meetupData from './testData.js';

function App() {
  //const [meetupData, setMeetupData] = useState([]);// 

  const getMeetupData = async() => {
    
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
      </section>  
    </main>
  );
}

export default App;
