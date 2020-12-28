import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';

function App() {

  const events = timelineData.events;
  console.log(events);

  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person} social media feed</h1>
      </header>
      <main className="App-main">
        <TimelineEvent person='lina do' status='super duper cool' timeStamp="2018-05-18T22:12:03Z" />
        <Timeline events={events} />
      </main>
    </div>
  );
}

export default App;
