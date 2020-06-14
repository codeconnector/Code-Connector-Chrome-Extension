import React, { useState} from 'react'
import './App.css';

import Meetup from './components/meetup/meetup.js';

function App() {
  //const [meetupData, setMeetupData] = useState([]);// 

  const getMeetupData = async() => {
    
  }

  return (
    <main>
      <header>Code Connector</header>
      <section className="display-meetups">
        <Meetup />
      </section>  
    </main>
  );
}

export default App;
